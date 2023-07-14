import data from '../data/data.json';

const LOAD_DATA = "data/loadData";
const CHANGE_MARK = "Change-mark";
const CHANGE_URL = "change-url";

export const changeMark = (title) => {
  return {
    type: CHANGE_MARK,
    title,
  };
};

export const loadData = () => {
  return {
    type: LOAD_DATA,
    data,
  };
};

export const filterData = (url) => {
  return {
    type: CHANGE_URL,
    url,
  };
};

const initialState = {
  entries: [],
  unfilteredEntries: [],
  isLoading: true
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        entries: [...action.data],
        unfilteredEntries: [...action.data],
      };
    case CHANGE_MARK:
      const updatedEntries = state.entries.map((item) =>
        item.title === action.title
          ? { ...item, isBookmarked: !item.isBookmarked }
          : item
      );

      const updatedUnfilteredEntries = state.unfilteredEntries.map((item) =>
        item.title === action.title
          ? { ...item, isBookmarked: !item.isBookmarked }
          : item
      );

      const filteredEntries = updatedEntries.filter((entry) => {
        if (state.url === "/bookmarked" && !entry.isBookmarked) {
          return false;
        }
        return true;
      });

      return {
        ...state,
        entries: filteredEntries,
        unfilteredEntries: updatedUnfilteredEntries,
      };
    case CHANGE_URL:
      let filteredUrlEntries = state.unfilteredEntries;

      if (action.url === "/movies") {
        filteredUrlEntries = state.unfilteredEntries.filter((entry) => entry.category === "Movie");
      } else if (action.url === "/TV-series") {
        filteredUrlEntries = state.unfilteredEntries.filter((entry) => entry.category === "TV Series");
      } else if (action.url === "/bookmarked") {
        filteredUrlEntries = state.unfilteredEntries.filter((entry) => entry.isBookmarked);
      }

      return {
        ...state,
        entries: filteredUrlEntries,
        url: action.url,
      };
    default:
      return state;
  }
};

export default dataReducer;
