import { combineReducers, createStore } from "redux";

const initialState = {
  images: [],
  memes: [],
};

/**
 * reducer de redux
 * @param {*} state etat avant modif
 * @param {*} action action a mettre en place
 * @returns new state val
 */
const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "INIT_LISTS":
      return { ...state, memes: action.values[1], images: action.values[0] };
    case "FETCH_INITIAL_RESSOURCES":
      const prImg = fetch("http://localhost:7956/images").then((f) => f.json());
      const prMemes = fetch("http://localhost:7956/memes").then((f) =>
        f.json()
      );

      Promise.all([prImg, prMemes]).then((tableauxDeResponses) => {
        store.dispatch({ type: "INIT_LISTS", values: tableauxDeResponses });
      });
      return state;
    case "ADD_MEME":
    const position = state.memes.findIndex((m=>m.id===action.value.id));
    if(position===-1){
      //ajout direct
      return { ...state, memes: [...state.memes, action.value] };}
    else{
      // remplacement à la position trouvé en fonction de l'id
      return { ...state, memes: [...state.memes.slice(0,position),action.value,...state.memes.slice(position+1)] };
    }
    default:
      return state;
  }
};

const initialState_current = {
  title: "",
  text: "",
  x: 0,
  y: 0,
  fontSize: 100,
  fontWeight: "900",
  italic: true,
  underline: true,
  imageId: 0,
  color: "#FFFFFF",
};
export const E_Curent_Actions = Object.freeze({
  UPDATE_CURRENT: "UPDATE_CURRENT",
  SAVE: "SAVE",
});
const currentReducer = (state = initialState_current, action) => {
  switch (action.type) {
    case E_Curent_Actions.UPDATE_CURRENT:
      return { ...state, ...action.value };
    case E_Curent_Actions.SAVE:
      fetch(`http://localhost:7956/memes${undefined!==state.id?'/'+state.id:''}`, {
        method:( undefined!==state.id?"PUT":'POST'),
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify(state)
      }).then(f=>f.json())
      .then(o=>{
          store.dispatch({type:'ADD_MEME',value:o});
      })
      return state;
      case 'ADD_MEME':return initialState_current;
    default:
      return state;
  }
};

// let state=reducer(undefined,{type:'INIT'});
// console.log(state);
// state=reducer(state,{type:'INIT_MEMES_LIST',values:[{id:0},{id:1}]});
// console.log(state);
// state=reducer(state,{type:'ADD_MEME',value:{id:2}});
// console.log(state);
const cbr = combineReducers({ current: currentReducer, ressources: reducer });
//ajout du devtool redux
export const store = createStore(
  cbr,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch({ type: "FETCH_INITIAL_RESSOURCES" });
