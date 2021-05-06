const initialState = {
    movies: [],
    moviesLoaded: [],                     //EL REDUCER ACTUARÁ COMO UN ALMACENADOR DE ESTADOS
    movieDetail: {}
  };

  function rootReducer(state = initialState, action) {
    if (action.type === "ADD_MOVIE_FAVORITE") {
        return {
          ...state,
          movies: state.movies.concat(action.payload)
        }
    }
    if (action.type === "GET_MOVIES") {
        return {
          ...state,
          moviesLoaded: action.payload.Search
        };
    }

    if (action.type === "REMOVE_MOVIE_FAVORITE") {
        return {
          ...state,
          movies: state.movies.filter((item)=>item.title !==action.payload.title)
        };
    }

    if (action.type === "GET_MOVIE_DETAIL") {
        return {
          ...state,
          movieDetail: action.payload
        };
    }

     return state;    // RETORNA EL ESTADO TRANSFORMADO
  }
  
  export default rootReducer;