const Card = ({ children }: { children: React.ReactNode }) => {
  const CardStyle = {
    padding: "10px",
    margin: "10px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return <div style={CardStyle}>{children}</div>;
};
export default Card;
