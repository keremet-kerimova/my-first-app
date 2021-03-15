
import { useState } from "react";
import Person from "./13.03.21/Person";
import PersonList from "./13.03.21/PersonList";
import Filter from "./15.03.21/Filter";


function App() {
  const persons = [
    { name: "Elaman", photo: "https://avatars.githubusercontent.com/u/1479020?s=460&v=4", role: "Teacher", wpm: 10, commits: 100 },
    { name: "Choro", photo: "https://avatars.githubusercontent.com/u/75364237?s=460&v=4", role: "Assistant", wpm: 78, commits: 10401 },
    { name: "Tynchtyk", photo: "https://avatars.githubusercontent.com/u/75364237?s=460&v=4", role: "Teacher", wpm: 102, commits: 0 },
    { name: "Danila", photo: "https://avatars.githubusercontent.com/u/75364237?s=460&v=4", role: "Student", wpm: -5, commits: 1244 },
    { name: "Madina", photo: "https://avatars.githubusercontent.com/u/75364399?s=460&u=bc77810078d496e3dfe66f27906b01f5db7f208b&v=4", role: "Student", wpm: 30, commits: 5000 },
    { name: "Tatyna", photo: "https://avatars.githubusercontent.com/u/75364237?s=460&v=4", role: "Student", wpm: 27, commits: 572541 },
    { name: "Emirlan", photo: "https://avatars.githubusercontent.com/u/75364762?s=460&u=1945ae5a1c13d5c73dd12e500b24e1965c06decc&v=4", role: "Student", wpm: 20, commits: 56566 },
    { name: "Baitemir", photo: "https://avatars.githubusercontent.com/u/65547734?s=460&u=7fc2c86db4a7a0feaef6f973739812aa62546604&v=4", role: "Student", wpm: 35, commits: 556 },
    { name: "Yntymak", photo: "https://avatars.githubusercontent.com/u/75364237?s=460&v=4", role: "Student", wpm: 40, commits: 55 },
    { name: "Tamara", photo: "https://avatars.githubusercontent.com/u/75364237?s=460&v=4", role: "Student", wpm: 32, commits: 999 },
    { name: "Nurkyz", photo: "https://avatars.githubusercontent.com/u/75364428?s=460&u=7598357a919d059b77d53b1b6fff021ba8d86522&v=4", role: "Student", wpm: 39, commits: 26 },
    { name: "Kunduz", photo: "https://avatars.githubusercontent.com/u/72619839?s=460&u=f76175f3d594fdca199795acdff22ed731fc7537&v=4", role: "Student", wpm: 38, commits: 99 },
    { name: "Adis", photo: "https://avatars.githubusercontent.com/u/75364237?s=460&v=4", role: "Student", wpm: 39, commits: 56 },
    { name: "Islam", photo: "https://avatars.githubusercontent.com/u/75364237?s=460&v=4", role: "Student", wpm: 20, commits: 25 },
    { name: "Felix", photo: "https://avatars.githubusercontent.com/u/75364237?s=460&v=4", role: "Student", wpm: 25, commits: 99 },
    { name: "Erjan", photo: "https://avatars.githubusercontent.com/u/75364569?s=460&u=41423e83599f6073887a5c5bce317657a3e8cb0b&v=4", role: "Student", wpm: 19, commits: 9959 },
    { name: "Ermek", photo: "https://avatars.githubusercontent.com/u/75364237?s=460&v=4", role: "Student", wpm: 28, commits: 6655 },
    { name: "Aiymkyz", photo: "https://avatars.githubusercontent.com/u/75364237?s=460&v=4", role: "Student", wpm: 37, commits: 226 },
    { name: "Kerimova Keremet", photo: "https://avatars.githubusercontent.com/u/75364381?s=460&u=45e3b4a4b507e9aa2183b3241f23a50bee90a033&v=4", role: "Student", wpm: 41, commits: 1999 },
    { name: "Karlygach", photo: "https://avatars.githubusercontent.com/u/75364237?s=460&v=4", role: "Student", wpm: 25, commits: 66 },
    { name: "Keremet", photo: "https://avatars.githubusercontent.com/u/75364237?s=460&v=4", role: "Student", wpm: 32, commits: 52 },
    { name: "Kutman", photo: "https://avatars.githubusercontent.com/u/75364237?s=460&v=4", role: "Student", wpm: 33, commits: 99 },
    { name: "Chyngyz", photo: "https://avatars.githubusercontent.com/u/75364237?s=460&v=4", role: "Student", wpm: 36, commits: 559 },
    { name: "Aiperi", photo: "https://avatars.githubusercontent.com/u/75364237?s=460&v=4", role: "Assistant", wpm: 45, commits: 2334 },
    { name: "Ayana", photo: "https://avatars.githubusercontent.com/u/75421179?s=460&u=0871464f1f7fa4c962e2e680af7e070e3a6e59dd&v=4", role: "Assistant", wpm: 45, commits: 1234 },
  ];
  // const students = persons.filter(person => person.role == "Student");
  //  const fast = students.filter(persons => persons.wpm > 34);
  //  const students = persons.filter(person => person.role == "Student");
  //  const wpms = persons.filter(person => person.wpm > 35);
  //  const commits = persons.filter(person => person.commits > 35);



   const[ filterStudents,setFilterStudents]=useState(false);
   const[filterWpm, setFilterWpm]= useState(false);
   const[filterCommits, setFilterCommits] = useState(false);

   let students = persons;
   if(filterStudents){
     students = persons.filter(person => person.role == "Student")
   }

   
   let wpm = students;
   if(filterWpm){
     wpm = students.filter(person => person.wpm > 34)
   }
   let commits = wpm;
   if(filterCommits){
     commits = wpm.filter(person => person.commits > 1000 )
   }
   
  return (
    <div className="App">
      <Filter state = {filterStudents} change={()=> setFilterStudents(!filterStudents)}>Only students</Filter>
      <div>
        <label>
        <input type="checkbox"
         checked={filterStudents}
         onChange={()=> setFilterStudents(!filterStudents)}
         /> Only students
        </label>


        <div>
        <label>
        <input type="checkbox"
         checked={filterWpm}
         onChange={()=> setFilterWpm(!filterWpm)}
         /> Fast WPM
        </label>
        </div>

        <div>
        <label>
        <input type="checkbox"
         checked={filterCommits}
         onChange={()=> setFilterCommits(!filterCommits)}
         /> Commitis
        </label>
        </div>
        
      </div>
     <PersonList persons={commits}/>
  

    </div>
  );
}
export default App;