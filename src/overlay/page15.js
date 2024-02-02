import { Wraper } from "./helper";
import { Button, ButtonRound, Input, Terms } from "./components";

const Page15 = (props) => {
  return (
    <Wraper
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="prizeContainer"
        style={{
          backgroundColor: "#ff99a7",
          padding: "0 3rem",
          borderRadius: "10px",
          width: "85%",
          height: "90svh",
          boxShadow: "0 0 2rem rgba(0,0,0,0.3)",
        }}
      >
        <div className="block" style={{ height: "5%" }} />

        <div
          className="imgContainer"
          style={{
            height: "4svh",
            margin: "auto",
          }}
        >
          <img src="/asset/logo.png" />
        </div>

        <div className="block" style={{ height: "8%" }} />

        <h3 style={{ wordSpacing: "0.1rem" }}>
          HERE'S YOUR <br /> TREAT
        </h3>

        <div className="block" style={{ height: "5%" }} />

        <div
          className="imgContainer"
          style={{
            height: "15svh",
            margin: "auto",
          }}
        >
          <img src="/asset/activist.png" />
        </div>

        <div className="block" style={{ height: "7%" }} />

        <h5>
          Do not tap the button below. <br /> Present it to our staff to redeem.
        </h5>

        <div className="block" style={{ height: "3%" }} />

        <Button backgroundColor="#1eae35" fontSize="2svh">
          STAFF REDEEM
        </Button>

        <div className="block" style={{ height: "3%" }} />

        <h6>
          WED APR 11 2024 10:05:06 <br /> GMT +0800 (SINGAPORE TIME)
        </h6>
      </div>
    </Wraper>
  );
};

export default Page15;
