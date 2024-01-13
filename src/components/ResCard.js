const ResCard = ({ resData }) => {
  const { name, address, veg } = resData;

  return (
    <div className="rescard">
      <h2>name:{name}</h2>
      <p>Address:{address}</p>
      <p>veg:{veg}</p>
    </div>
  );
};
export default ResCard;
