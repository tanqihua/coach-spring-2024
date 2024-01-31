import { Wraper } from "./helper";
import { Button, ButtonRound } from "./components";
import { useNavigate } from "react-router-dom";

const Page1 = (props) => {
  const { phaserRef } = props;
  const nav = useNavigate();

  return (
    <Wraper style={{}}>
      <div className="block" style={{ height: "48svh" }} />

      <div
        style={{
          position: "relative",
        }}
      >
        <div
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
        />
        <h1
          style={{
            filter: "drop-shadow(0px 4px 4px #9598c8)",
          }}
        >
          WHAT’S YOUR COURAGE
        </h1>
        <div className="block" style={{ height: "1svh" }} />
        <h5>
          Move the dot to best reflect
          <br /> your style. At the end, we’ll reveal <br />
          your secret superpower.
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
