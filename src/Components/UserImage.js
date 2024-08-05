
import React from "react";

const UserImage =({alt,src,ClassName})=>{    
    return(<>
    <img alt={alt} src={src} className={ClassName}/>    
    </>)
}

export default UserImage;