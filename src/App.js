import { Routes, Route } from "react-router-dom";
import "./App.css";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import SingleMovie from "./Pages/SingleMovie";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<SingleMovie />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      {/* <Home /> */}
    </>
  );
}

export default App;
