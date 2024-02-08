import { Wraper } from "./helper";
import { Button, ButtonRound } from "./components";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store";
const Page1 = (props) => {
  const { phaserRef } = props;
  const { setplayAnimation } = useStore();
  const nav = useNavigate();

  return (
    <Wraper style={{}}>
      <div className="block" style={{ height: "48svh" }} />

      <div
        style={{
          position: "relative",
        }}
      >
        {/* <div
          style={{
            background:
              "linear-gradient(0deg, rgba(255,255,255,0) 0%, #9194c729 50%, rgba(255,255,255,0) 100%)",
            height: "40svh",
            width: "100vw",
            zIndex: "1",
            position: "absolute",
            top: "41%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        /> */}
        <h1
          style={{
            filter: "drop-shadow(0px 2px 2px #5d63beaf)",
          }}
        >
          FIND YOUR COURAGE
        </h1>
        <div className="block" style={{ height: "1svh" }} />
        <h5
          style={{
            filter: "drop-shadow(0px 2px 2px #5d63beaf)",
          }}
        >
          Move the dot to answer each question. <br />
          At the end of the quiz, we’ll reveal your <br />
          secret superpower.
        </h5>
      </div>
      <div className="block" style={{ height: "10svh" }} />
      <ButtonRound
        onClick={() => {
          nav("/formpage");
        }}
      >
        LET’S GO
      </ButtonRound>
    </Wraper>
  );
};

export default Page1;
