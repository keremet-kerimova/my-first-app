
import HelloWorld from "./components/HelloWorld";
import ByeWorld from "./components/ByeWorld";
import Chunga from "./components/Chunga";
import Hochu from "./components/Hochu";
import Book from "./components/Book";
import Sing from "./components/Sing";
import Length from "./components/Length";
// import Upercase from "./components/Upercase";
// import Lowecase from "./components/Lowecase";
import Age from "./components/Age";
import Year from "./components/Year";
import Sum from "./components/Sum";
import Random from "./components/Random";
// import Switch from "./components/Switch";
// import Round from "./components/Round";
// import Water from "./components/Water";


function App() {
  return (
    <div className="App">
     
     <ByeWorld/>
     <HelloWorld/>
     <Chunga/>
     <Hochu v="more"/>
     <Hochu v="kosmos"/>   
     <Book name="Rich man Poor women" author="Pobert"/>
     <Sing title="Keremetim" singer="Kadyraliev"/>
     <Length  string="Example string" />
     <Length string="Hello world"/>
     {/* <Upercase>helloworld</Upercase>
     <Lowecase>HelloWorld</Lowecase> */}
     <Age year={1989}/>
     <Age year={1875}/>
     <Year age={21}/>
     {/* <Round number={80.598}/>
     <Switch on={false}/>
     <Switch on={true}/> */}
     {/* <Water frozen={false}/>
     <Water frozen={true}/> */}
     <Sum a="5" b="15"/>
     <Random min = "8" max = "20"/>

    </div>
  );
}

export default App;