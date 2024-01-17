const Quest = () => {
  return (
    <div
      style={{
        position: "absolute",
        height:
          "calc(95svw * 1.965 + (100svh - 95svw * 1.965)/2 - 1.965 * 0.4 * 95vw)",
        width: 95 + "vw",
        backgroundColor: "blue",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        opacity: 0.5,
      }}
    ></div>
  );
};

const Slider = () => {
  return (
    <div>
      <input type="range" min="0" max="45" defaultValue="0" />
    </div>
  );
};

export default Quest;
