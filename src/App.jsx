import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./Home.jsx";
import MovieDetail from "./components/MovieDetail.jsx"; // 위치에 맞게

function App() {
  return (
    <Routes>
      {/* Layout: NavBar + Outlet */}
      <Route element={<Layout />}>
        {/* / → 홈(방금 만든 Home) */}
        <Route path="/" element={<Home />} />

        {/* /details → 상세 페이지 */}
        <Route path="/details" element={<MovieDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
