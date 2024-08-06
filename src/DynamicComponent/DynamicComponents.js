import React from "react";
import { useComponents } from '../Context/ComponentsContext';
import ComponentsImprot from "../ComponentsImports/ComponentsImports";
import "../style.scss";
import BarChartgraph from "../Components/BarChartgraph";
import Accordion from "../Components/Accordion";

const DynamicComponents =()=>{
    const {components} = useComponents()

    const RenderComponent =(componentValue,index)=>{
        console.log("skkk...componentValue",componentValue);
        const {Component,ClassName,InputType,PlaceHolder,ParentClassName} = componentValue;
        const ComponentToRender = ComponentsImprot[Component];        
        console.log("skkk...ComponentToRender",Component);
        if(ComponentToRender){
            return (
              <>
            <div className={ParentClassName}>
            <ComponentToRender key={index} className={ClassName} type={InputType} placeholder={PlaceHolder} {...componentValue}/>
            </div>
            
            </>
        )
        }
        return <>Outside</>;
    }
    
    return (
      <>
        <div className="header-container">
          {components.map((componentValue,index) => (            
            RenderComponent(componentValue,index)
          ))}
        </div>
        <div className="header-container">
            <BarChartgraph/>
            <span><Accordion/></span>
            <span></span>
        </div>
      </>
      );
}
    

export default DynamicComponents;