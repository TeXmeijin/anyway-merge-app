import { useStyletron } from "baseui";
import { StyledAction } from "baseui/card";
import { Slider } from "baseui/slider";
import { Spinner } from "baseui/spinner";
import React, { useState } from "react";
import style from "./spinner.module.css";
import Seo from "~/components/Seo";
const DEFAULT_SPINNER_SIZE = 100;

const BasewebSandbox: React.VFC = () => {
  const [css] = useStyletron();
  const [value, setValue] = useState([DEFAULT_SPINNER_SIZE]);
  return (
    <div>
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
        {/* <Card title={"Just a flexible spinner"}> */}
        <section className={style.card}>
          <h1 className={style.cardTitle}>Just a flexible spinner</h1>
          <p>
            This page is just meant to show a spinner provided as part of the
            BaseWeb components.
            <br />
            <br />
            Please pick its size using the slider below. Have fun!
          </p>
          <StyledAction>
            <Slider
              value={value}
              onChange={({ value }) => value && setValue(value)}
            />
          </StyledAction>
        </section>
        {/* </Card> */}
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
    </div>
  );
};

export default BasewebSandbox;
