import Tuiter from "./foodadvisor";
import {HashRouter, Navigate} from "react-router-dom";
import {Routes, Route} from "react-router";



function App() {
  return (
      <HashRouter>

        <div className="container">

          <Routes>
            <Route path="/"         element={<Navigate to="/tuiter/home"/>}/>
            <Route path="/tuiter/*" element={<Tuiter/>}/>

          </Routes>

        </div>
      </HashRouter>

  );
}
export default App;
