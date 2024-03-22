import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/homepage";
import { Layout } from "./components/layout";
import { Compare } from "./pages/compare";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/compare" element={<Compare />} />
      </Route>
    </Routes>
  );
}

export default App;
