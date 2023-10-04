// import data from '../../public/cardata.json';

// const initialState = {
//     cars: data,
//     searchFilter: "",
//   };
  
//   const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case "SET_SEARCH_FILTER":
//         return {
//           ...state,
//           searchFilter: action.payload,
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default rootReducer;


import data from '../../public/cardata.json';

const initialState = {
  cars: data,
  searchFilter: "",
  currentPage: 1, // Add currentPage field
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_FILTER":
      return {
        ...state,
        searchFilter: action.payload,
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
