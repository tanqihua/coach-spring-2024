import { Wraper } from "./helper";
import { Button, ButtonRound } from "./components";
import { useNavigate } from "react-router-dom";

const Page1 = (props) => {
  const { phaserRef } = props;
  const nav = useNavigate();

  return (
    <Wraper style={{}}>
      <div className="block" style={{ height: "50svh" }} />

      <h1>WHAT’S YOUR COURAGE</h1>
      <div className="block" style={{ height: "1svh" }} />
      <h5>
        Move the dot to best reflect your style. <br /> 
        At the end, we’ll reveal your secret <br />
        superpower.
      </h5>
      <div className="block" style={{ height: "12svh" }} />
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
