
import React from "react";

const Text = ({type='', className='',placeholder=''}) =>{
    console.log("skkk...InputType,PlaceHolder",type,placeholder);
    
    return(
        <>
        <input type={type} className={className} placeholder={placeholder}/>
        </>
    );
}

export default Text;