import "../index.css"
import { Route, Routes } from "react-router-dom"
import Home from "./Home";
import Activities from "./api/Activities";

const App = () => {
  return (
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/activities/" Component={Activities} />
          <Route path="/activities/:activityId" />
        </Routes>
  )
}

export default App;
