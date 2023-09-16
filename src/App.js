import LoveBlog from "./blog";
import {HashRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import {Navigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <HashRouter>

      <Routes>
      <Route path="/"         element={<Navigate to="/secretlovestory/home"/>}/>
      <Route path="/secretlovestory/*" element={<LoveBlog/>}/>
    </Routes>

</HashRouter>
  );
}
export default App;
