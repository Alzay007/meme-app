import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/Navbar";
import { MemeList } from "./pages/MemeList/MemeListPage";
import { MemeTable } from "./pages/MemeTable/MemeTablePage";
import { Loader } from "./components/Loader";
import { useMemes } from "./hooks/useMeme";


function App() {
  const { isLoading, memes, setMemes } = useMemes();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<MemeList memes={memes} />} />
        <Route path="/table" element={<MemeTable memes={memes} setMemes={setMemes} />} />
      </Routes>
    </>
  );
}

export default App;
