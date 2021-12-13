import useMouse, { MousePosition } from "@react-hook/mouse-position";
import { Types } from "ably/ably";
import { Realtime } from "ably/promises";
import { useCallback, useEffect, useMemo, useState } from "react";

const ably = process.env.ABLY_IS_ACTIVE
  ? new Realtime.Promise({
      authUrl: "/api/ably-create-token",
    })
  : null;

const useChannel = (
  channelName: string,
  callbackOnMessage: (_msg: Types.Message) => void
): [Types.RealtimeChannelPromise | null] => {
  const channel = useMemo(
    () => (ably ? ably.channels.get(channelName) : null),
    [channelName]
  );

  useEffect(() => {
    channel?.subscribe((msg) => {
      callbackOnMessage(msg);
    });

    return () => {
      channel?.unsubscribe();
    };
  }, [callbackOnMessage, channel]);

  return [channel];
};

type Position = { x: number; y: number };
export type Pointers = { [k: string]: Position & { color: string } };

export const useRealtimeCursor = (): [Pointers, MousePosition] => {
  const [points, setPoints] = useState<Pointers>({});

  const handler = useCallback(({ connectionId, data }: Types.Message) => {
    if (connectionId === ably?.connection.id) return;
    const { x, y }: Position = data;
    setPoints((prev) => ({
      ...prev,
      [connectionId]: {
        x: x * document.documentElement.clientWidth,
        y: y * document.documentElement.clientHeight,
        color: stringToColor(connectionId),
      },
    }));
  }, []);
  const [channel] = useChannel("realtime-cursor", handler);

  const [body, setBody] = useState<HTMLBodyElement | null>(null);
  useEffect(() => {
    const body = document.querySelector("body");
    setBody(body);
  }, []);

  const mouse = useMouse(body, {
    enterDelay: 100,
    leaveDelay: 100,
    fps: 8,
  });
  useEffect(() => {
    const { pageX, pageY } = mouse;
    if (pageX && pageY)
      channel?.publish({
        name: "mouse",
        data: {
          x: pageX / document.documentElement.clientWidth,
          y: pageY / document.documentElement.clientHeight,
        },
      });
  }, [channel, mouse]);

  const myPointer = useMouse(body, {
    enterDelay: 100,
    leaveDelay: 100,
    fps: 32,
  });

  return [points, myPointer];
};

const stringToColor = (str: string): string => {
  const n = Array.from(str)
    .map((ch) => ch.charCodeAt(0))
    .reduce((a, b) => a + b);
  const colorAngle = (n * n) % 360;
  return `hsl(${colorAngle}, 80%, 64%)`;
};
