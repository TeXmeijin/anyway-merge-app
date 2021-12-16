import { useStyletron } from "baseui";
import { Card, StyledAction, StyledBody } from "baseui/card";
import { Slider } from "baseui/slider";
import { Spinner } from "baseui/spinner";
import React, { useState } from "react";
import Seo from "~/components/Seo";

const DEFAULT_SPINNER_SIZE = 100;

const BasewebSandbox: React.VFC = () => {
  const [css] = useStyletron();
  const [value, setValue] = useState([DEFAULT_SPINNER_SIZE]);
  return (
    <>
      <Seo
        title="Spinner｜毎日誰かのプルリクを脳死でマージするアドベントカレンダー"
        description="初日に私が空っぽのNext.jsプロジェクトを作って公開しておくので、25日間毎日誰かがPull Request出して脳死でマージしていき、12月25日に何ができているでしょう？アドベントカレンダーです。"
      />
      <div
        className={css({
          width: "500px",
          height: "500px",
        })}
      >
        <Card title={"Just a flexible spinner"}>
          <StyledBody>
            This page is just meant to show a spinner provided as part of the
            BaseWeb components.
            <br />
            <br />
            Please pick its size using the slider below. Have fun!
          </StyledBody>
          <StyledAction>
            <Slider
              value={value}
              onChange={({ value }) => value && setValue(value)}
            />
          </StyledAction>
        </Card>
        <div
          className={css({
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            margin: "100px",
          })}
        >
          <Spinner
            size={`${value.length > 0 ? value[0] : DEFAULT_SPINNER_SIZE}px`}
          />
        </div>
      </div>
    </>
  );
};

export default BasewebSandbox;
