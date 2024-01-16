import { Wraper } from "./helper";
import { Button, ButtonRound , Input , Terms} from "./components";

const FormPage = (props) => {
  return (
    <Wraper style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="formContainer" style={{ 
        backgroundColor: "#f4b404",
        padding: "20px", // Adjust the padding as needed
        margin: "20px", // Adjust the margin as needed
        borderRadius: "10px", // Optional: Add border-radius for rounded corners
        width: "90%", // Adjust the width as needed
        height: "85vh", // Adjust the height as needed
        position : "relative"
      }}>

        <div className="block" style={{height:"10%"}}/>

        <div
          className="imgContainer"
          style={{
            height : "5svh",
            margin : "auto"
          }}
        >
          <img src="/asset/logo.png"/>
        </div>


        <Input/>
        <Input/>
        <Input/>
        <Terms/>
      </div>
    </Wraper>
  );
};

export default FormPage;

