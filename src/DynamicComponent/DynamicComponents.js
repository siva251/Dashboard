import React from "react";
import { useComponents } from '../Context/ComponentsContext';
import ComponentsImprot from "../ComponentsImports/ComponentsImports";
import "../style.scss";


const DynamicComponents =()=>{
    const {components} = useComponents()

    const RenderComponent =(componentValue,index)=>{
        console.log("skkk...componentValue",componentValue);
        const {Component,ClassName,InputType,PlaceHolder} = componentValue;
        const ComponentToRender = ComponentsImprot[Component];        
        console.log("skkk...ComponentToRender",Component);
        if(ComponentToRender){
            return (
            <>
            <ComponentToRender key={index} className={ClassName} type={InputType} placeholder={PlaceHolder} {...componentValue}/>
            </>
        )
        }
        return <>Outside</>;
    }
    
    return (
        <div className="header-container">
          {components.map((componentValue,index) => (            
            RenderComponent(componentValue,index)
          ))}
        </div>
      );
}
    

export default DynamicComponents;