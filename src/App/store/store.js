import {combineReducers, createStore} from 'redux';


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
    case 'INIT_MEMES_LIST':
      return { ...state, memes: action.values};
    case 'ADD_MEME':
        return {...state,memes:[...state.memes,action.value]};
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
export const E_Curent_Actions=Object.freeze({
    UPDATE_CURRENT:'UPDATE_CURRENT'
});
const currentReducer=(state = initialState_current, action) => {
    console.log(action);
  switch (action.type) {
    case E_Curent_Actions.UPDATE_CURRENT:
      return { ...state, ...action.value};

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
const cbr=combineReducers({current: currentReducer, ressources:reducer});
export const store=createStore(cbr);
store.subscribe(()=>{
    console.log(store.getState());
});
store.dispatch({type:'INIT_MEMES_LIST',values:[{id:0},{id:1}]});
store.dispatch({type:'ADD_MEME',value:{id:2}});
