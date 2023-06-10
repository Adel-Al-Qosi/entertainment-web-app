import data from "../data/data.json";

const LOAD_DATA = "data/loadData";
const CHANGE_MARK = "Change-mark";

export const changeMark = (title) => {
  return {
    type: CHANGE_MARK,
    title,
  };
};

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
    case CHANGE_MARK:
      return {
        ...state,
        entries: state.entries.map((item) =>
          item.title === action.title ? { ...item, isBookmarked: !item.isBookmarked } : item
        ),
      };
    default:
      return state;
  }
};

export default dataReducer;
