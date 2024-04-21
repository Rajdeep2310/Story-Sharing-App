import {BrowserRouter , Routes , Route } from "react-router-dom";
import Auth from "./Pages/Auth";
import Homepage
 from "./Pages/Homepage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Homepage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;