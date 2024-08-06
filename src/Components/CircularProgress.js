import React from "react";

import { Circle } from "rc-progress";


const CircularProgress =({GoalPercent,className,RoundedOffMessage})=>{
    console.log("skkk...CircleProgressNeeded");
    
    return(<>
    <div>
         <div className={className}>
            {GoalPercent}
         </div>
         <Circle percent={75} strokeColor="#7193fe" strokeWidth={10} trailColor="#283366" trailWidth={10} gapDegree={0} gapPosition="bottom"></Circle>
         <div className="white">
         {RoundedOffMessage}
         </div>
    </div>
    </>);
}

export default CircularProgress;