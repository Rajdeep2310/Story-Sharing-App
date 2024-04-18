import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomepageAuth from "./Pages/HomepageAuth";
import Home from "./Pages/Home";
//import ProtectedRoute from "./Routes/ProtectedRoute";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<HomepageAuth/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
