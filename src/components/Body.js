import ResCard from "./ResCard";
import resListObj from "../Utils/mockdata";
import { useEffect, useState } from "react";
const Body = () => {
  const [newList, setNewList] = useState(resListObj);
  const [val, setVal] = useState("");
  const [filterSearchList, setFilterSearchList] = useState([]);
  useEffect(() => {
    console.log("use Effect called");
  }, []);
  const handleClick = () => {
    const filteredList = newList.filter((res) => {
      return res.veg === "Yes";
    });
    setNewList(filteredList);
  };
  return (
    <div className="body">
      <div>
        <button onClick={handleClick}>Filter</button>
        <input onChange={(e) => setVal(e.target.value)} value={val} />

        <button
          onClick={() => {
            const serachList = newList.filter((res) =>
              res.name.toLocaleLowerCase().includes(val)
            );
            setFilterSearchList(serachList);
          }}
        >
          Search
        </button>
      </div>

      {filterSearchList.map((res, index) => {
        return <ResCard key={index} resData={res} />;
      })}
    </div>
  );
};
export default Body;
