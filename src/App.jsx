import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainSection from "./pages/MainSection";
import Beginning from "./pages/Beginning";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/beginning"
        element={<MainSection RenderComponent={Beginning} />}
      />
    </Routes>
  );
};
export default App;
