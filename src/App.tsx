import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import { MemeList } from "./pages/MemeList/MemeListPage";
import { MemeTable } from "./pages/MemeTable/MemeTablePage";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<MemeList />} />
        <Route path="/table" element={<MemeTable />} />
      </Routes>
    </>
  );
}

export default App;
