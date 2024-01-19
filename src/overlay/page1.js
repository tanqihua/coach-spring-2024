import { Wraper } from "./helper";
import { Button, ButtonRound } from "./components";
import { useNavigate } from "react-router-dom";

const Page1 = (props) => {
  const { phaserRef } = props;
  const nav = useNavigate();

  return (
    <Wraper style={{}}>
      <div className="block" style={{ height: "50svh" }} />

      <h1>WHAT’s YOUR COURAGE</h1>
      <div className="block" style={{ height: "20svh" }} />
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
