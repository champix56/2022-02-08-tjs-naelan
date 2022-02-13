import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { E_Curent_Actions, store } from '../../store/store';

export default function SelectorEditor() {
    const params=useParams();
    useEffect(() => {
        const memes=store.getState().ressources.memes;
        const meme=store.getState().ressources.memes.find(m=>m.id===parseInt(params.id));
        store.dispatch({type:E_Curent_Actions.UPDATE_CURRENT,value:meme})
    }, [params,store.getState().ressources])
    //useEffect pour observer le changement du contenu du store --> equiv a un abonnement par observation non par avertissement autonome du store
  return null;
}
