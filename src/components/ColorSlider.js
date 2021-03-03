const { useState } = require("react")

function ColorSlider({value}){

    const [color, setColor] = useState(value ?? "#000000");

    return <div className="example-8">
        <span
            {/* <p>{color}</p>
            <input type="color" onInput={(event) => setColor(event.target.value)}/> */}
    </div>   
}
export default ColorSlider ;