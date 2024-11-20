
import React, { useState } from "react";
import  Clean  from "././clean";

function MountedUnmounted(){
    const [show, setShow] = useState(false)
    return(
      <div style={{padding: 32}}>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <Clean/>}
      </div>
    )
}
export default MountedUnmounted