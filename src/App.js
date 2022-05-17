// import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Todo from  './components/Todo'

function App() {
  // var initialValue=1000;
  return (
    <div className="App">
     <Counter   initialValue={1} index={0}/>
     <br />
     <br />
     <Todo/>
    </div>
  );
}

export default App;




////
// import logo from './logo.svg';
// import './App.css';
// import Counter from './components/Counter';
// import Todo from  './components/Todo'

// function App() {
//   // var initialValue=1000;
//   return (
//     <div className="App">
//      <Counter initialValue={1000}/>
//      <br />
//      <br />
//      <Todo/>
//     </div>
//   );
// }

// export default App;
