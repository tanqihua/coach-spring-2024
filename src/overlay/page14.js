import { Wraper } from "./helper";
import { Button, ButtonRound } from "./components";

const Page14 = (props) => {
  return (
    <Wraper style={{}}>
      <div className="block" style={{ height: "6vh" }}></div>
      <div style={{
        display: "flex",
        justifyContent: "center"
      }}>
        <div className="Container" style={{
          // backgroundColor: "#f4b404",
          backgroundImage: "url(/asset/test.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.4)", // Add box shadow
          padding: "0 3rem", // Adjust the padding as needed
          borderRadius: "4px", // Optional: Add border-radius for rounded corners
          width: "90%", // Adjust the width as needed
          height: "65vh", // Adjust the height as needed
          position: "relative",
        }}>
        </div>
      </div>

    </Wraper>
  );
};

export default Page14;
