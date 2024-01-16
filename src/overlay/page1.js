import { Wraper } from "./helper";
import { Button, ButtonRound } from "./components";
const Page1 = (props) => {
  return (
    <Wraper style={{}}>
      <div className="block" style={{height:"50vh"}}/>

      <h1>WHAT'S YOUR COURAGE</h1>
      <div className="block" style={{height:"20vh"}}/>
      <ButtonRound
      onClick={()=>{
        window.setTriggerUp()
      }}
      >LET'S GO</ButtonRound>
    </Wraper>
  );
};

export default Page1;
