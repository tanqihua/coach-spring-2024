import { Wraper } from "./helper";
import { Button, ButtonRound, Input, Terms } from "./components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useStore } from "../store";

const FormPage = (props) => {
  const { phaserRef } = props;
  const nav = useNavigate();
  const { setInfo, setplayAnimation, language } = useStore();
  const [info, addInfo] = useState({
    EMAIL: null,
    FIRSTNAME: null,
    LASTNAME: null,
    MOBILE: null,
    countryCode: null,
    terms: null,
  });

  return (
    <Wraper
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
          {language.formPage.title1.split("\n").map((item, key) => {
            return (
              <span
                key={key}
                style={{
                  fontSize: "inherit",
                }}
              >
                {item}
                <br />
              </span>
            );
          })}
        </h2>

        <div className="block" style={{ height: "3%" }} />

        <Input
          placeholder={language.formPage.firstName}
          onChange={(e) => {
            addInfo((prevInfo) => ({
              ...prevInfo,
              FIRSTNAME: e.target.value,
            }));
          }}
        />
        <Input
          placeholder={language.formPage.lastName}
          onChange={(e) => {
            addInfo((prevInfo) => ({
              ...prevInfo,
              LASTNAME: e.target.value,
            }));
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Input
            placeholder="+1"
            size="20%"
            onChange={(e) => {
              addInfo((prevInfo) => ({
                ...prevInfo,
                countryCode: e.target.value,
              }));
            }}
          />
          <Input
            placeholder={language.formPage.mobile}
            size="75%"
            onChange={(e) => {
              addInfo((prevInfo) => ({
                ...prevInfo,
                MOBILE: e.target.value,
              }));
            }}
          />
        </div>
        <Input
          placeholder={language.formPage.email}
          onChange={(e) => {
            addInfo((prevInfo) => ({
              ...prevInfo,
              EMAIL: e.target.value,
            }));
          }}
        />

        <div className="block" style={{ height: "3%" }} />
        <Terms terms={info?.terms ?? false} setInfo={addInfo} />

        <div className="block" style={{ height: "2%" }} />
        <ButtonRound
          onClick={() => {
            window.scrollTo(0, 0);
            window.FIRSTNAME = info.FIRSTNAME;
            setInfo({
              firstName: info.FIRSTNAME,
            });
            // setplayAnimation(true);
            phaserRef.current.scene.scenes[2].scene.start("quests");
            nav("/quest1");
          }}
        >
          NEXT
        </ButtonRound>
      </div>
    </Wraper>
  );
};

export default FormPage;
