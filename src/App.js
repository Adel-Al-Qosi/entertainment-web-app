import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadData } from './store/dataReducer';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  const data = useSelector(state => state.data.entries)

  return (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
};

export default App;
