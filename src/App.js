
// import Person from "./10.03.21/Person";
// import Button from "./10.03.21/Button";
// import SimpleButton from "./10.03.21/SimpleButton";
// import "./App.css";
// import PinkButton from "./10.03.21/PinkButton";
// import RedButton from "./10.03.21/RedButton";
// import GreenButton from "./10.03.21/GreenButton/GreenButton";

// function App() {
//   return (
//     <div className="App">
//       <Person name="Elon Baike" age={47}>
//         Ice skating, Eating donuts, Dancing under the moon
//       </Person>
//       <Person name="Bill Baike" age={50}>
//         Saving the world
//       </Person>
//       <span className="highlight">Hello</span>
//       <Button className="Button">Sumbit</Button>
//       <SimpleButton>Style#1</SimpleButton>
//       <PinkButton>Style#2</PinkButton>
//       <RedButton>Style#3</RedButton>
//       <GreenButton>Style#4</GreenButton>



//     </div>
//   );
// }
// export default App;

import Person from "./10.03.21/Person";
import "./App.css";
import PersonList from "./10.03.21/PersonList/PersonList";
function App() {
  const persons = [
    { name: "Elon Baike", age: 47, hobby: "Ice skating, Eating donuts, Dancing under the moon" },
    { name: "Bill Baike", age: 50, hobby: "Saving the world" }
  ];
  return (
    <div className="App">
      <PersonList persons={persons} />
    </div>
  );
}
export default App;