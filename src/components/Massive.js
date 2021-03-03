const { useState } = require("react")

function Massive(){

    const [massive, setMassive] = useState([<li>Apple</li>, <li>Banana</li>]);
    const [list, setList] = useState("");


    // for (let i = 0; i <massive.length; i++) {
    //     list.push(<li>{massive[i]}</li>)
    // }
    
    

    return <div className="example-5">
            <ul>{massive}</ul>
            {/* <h1>{list}</h1> */}
            <input type="text" onInput={(event) => setList(event.target.value.trim())}/>
            <button onClick={(event) => setList(massive.push(<li>{list}</li>))}>Add</button>
            <button onClick={(event) => setList(massive.pop(<li>{list}</li>))}>Del</button>

    </div>
    
}
 
export default Massive;