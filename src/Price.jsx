export default function Price({ idx }) {
  let oldPrice = ["12,495", "11,900", "1,599", "599"];
  let newPrice = ["8,999", "9199", "899", "278"];
  let style = {
    backgroundColor: "yellow",
    borderBottomLeftRadius: "14px",
    borderBottomRightRadius: "14px",
  };
  let oldStyle = {
    textDecorationLine: "line-through",
  };
  return (
    <div style={style}>
      <span style={oldStyle}>{oldPrice[idx]}</span>
      &nbsp;&nbsp;&nbsp;
      <span>{newPrice[idx]}</span>
    </div>
  );
}
