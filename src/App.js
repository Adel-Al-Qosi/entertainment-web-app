import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "./store/dataReducer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import MainPage from './components/MainPage/MainPage'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  const data = useSelector((state) => state.data.entries);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
