import { VFC } from "react";
import { Pointers } from "./use-realtime-cursor";

type Props = {
  pointers: Pointers;
};

export const RealtimeCursors: VFC<Props> = ({ pointers }) => {
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
    </>
  );
};
