// import './App.css';
// import Header from './Components/Header';
// import Main from './Components/Main';
// import Footer from './Components/Footer';
// import Usercard from './Components/UserCards';
// import RegisterationForm from './Components/RegisterationForm';
// import UsingMap from './Components/UseState';
// import Counter from './Components/UseState';
import Change from './Components/BeginnerQuests';
import Counter from './Components/BeginnerQuests';
import Mount from './Components/BeginnerQuests';
import Compount from './Components/BeginnerQuests';
import CounterCount from './Components/CounterAppWithUseContext/Counter';
import DecrementButton from './Components/CounterAppWithUseContext/Decrement';
import DisplayCounter from './Components/CounterAppWithUseContext/DisplayCounter';
import IncrementButton from './Components/CounterAppWithUseContext/Increment';
import ResetButton from './Components/CounterAppWithUseContext/ResetCounter';
import Details from './Components/ShowDetailsWithUSeContext/Details';
import Footer from './Components/ShowDetailsWithUSeContext/Footer';
import NavBar from './Components/ShowDetailsWithUSeContext/NavBar';
import Profile from './Components/ShowDetailsWithUSeContext/Profile';
import GloballyTheme from './Components/ThemeChangerWithUseContext/GloballyTheme';
import GlobalTheme from './Components/ThemeChangerWithUseContext/GloballyTheme';
import Light from './Components/UseContext/UseContextPractice';
import CheckStatus from './Components/UseEffect';
import WindowResize from './Components/UseEffect';
import UseEffect from './Components/UseEffect';
import FetchAPI from './Components/UseEffectWithAPI/FetchAPI';
import TodoList from './Components/UseState';

function App() {
  return (
    <div>
      {/* <Header></Header> */}
     {/* <Main></Main> */}
      {/* <div style={{display:'flex'}}>
        
         <Usercard
        name="Project Manager"
        age={35}
        email="manager@example.com"
        avatar="https://randomuser.me/api/portraits/men/1.jpg"
        des="Create tasks, track time and update progress all in one place"
      />
       <Usercard
        name="Time Tracer"
        age={30}
        email="tracer@example.com"
        avatar="https://randomuser.me/api/portraits/women/2.jpg"
        des="Discover how much time your team is spending on their work"
      />
        <Usercard
        name="Resource Planner"
        age={29}
        email="planner@example.com"
        avatar="https://randomuser.me/api/portraits/men/1.jpg"
        des="Monitor how your resources are ulitized across projects"
      />
        <Usercard
        name="Invoicing"
        age={26}
        email="invoice@example.com"
        avatar="https://randomuser.me/api/portraits/women/2.jpg"
        des="Save time by invoicing based on reported time for accurate bills"
      />
        <Usercard
        name="Project Manager"
        age={35}
        email="manager@example.com"
        avatar="https://randomuser.me/api/portraits/men/1.jpg"
        des="Create tasks, track time and update progress all in one place"
      />
      </div> */}
      {/* <div><RegisterationForm></RegisterationForm></div> */}
      
      <div>
      {/* <Footer></Footer> */}
      
      {/* <UsingMap></UsingMap> */}
      {/* <TodoList/> */}
      {/* <UseEffect /> */}
      {/* <FetchAPI></FetchAPI> */}
      {/* <Compount></Compount> */}
      {/* <Counter></Counter> */}
      {/* <Change></Change> */}
      {/* <Mount></Mount> */}
      {/* <CheckStatus></CheckStatus> */}
      {/* <WindowResize></WindowResize> */}
      {/* <Light></Light> */}
      

      {/* <Details>
      <NavBar></NavBar>
      <Profile></Profile>
      <Footer></Footer>
      </Details> */}
      
      <CounterCount>
        <IncrementButton></IncrementButton>
        <DecrementButton></DecrementButton>
        <ResetButton></ResetButton>
        <DisplayCounter></DisplayCounter>
      </CounterCount>

     <GloballyTheme></GloballyTheme>
      
      
    </div>
  </div>
  );
}

export default App;
