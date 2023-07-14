import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadData } from "./store/dataReducer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import MainPage from './components/MainPage/MainPage'


const App = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movies" element={<MainPage />} />
        <Route path="/TV-series" element={<MainPage />} />
        <Route path="bookmarked" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
