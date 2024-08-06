import React from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Accordion=()=>{

    const data =[{
        "Icon":"AddCircleOutlineIcon",
        "DisplayValue":"Goals",
        "AccordionIcon":true
    },{
        "Icon":"LunchDiningIcon",
        "DisplayValue":"Popular Dishes",
        "AccordionIcon":true
    },{
        "Icon":"RoomServiceIcon",
        "DisplayValue":"Menus",
        "AccordionIcon":true
    }]

    return(<>
    {}
    {data.map((Component,Index)=>(
        <div className="accordionStyle">
            {Component.Icon ==="AddCircleOutlineIcon" ?<AddCircleOutlineIcon color="primary"/>:Component.Icon ==="LunchDiningIcon" ?<LunchDiningIcon color="primary"/>:Component.Icon ==="RoomServiceIcon" ?<RoomServiceIcon color="primary"/>:<></> }
            <div className="white padding_20">{Component.DisplayValue}</div>
            <div className="">{Component.AccordionIcon === true ? <ArrowRightIcon color="primary"/> : <></>}</div>

        </div>
    ))}
    </>)
}

export default Accordion;