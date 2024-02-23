import { Wraper } from "./helper";
import { Button, ButtonRound } from "./components";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store";
const Page1 = (props) => {
  const { phaserRef } = props;
  const { setplayAnimation, language } = useStore();
  const nav = useNavigate();

  return (
    <Wraper style={{}}>
      <div className="block" style={{ height: "48svh" }} />

      <div
        style={{
          position: "relative",
        }}
      >
        <h1
          style={{
            filter: "drop-shadow(0px 2px 2px #5d63beaf)",
          }}
        >
          {language.page1.title1}
        </h1>
        <div className="block" style={{ height: "1svh" }} />
        <h5
          style={{
            filter: "drop-shadow(0px 2px 2px #5d63beaf)",
          }}
        >
          {language.page1.p1.split("\n").map((item, key) => {
            return (
              <span
                key={key}
                style={{
                  fontSize: "inherit",
                }}
              >
                {item}
                <br />
              </span>
            );
          })}
        </h5>
      </div>
      <div className="block" style={{ height: "10svh" }} />
      <ButtonRound
        onClick={() => {
          nav("/formpage");
        }}
      >
        {language.page1.btn1}
      </ButtonRound>
    </Wraper>
  );
};

export default Page1;
