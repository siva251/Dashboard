import React from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CancelIcon from '@mui/icons-material/Cancel';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const Card = ({ title, value,ClassName_Title,ClassName_Value,ComponentParentClassName,Icon }) => {
    return (
      <div className={ComponentParentClassName}>
        {Icon === "AddShoppingCartIcon" ? <AddShoppingCartIcon color="primary" fontSize="large"/> : Icon === "ShoppingBagIcon" ? <ShoppingBagIcon color="success" fontSize="large"/> : Icon === "CancelIcon" ? <CancelIcon color="error" fontSize="large"/> : Icon === "MonetizationOnIcon" ? <MonetizationOnIcon color="primary" fontSize="large"/> : <></>}
      <div className={ClassName_Title}>{title}</div>
      <div className={ClassName_Value}>{value}</div>
    </div>
  );
};

export default Card;
