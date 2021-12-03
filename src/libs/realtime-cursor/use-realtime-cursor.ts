import { Realtime } from "ably/promises";
import { Types } from "ably/ably";
import {
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import useMouse from "@react-hook/mouse-position";

const ably = process.env.ABLY_IS_ACTIVE
  ? new Realtime.Promise({
      authUrl: process.env.ABLY_API_ENDPOINT,
    })
  : null;

const useChannel = (
  channelName: string,
  callbackOnMessage: (msg: Types.Message) => void
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

export const useRealtimeCursor = (): [RefObject<HTMLDivElement>, Pointers] => {
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

  const ref = useRef<HTMLDivElement>(null);

  const mouse = useMouse(ref, {
    enterDelay: 1000,
    leaveDelay: 100,
    fps: 5,
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

  return [ref, points];
};

const stringToColor = (str: string): string => {
  const n = Array.from(str)
    .map((ch) => ch.charCodeAt(0))
    .reduce((a, b) => a + b);
  const colorAngle = (n * n) % 360;
  return `hsl(${colorAngle}, 80%, 64%)`;
};
