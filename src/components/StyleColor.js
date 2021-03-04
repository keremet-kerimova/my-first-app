import { useState } from "react"

function StyleColor() {
        const [color, setColor]=useState(16);
        
    return(
        <div className='Example-6'>
            <span  style= {{color:color}}>Example</span>
            <input 
            type="color"
            value={color}
            onInput={(event)=> setColor(event.target.value)}/>
        </div>
    );
}
    
export default StyleColor;