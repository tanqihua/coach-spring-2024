import React, { useState, useRef, useEffect, useMemo } from "react";
import { Wraper } from "./helper";
import { Button } from "./components";
import { useStore } from "../store";
import { useSuperfan } from "../context";

const Page14 = (props) => {
  const { showPage14 , loadingVideo} = props;
  const [_showPage14, setShowPage14] = useState(false);
  const [isRedeemed, setIsRedeemed] = useState(false);
  const [isPrizeContainerVisible, setPrizeContainerVisibility] =
    useState(false);

  const { recordCustomKey , checkIsClaim} = useSuperfan();


  const handleRedeemButtonClick = () => {
    // Add logic here to handle redeeming
    setPrizeContainerVisibility(true);
  };

  const { info, language } = useStore();

  const handleSaveVideoClick = () => {
    handleShare();
  };


  const handleShare = () => {
    // Check if the navigator.share API is available
    if (navigator.share) {
      navigator
        .share({
          title: "Share Video",
          text: "Check out this amazing video!",
          url: "https://example.com", // Replace with the actual URL of the saved video
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      // Fallback for devices/browsers that don't support navigator.share
      // Implement your custom sharing functionality here
      console.log("navigator.share not supported. Implement custom sharing.");
    }
  };

  useEffect(() => {

    const main = async () => {
      let res = await checkIsClaim(info?.email);
      if(res){
        // setIsRedeemed(true);
      }
    }

    main();

  }, []);

  return (
    <>
        <LoadingVideo loadingVideo = {loadingVideo}/>


        <Wraper style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          opacity: showPage14 ? 1 : 0,
          pointerEvents: showPage14 ? "auto" : "none",
          width: "fit-content",
          left: "50%",
          transform: "translate(-50%, 0%)",
          zIndex: _showPage14 ? -1 : 999,
        }}
      >
        <LoadingVideo />
        <div
          onClick={() => {
            setShowPage14(true);
          }}
        >
          <Button
            style={{
              opacity: _showPage14 ? 0 : 1,
              transition: "opacity 0.5s ease-in-out",
              pointerEvents: _showPage14 ? "none" : "auto",
            }}
            name={"result"}
            onClick={() => {}}
          >
            NEXT
          </Button>
        </div>
      </div>

      <div
        style={{
          opacity: _showPage14 ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
          pointerEvents: _showPage14 ? "auto" : "auto",
          backgroundImage: "url(/asset/BG_01.webp)",
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
          backgroundPosition: "center",
        }}
      >
        <div className="block" style={{ height: "3svh" }} />
        <div
          className="redeemContainer"
          style={{
            height: "90svh",
            width: "fit-content",
            margin: "auto",
          }}
        >
          <div
            style={{
              height: "48svh",
              margin: "auto",
              position: "relative",
              width : "76svw"
              // boxShadow: "0 0 2rem rgba(0,0,0,0.3)",
            }}
          >
            <div
              className="imgContainer"
              style={{
                height : "8%" , 
                width : "fit-content" , 
                margin : "auto",
              }}
            >
              <img src={"/asset/logo.png"} alt="Gift" />
            </div>

            <div style={{height : "7%"}}/>

            <h1
              style={{
                textAlign: "left",
                fontSize: "7svh",
                lineHeight: "1",
              }}
            >
              {info?.firstName?.toUpperCase() ?? ""} < br/>      
            </h1>

            <h2
              style={{
                textAlign: "left",
                fontSize: "4svh",
                lineHeight: "1",
              }}
            >
              你是一位
            </h2>

            <div style={{height : "12%"}}/>

            <div
              className="imgContainer"
              style={{height : "55%" , margin : "auto" , marginTop : "-2svh" }}
            >
              <img src={info.tagType + ".webp"} alt="Gift" />
            </div>
          </div>

          <div
            style={{
              background:
                "linear-gradient(0deg, rgba(255,255,255,0) 0%, #9194c729 50%, rgba(255,255,255,0) 100%)",
              height: "40svh",
              width: "100vw",
              zIndex: "-1",
              position: "absolute",
              top: "41%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          />

          <div className="block" style={{ height: "6svh" }} />


          <h4>
            點擊領取專屬禮遇
          </h4>          

          <div className="block" style={{ height: "3svh" }} />

          <Button
            name={"redeem"}
            backgroundColor= {isRedeemed ? "#9b9696" : "#6da5e2"}
            onClick={(e)=>{
              // if(isRedeemed) return;
              handleRedeemButtonClick(e);
            }}
            style={{
              paddingTop: "0.8rem",
            }}
          >
            <p
            style={{
              fontSize : "0.rem",
              lineHeight: "1.5",
            }}
            >
              {language.page14.redeem.split("\n").map((item, key) => {
              return (
                <span
                  key={key}
                  style={{
                    fontSize: "inherit",
                  }}
                >
                  {isRedeemed ? "已兌換" : item}
                  <br />
                </span>
              );
            })}
            </p>

            <div
              className="imgContainer"
              style={{
                height: "2.5svh",
                margin: "auto",
                position: "absolute",
                top: "50%",
                right: "5%",
                transform: "translate(-55%,-55%)",
              }}
            >
              <img src="/asset/gift_icon.png" />
            </div>

          </Button>

          <Button
            backgroundColor="#f4b404"
            name={"saveVideo"}
            onClick={async () => {
              let video;
              let videoLink;
              switch (info?.bagColor) {
                case "blackVideo":
                  video = "/Black_FullVideo.mp4";
                  videoLink = "https://firebasestorage.googleapis.com/v0/b/testerdemo-888a3.appspot.com/o/coachSpring%2FPORTRAIT_TW_EXPORT_Black_FullVideo.mp4?alt=media&token=8e97c325-0e7d-48b8-97af-b50a7611f07d";
                  break;
                case "purpleVideo":
                  video = "/Purple_FullVideo.mp4";
                  videoLink = "https://firebasestorage.googleapis.com/v0/b/testerdemo-888a3.appspot.com/o/coachSpring%2FPORTRAIT_TW_EXPORT_Purple_FullVideo.mp4?alt=media&token=648bfbcc-68a3-49e9-9863-b9416e2e2442";
                  break;
                case "yellowVideo":
                  video = "/Yellow_FullVideo.mp4";
                  videoLink = "https://firebasestorage.googleapis.com/v0/b/testerdemo-888a3.appspot.com/o/coachSpring%2FPORTRAIT_TW_EXPORT_Yellow_FullVideo.mp4?alt=media&token=4a2687f2-d3f8-4384-b3e7-a0ad54463ba6"
                  break;
                case "tyeDyeVideo":
                  video = "/TyeDye_FullVideo.mp4";
                  videoLink = "https://firebasestorage.googleapis.com/v0/b/testerdemo-888a3.appspot.com/o/coachSpring%2FPORTRAIT_TW_EXPORT_TyeDye_FullVideo.mp4?alt=media&token=65ee334b-74d4-46c1-a37f-923a0939bb25"
                  break;
                case "denimVideo":
                  video = "/Denim_FullVideo.mp4";
                  videoLink = "https://firebasestorage.googleapis.com/v0/b/testerdemo-888a3.appspot.com/o/coachSpring%2FPORTRAIT_TW_EXPORT_Denim_FullVideo.mp4?alt=media&token=e1b11352-49bb-44f0-8144-3fb68e866521"
                  break;

                default:
                  video = "/Yellow_FullVideo.mp4";
                  videoLink = "https://firebasestorage.googleapis.com/v0/b/testerdemo-888a3.appspot.com/o/coachSpring%2FPORTRAIT_TW_EXPORT_Yellow_FullVideo.mp4?alt=media&token=4a2687f2-d3f8-4384-b3e7-a0ad54463ba6"
                  break;
              }


              var blob = await fetch(
                videoLink
              ).then((r) => r.blob());
              if (navigator.share) {
                navigator
                  .share({
                    files: [
                      new File([blob], "video.mp4", {
                        type: "video/mp4",
                      }),
                    ],
                  })
                  .then(() => {
                    console.log("Thanks for sharing!");
                  })
                  .catch(console.error);
              }
            }}
          >
            {language.page14.saveresultvideo.split("\n").map((item, key) => {
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
          </Button>
          <Button
            backgroundColor="#f4b404"
            name={"shopCollection"}
            onClick={() => {
              // https://coachaustralia.com/catalog/new/featured/quilted-leather/?start=0&sz=24
              window.open(
                "https://taiwan.coach.com/spring/tabby.html",
                "_blank"
              );
            }}
          >
            {language.page14.shopcollection.split("\n").map((item, key) => {
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
          </Button>

            <div style={{height : "1svh"}}/>
          <h5 style={{
            textDecoration : "underline",
            filter : "drop-shadow(2px 2px 0.2rem rgba(0,0,0,0.3))"
          }}
            onClick={()=>{
              if (navigator.share) {
                navigator.share({
                  title: '展開勇氣旅程',
                  text: '請移動圓點來回答問題。測驗結束後，我們會揭曉你的隱藏超能力！',
                  url: window.location.origin,
                })
                .then(() => console.log('Successful share'))
                .catch((error) => console.log('Error sharing', error));
              } else {
                console.log('Share not supported on this browser, consider copying the link manually.');
              }
            }}
          >立即分享心測</h5>
        </div>

        <PopUp
          isPrizeContainerVisible={isPrizeContainerVisible}
          setPrizeContainerVisibility={setPrizeContainerVisibility}
          imgsrc = {"/2d/gift.png"}
        />
      </div>
    </Wraper>
    </>
  );
};

const PopUp = ({
  isPrizeContainerVisible = false,
  setPrizeContainerVisibility,
  imgsrc
}) => {
  const { recordCustomKey , checkIsClaim} = useSuperfan();
  const [buttonText, setButtonText] = useState("STAFF REDEEM");
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState("#1eae35");
  const [redeemTime, setRedeemTime] = useState(new Date());
  const { info, language } = useStore();

  const handleStaffRedeemClick = () => {
    switch (buttonText) {
      case "STAFF REDEEM":
        setButtonText("CONFIRM");
        setButtonBackgroundColor("#efa906");
        break;
      case "CONFIRM":
        setButtonText("REDEEMED");
        setButtonBackgroundColor("#9b9696");
        break;
      case "REDEEMED":
        break;
      default:
        break;
    }
  };

  const convert = (text)=>{
    switch (text) {
      case "STAFF REDEEM":
        return "店鋪核銷 ";
      case "CONFIRM":
        return "確認兌換";
      case "REDEEMED":
        return "已兌換 ";
      default:
        return "已兌換 ";
        break;
    }
  }

  useEffect(() => {
    if (buttonText === "REDEEMED") {
      const newTime = new Date();
      setRedeemTime(newTime);
    }
  }, [buttonText]);

  return (
    <div
      className="prizeContainer"
      style={{
        backgroundImage: "url(/asset/popup22.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        borderRadius: "10px",
        width: "85%",
        height: "40rem",
        boxShadow: "0 0 2rem rgba(0,0,0,0.3)",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        opacity: isPrizeContainerVisible ? 1 : 0,
        pointerEvents: isPrizeContainerVisible ? "auto" : "none",
        zIndex: 999,

        transition: "opacity 0.5s ease-in-out",
      }}
    >
      <div className="block" style={{ height: "5%" }} />

      <div
        style={{
          position: "absolute",
          right: "1.5rem",
          height: "1.2rem",
        }}
        className="imgContainer"
        onClick={()=>{
          setPrizeContainerVisibility(false);
        }}
      >
        <img src="/asset/closeIcon.png"/>
      </div>

      <div
        className="imgContainer"
        style={{
          height: "2.5rem",
          margin: "auto",
        }}
      >
        <img src="/asset/logo.png" alt="Logo" />
      </div>
      {/* ///// */}
      <div className="block" style={{ height: "4%" }} />

      <div
        className="imgContainer"
        style={{
          height: "3rem",
          margin: "auto",
        }}
      >
        <img src="/asset/gift_icon.png" alt="Logo" />
      </div>
      
      <div className="block" style={{ height: "3%" }} />

      {/* ///// */}
      <h4>
        結帳前出示此畫面截圖<br/>
        或於官網結帳輸入
      </h4>

      <div className="block" style={{ height: "4%" }} />

      <section>
        <div
          style={{
            display : "flex",
            alignItems : "center",
            width : "fit-content",
            margin : "auto",
            padding : "0.8rem 1.5rem",
            backgroundColor : "#fff",
            borderRadius : "0.3rem",
          }}
        >
          <h4 
            onClick={()=>{
              navigator.clipboard.writeText("REALYOU800");
              alert("Copied to clipboard");
            }}
          style={{fontFamily : "HelveticaLTPro-Black" ,color : "#A64C02" , paddingTop : "0.2rem",fontSize : "1rem" , lineHeight : "1"}}>REALYOU800</h4>
          <div style={{width : "1.5rem"}}/>
          <div
            className="svgContainer"
            style={{
              height : "1.2rem"
            }}
          >
            <CopyBox/>
          </div>
        </div>
      </section> 

      <div className="block" style={{ height: "4%" }} />
      <h5
        style={{fontSize : "1.5rem"}}
      >
        現享 NT$800 專屬優惠
      </h5>
      <div className="block" style={{ height: "4%" }} />
      {/* //// */}
      <h6
        style={{
          fontSize : "1rem",
        }}
      >
        【注意事項】
      </h6>
      <div className="block" style={{ height: "3%" }} />
      <p
        style={{
          fontSize : "0.8rem",
          lineHeight: "1.8",
          // filter : "drop-shadow(2px 2px 0.2rem rgba(0,0,0,0.3))"
        }}
      >
        1. 兌換期間 : 即日起至2024年08月31日<br/>
        2. 限使用於全台直營專門店、Outlet 及 Coach 官網<br/>
        3. 香水、皮件護理產品、數位印製、維修服務及部分商品不適用<br/>
        4. 每位會員限使用乙次，單筆消費不可與其他優惠活動併用<br/>
        5. Coach 台灣保留最終活動調整之權利
      </p>

      <p
        style={{
          fontSize : "0.7rem",
          position: "absolute",
          bottom: "1.5%",
          left: "50%",
          transform: "translate(-50%, 0)",
        }}
      >
        Terms & Conditions apply
      </p>
    </div>
  );
};

const LoadingVideo = ({loadingVideo}) => {
  
  return (
    <div
      id="loadingVideo"
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        opacity: loadingVideo ? 1 : 0,
        width: "100svw",
        height: "100svh",
        zIndex: 100,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "0.5s ease-in-out",
        pointerEvents: loadingVideo ? "auto" : "none",
      }}
    >
      <div className="dotContainer">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>
    </div>
  );
};

const CopyBox = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10 13"
      fill="none"
      style={{
        height : "100%"
      }}
      {...props}
    >
      <rect
        width={6.786}
        height={9.651}
        x={0.574}
        y={2.682}
        fill="#A64C02"
        rx={1}
      />
      <path
        stroke="#A64C02"
        strokeLinecap="round"
        strokeWidth={0.7}
        d="M3.285 1.074h4.429a1 1 0 0 1 1 1v7.043"
      />
    </svg>
  )
}


export default Page14;
