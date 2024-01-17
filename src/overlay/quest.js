const Quest = ({ children }) => {
  return (
    <div
      style={{
        position: "absolute",
        height:
          "calc(95svw * 1.965 + (100svh - 95svw * 1.965)/2 - 1.965 * 0.4 * 95vw)",
        width: 95 + "vw",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        padding: "0 5%",
      }}
    >
      {children}
    </div>
  );
};

export default Quest;
