import { Wraper } from "./helper";
import { Button, ButtonRound, Input, Terms } from "./components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const FormPage = (props) => {
  const { phaserRef } = props;
  const nav = useNavigate();
  const [check, setCheck] = useState(false);
  return (
    <Wraper
      delay={0.6}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="formContainer"
        style={{
          backgroundColor: "#f4b404",
          padding: "0 3rem", // Adjust the padding as needed
          borderRadius: "15px", // Optional: Add border-radius for rounded corners
          width: "90%", // Adjust the width as needed
          height: "80svh", // Adjust the height as needed
          position: "relative",
          boxShadow: "0 0 1rem rgba(0,0,0,0.2)",
        }}
      >
        <div className="block" style={{ height: "8%" }} />

        <h2>
          BEFORE WE START, <br /> TELL US ABOUT YOURSELF
        </h2>

        <div className="block" style={{ height: "3%" }} />

        <Input />
        <Input placeholder="LAST NAME" />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Input placeholder="+1" size="20%" />
          <Input placeholder="MOBILE" size="75%" />
        </div>
        <Input placeholder="EMAIL (Optional)" />

        <div className="block" style={{ height: "3%" }} />
        <Terms terms={check} setInfo={setCheck} />
        <div className="block" style={{ height: "2%" }} />
        <ButtonRound
          onClick={() => {
            window.scrollTo(0, 0);
            phaserRef.current.scene.scenes[2].scene.start("quests");
            nav("/quest1");
          }}
        >
          <div
            className="imgContainer"
            style={{
              height: "50%",
              margin: "auto",
            }}
          >
            <img src="/asset/activist.png" />
          </div>
          <div className="block" style={{ height: "1svh" }}></div>
          NEXT
        </ButtonRound>
      </div>
    </Wraper>
  );
};

export default FormPage;
