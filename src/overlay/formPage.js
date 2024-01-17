import { Wraper } from "./helper";
import { Button, ButtonRound , Input , Terms} from "./components";

const FormPage = (props) => {
  return (
    <Wraper style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="formContainer" style={{ 
        backgroundColor: "#f4b404",
        padding: "0 3rem", // Adjust the padding as needed
        borderRadius: "10px", // Optional: Add border-radius for rounded corners
        width: "90%", // Adjust the width as needed
        height: "85svh", // Adjust the height as needed
        position : "relative"
      }}>

        <div className="block" style={{height:"5%"}}/>

        <div
          className="imgContainer"
          style={{
            height : "6svh",
            margin : "auto"
          }}
        >
          <img src="/asset/logo.png"/>
        </div>
        
        <div className="block" style={{height:"5%"}}/>

        <h2 style={{wordSpacing:"0.1rem"}}>BEFORE WE START, <br /> TELL US ABOUT YOURSELF</h2>

        <div className="block" style={{height:"3%"}}/>

        <Input/>
        <Input placeholder="LAST NAME"/>
        <div
          style={{
            display : "flex",
            justifyContent : "space-between"
          }}
        >
          <Input placeholder="+1" size="20%"/>
          <Input placeholder="MOBILE" size="75%"/>
        </div>
        <Input placeholder="EMAIL (Optional)"/>

        <div className="block" style={{height:"3%"}}/>
        <Terms/>
        <div className="block" style={{height:"3%"}}/>
        <ButtonRound>
          <div
            className="imgContainer"
            style={{
              height : "6svh",
              margin : "auto"
            }}
          >
            <img src="/asset/activist.png"/>
          </div>
          <div className="block" style={{height:"1svh"}}></div>
          NEXT
        </ButtonRound>
      </div>
    </Wraper>
  );
};

export default FormPage;

