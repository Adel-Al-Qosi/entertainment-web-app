import data from "../data/data.json";

const LOAD_DATA = "data/loadData";

export const loadData = () => {
  return {
    type: LOAD_DATA,
    data: data,
  };
};

const initialState = { entries: [], isLoading: true };

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        entries: [...action.data],
      };
    default:
      return state;
  }
};

export default dataReducer;
