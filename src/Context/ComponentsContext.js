import React, { createContext, useContext, useState } from "react";
import componentsData from "../JsonData/ComponentsJsonData.json"

const ComponentsContext = createContext();

export const useComponents = () => {
    return useContext(ComponentsContext);
  };
  
export const ComponentsProvider = ({children}) =>{   
    const [components] = useState(componentsData)
    return(
        <>
        <ComponentsContext.Provider value={{components}}>
            {children}
        </ComponentsContext.Provider>
        </>
    )
}