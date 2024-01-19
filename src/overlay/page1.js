import { Wraper } from "./helper";
import { Button, ButtonRound } from "./components";
const Page1 = (props) => {
  const { phaserRef } = props;

  return (
    <Wraper style={{}}>
      <div className="block" style={{ height: "50svh" }} />

      <h1>WHAT’s YOUR COURAGE</h1>
      <div className="block" style={{ height: "20svh" }} />
      <ButtonRound
        onClick={() => {
          console.log(phaserRef.current.scene.scenes[2].scene.start("quests"));
        }}
      >
        LET’S GO
      </ButtonRound>
    </Wraper>
  );
};

export default Page1;
