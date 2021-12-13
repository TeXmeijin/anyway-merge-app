import { VFC } from "react";
import { useRealtimeCursor } from "./use-realtime-cursor";

export const RealtimeCursors: VFC = () => {
  const [pointers, mouse] = useRealtimeCursor();

  return (
    <>
      {Object.entries(pointers).map(([id, { x, y, color }]) => (
        <div
          key={id}
          style={{
            position: "absolute",
            left: x,
            top: y,
            color,
          }}
        >
          ●
        </div>
      ))}
      {!!mouse.pageX && !!mouse.pageY && (
        <div
          style={{
            position: "absolute",
            left: mouse.pageX,
            top: mouse.pageY,
            color: "red",
          }}
        >
          ●
        </div>
      )}
    </>
  );
};
