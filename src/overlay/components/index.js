import { useEffect } from "react";

export function Button({
  children,
  id,
  onClick,
  size = "100%",
  width = "25svh",
  height = "5.5svh",
  backgroundColor = "transparent",
  fontSize = "1.8svh",
  borderRadius = "4px",
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "0.8rem 0",
      }}
    >
      <button
        id={id}
        style={{
          backgroundColor: backgroundColor,
          color: "#fff",
          border: "0.1rem solid #fff",
          borderRadius: borderRadius,
          margin: "auto",
          padding: "0.7rem 0",
          paddingTop: "calc(0.8rem + 0.3svh)",
          width: width,
          height: height,
          maxWidth: "250px",
          fontSize: fontSize,
          fontFamily: "HelveticaLTPro-Bold",
          lineHeight: "1",
          position: "relative",
        }}
        onClick={() => {
          onClick();
        }}
      >
        {children}
      </button>
    </div>
  );
}
export function ButtonRound({
  children,
  id,
  onClick,
  size = "100%",
  width = "16svh",
  height = "16svh",
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "0.8rem 0",
      }}
    >
      <button
        id={id}
        style={{
          backgroundColor: "rgba(244, 180, 4, 0.8)",
          color: "#fff",
          border: "0.1rem solid #fff",
          borderRadius: "50%", // Make the button round by setting border-radius to 50%
          margin: "auto",
          padding: "0.7rem 0",
          paddingTop: "calc(0.8rem + 0.3svh)",
          width: width,
          height: height, // Set height equal to width to make a perfect circle
          maxWidth: "250px",
          fontSize: "1.8svh",
          fontFamily: "HelveticaLTPro-Bold",
          lineHeight: "1",
        }}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export function Terms({ terms = false, setInfo = () => {} }) {
  return (
    <section
      style={{
        display: "flex",
      }}
      className="terms"
    >
      <div
        onClick={() => {
          setInfo((prev) => {
            return {
              ...prev,
              terms: !prev.terms,
            };
          });
        }}
      >
        <div
          id="terms"
          style={{
            width: "1.2rem",
            height: "1.2rem",
            backgroundColor: "#fff",
            borderRadius: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "none",
            marginRight: "1.1rem",
          }}
        >
          <div
            style={{
              width: "1.2svh",
              height: "1.2svh",
              backgroundColor: !terms ? "#fff" : "#a3a3a3",
              borderRadius: 0,
              border: "none",
            }}
          />
        </div>
      </div>

      <div>
        <p
          style={{
            color: "white",
            fontSize: "0.54rem",
            textAlign: "left",
          }}
        >
          BY SUBMITTING THIS FORM, YOU AGREE TO RECEIVE RECURRING AUTOMATED
          PROMOTIONAL AND PERSONALIZED MARKETING TEXT MESSAGES (E.G. CART
          REMINDERS) FROM COACH AT THE CELL NUMBER USED WHEN SIGNING UP. CONSENT
          IS NOT A CONDITION OF ANY PURCHASE. REPLY HELP FOR HELP AND STOP TO
          CANCEL. MSG FREQUENCY VARIES. MSG AND DATA RATES MAY APPLY. VIEW .{" "}
          <span
            style={{
              textDecoration: "underline",
              fontSize: "1svh",
            }}
          >
            {" "}
            TERMS & PRIVACY
          </span>
          .
        </p>
      </div>
    </section>
  );
}

export function Input({
  placeholder = "FIRST NAME",
  size = "100%",
  type = "text",
  maxLength = 4,
  onChange,
}) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      name={placeholder}
      style={{
        textAlign: "center",
        fontFamily: "HelveticaLTPro-Roman",
        fontSize: "1rem",
        color: "black",
        border: "none",
        backgroundColor: "white",
        width: size,
        padding: "1rem",
        margin: "0.5rem 0",
        borderRadius: "0",
      }}
      onChange={onChange}
    />
  );
}

export function AgeRange({ onChange }) {
  return (
    <select
      id="age-range"
      placeholder=""
      name="age-range"
      style={{
        width: "100%",
        textAlign: "center",
        color: "black",
        border: "none",
        backgroundColor: "white",
        padding: "0.7rem",
        margin: "0.5rem 0",
        borderRadius: "0",
      }}
      onChange={onChange}
    >
      <option value="">AGE RANGE</option>
      <option value="18-25">18-25</option>
      <option value="26-32">26-32</option>
      <option value="33-41">33-41</option>
      <option value="42-57">42-57</option>
      <option value="58 +">58 +</option>
    </select>
  );
}

