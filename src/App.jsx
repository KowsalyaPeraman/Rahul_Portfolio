import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PosterWorks from "./pages/PosterWorks";
import MetaWorks from "./pages/MetaWorks";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/poster" element={<PosterWorks />} />
      <Route path="/meta" element={<MetaWorks />} />
    </Routes>
  );
}

export default App;