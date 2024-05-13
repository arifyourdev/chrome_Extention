import {BrowserRouter ,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import DataTable from "./pages/DataTable";
function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/list" element={<DataTable/>} />
      </Routes>
     </BrowserRouter>
  );
}

export default App;
