import Price from "./Price";

export default function Product({ title, idx }) {
  let styles = {
    border: "1px solid black",
    marginLeft: "10px",
    borderRadius: "14px",
    width: "250px",
    fontWeight: "500",
    fontSize: "1.1rem",
  };

  let features = [
    ["8,0000 DPi", "5 Programmable Buttons"],
    ["desinable for ipad Pro", "intutive surface"],
    ["desinable for ipad Pro", "intutive surface"],
    ["wireless", "optical orientation"],
  ];

  return (
    <div style={styles}>
      <h3>{title}</h3>
      <p>{features[idx][0]}</p>
      <p>{features[idx][1]}</p>
      <Price idx={idx} />
    </div>
  );
}
