import React from "react";

const Category = ({toggle, setToggle}) => {
  return (
    <div className="flex justify-between items-center my-5">
      <h2 className="text-2xl font-bold">{toggle? 'Available Players': 'Selected Player (4/6)'}</h2>
      <div>
        <button onClick={()=>{setToggle(true)}} className={`border border-gray-300 py-2 px-5 rounded-l-xl border-r-0 ${toggle? 'font-bold': ''}`}>
          Available
        </button>
        <button onClick={()=>{setToggle(false)}} className={`border border-gray-300 py-2 px-5 rounded-r-xl border-l-0 ${!toggle? 'font-bold': ''}`}>
          Selected (0)
        </button>
      </div>
    </div>
  );
};

export default Category;
