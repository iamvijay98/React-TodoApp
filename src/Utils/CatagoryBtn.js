import React, { useEffect, useState } from "react";

const CatagoryBtn = ({ val, selectedCatagory, handleSelected }) => {
  const [activeCatagory, setActiveCatagory] = useState(false);


useEffect(()=>{
 const isSelected =  selectedCatagory.some((v)=>(
    v.catagory === val.catagory 
  ))
  setActiveCatagory(isSelected)
},[selectedCatagory,val.catagory])

  return (
    <li
      onClick={(e) => {
        handleSelected({
          id: val.id,
          catagory: val.catagory,
          emoji: val.emoji,
        });
      }}
      className={`text-base max-sm:text-sm cursor-pointer flex items-center gap-2 font-medium text-white rounded-lg px-4 py-2 max-sm:py-1 ${
        activeCatagory 
          ? "bg-purple-600 border-purple-300 border-2"
          : "bg-purple-400"
      } `}
    >
      <span className=" text-2xl max-sm:text-lg">{val.emoji}</span>
      {val.catagory}
    </li>
  );
};

export default CatagoryBtn;
