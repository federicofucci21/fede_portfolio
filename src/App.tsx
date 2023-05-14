// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Contacts from "./pages/contact/contact";
import Home from "./pages/home/home";
import Projects from "./pages/projects/projects";
import Skills from "./pages/skills/skills";
import { store } from "./redux/store/index";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <div>
        <Home />
        <Contacts />
        <Skills />
        <Projects />
      </div>
    </Provider>
  );
}



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
