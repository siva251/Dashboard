import React from "react";

const Card = ({ title, value,ClassName_Title,ClassName_Value }) => {
    console.log("came into card");
    
  return (
    <div className="card">
      <div className={ClassName_Title}>{title}</div>
      <div className={ClassName_Value}>{value}</div>
    </div>
  );
};

export default Card;