export const LegerLine = ({ currentPage }) => {
  return (
    <div
      className="footer"
      style={{
        position: "absolute",
        bottom: "1.5%",
        left: "50%",
        zIndex: 10000000000000,
        transform: "translate(-50%,0)",
        width: "100vw",
        textAlign: "center",
        opacity: 1,
        zIndex: 10000,
      }}
    >
      <span
        className="mt-auto"
        style={{
          fontSize: "1svh",
          color: "white",
          fontFamily: "HelveticaLTPro-Roman",
        }}
      >
        <span
          style={{
            fontSize: "0.65rem",
            position: "relative",
            top: "-0.03svh",
            marginRight: "0.5vw",
          }}
        >
          &reg;
        </span>
        {"  "} ALL RIGHTS RESERVED BY COACH. POWERED BY{" "}
        <a
          style={{
            color: "white",
            fontSize: "0.65rem",
            fontFamily: "HelveticaLTPro-Roman",
            textDecoration: "underline",
          }}
          href="https://www.instagram.com/conten.tech/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          CONTEN.T
        </a>
      </span>
    </div>
  );
};

export const DesktopBlock = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100svh",
        backgroundColor: "#C41F32",
      }}
    >
      <div
        className="block"
        style={{
          height: "6svh",
        }}
      />
      <div
        style={{
          height: "12svh",
          width: "fit-content",
          margin: "auto",
        }}
      >
        <img src="/2d/logolanding.webp" style={{ height: "100%" }} />
      </div>

      <div
        className="block"
        style={{
          height: "3svh",
        }}
      />

      <h2
        style={{
          lineHeight: "1.5",
          fontSize: "2svh",
          margin: "auto",
          width: "fit-content",
        }}
      >
        THIS EXPERIENCE IS ONLY AVAILABLE ON MOBILE <br />
        PLEASE SCAN THE QR CODE BELOW TO ACCESS
      </h2>

      <div
        className="block"
        style={{
          height: "4svh",
        }}
      />

      <div
        className="imgContainer"
        style={{
          position: "absolute",
          rotate: "180deg",
          height: "15svh",
          top: 0,
        }}
      >
        <img src="/2d/light.webp" />
      </div>

      <div
        className="imgContainer"
        style={{
          position: "absolute",
          rotate: "0deg",
          height: "15svh",
          bottom: 0,
          right: 0,
        }}
      >
        <img src="/2d/light.webp" />
      </div>

      <div
        className="imgContainerHeight"
        style={{
          height: "40svh",
          width: "fit-content",
          margin: "auto",
          padding: "3svh",
        }}
      >
        <img
          src="/2d/Coach_Holiday_Mobile_MY.png"
          style={{
            height: "100%",
          }}
        />
      </div>
      <div
        className="block"
        style={{
          height: "3svh",
        }}
      />
      <div
        className="block"
        style={{
          height: "4svh",
        }}
      />
      <Button
        param={"SHOP HOLIDAY"}
        id="learnmoreDesktop"
        size="100%"
        onClick={() => {
          window.open("https://malaysia.coach.com/holiday.html", "_blank");
        }}
      />
      <LegerLine />
    </div>
  );
};

export const PreloadingPage = ({ preload = false }) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        zIndex: 10,
        backgroundColor: "white",
        opacity: false ? 0 : 1,
        pointerEvents: preload ? "none" : "all",
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#C41F32",
          background:
            "linear-gradient(0deg, rgba(255, 255, 255, 0.882) 0%, rgba(194, 32, 51, 0.52) 42%, rgb(141, 140, 196) 95%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        // background: linear-gradient(180deg, #8D8CC4 0%, rgba(194, 32, 51, 0) 120.56%);
      >
        <div
          className="imgContainer"
          style={{
            height: "6svh",
            margin: "auto",
            position: "absolute",
            top: "6%",
          }}
        >
          <img src="/asset/logo.png" alt="Logo" />
        </div>

        <div
          className="imgContainer floating"
          style={{
            height: "14svh",
            margin: "auto",
            position: "absolute",
            top: "35%",
          }}
        >
          <img src="/asset/balloon.webp" alt="Balloon" />
        </div>
      </div>
    </div>
  );
};
