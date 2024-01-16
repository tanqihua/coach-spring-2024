export const Wraper = (props) => {
  const { children, style, ...rest } = props;

  return (
    <section
      style={{
        position: "absolute",
        top: "0",
        left: "50%",
        zIndex: "1",
        maxWidth: "700px",
        transform: "translateX(-50%)",
        width: "100vw",
        height: "100svh",
        ...style,
      }}
    >
      {children}
    </section>
  );
};
