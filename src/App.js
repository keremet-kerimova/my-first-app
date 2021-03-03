
//  import Switch from "./components/Switch1";
 import YourName from "./components/YourName";
 import Massive from "./components/Massive";
 import Decrise from "./components/Decrise";
 import Length from "./components/Length";
 import Colors from "./components/Colors";
 import InputTypeRange from "./components/InputTypeRange";
 import InputRate from "./components/InputRate";
 import Temps from "./components/Temps";

function App() {
return(
    <div className="App">
      {/* <Switch title="WiFi"/>
      <Counter/> */}
      <YourName/>
      <Massive/>
      <Decrise/>
      <Length/>
      <Colors/>
      <InputTypeRange min={0} max={10} value={3}/>
      <InputRate/>
      <Temps/>

     </div>
  )
}
   
export default App;

