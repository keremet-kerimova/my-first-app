import { useState } from "react";

function Rotate() {
    const [rotate, setR] = useState(0);
    
    return (
        <div className="Rotate"  >
            <div style={{ background: "blue", height:"100px", weight:"100px", transform:"scile"+}}>>
                <input type="range" value={r} min="0" max="255" onInput={({target}) => setR(target.value)} />
            </div>
            <div>
                <input type="range" value={g} min="0" max="255" onInput={({target}) => setG(target.value)} />
            </div>
            <div>
                <input type="range" value={b} min="0" max="255" onInput={({target}) => setB(target.value)} />
            </div>
        </div>
    );
}
export default Rotate;