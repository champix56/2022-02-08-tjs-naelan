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
let state=reducer(undefined,{type:'INIT'});
console.log(state);
state=reducer(state,{type:'INIT_MEMES_LIST',values:[{id:0},{id:1}]});
console.log(state);
state=reducer(state,{type:'ADD_MEME',value:{id:2}});
console.log(state);
