import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadData } from './store/dataReducer';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  const data = useSelector(state => state.data.entries)

  console.log(data)

  return (
    <h1>Hello from App</h1>
  );
};

export default App;
