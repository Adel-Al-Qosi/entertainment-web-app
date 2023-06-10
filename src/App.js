import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadData } from "./store/dataReducer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import MainPage from './components/MainPage/MainPage'
import MoviesPage from "./components/MoviesPage/MoviesPage";
import TVPage from "./components/TVPage/TVPage";
import BookmarkedPage from "./components/BookmarkedPage/BookmarkedPage";

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
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/TV-series" element={<TVPage />} />
        <Route path="bookmarked" element={<BookmarkedPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
