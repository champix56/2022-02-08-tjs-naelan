import React, { FC, FormEvent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { I_meme, I_memeImage } from "../../interfaces/I_meme";
import { E_Curent_Actions } from "../../store/store";
import Button from "../Button/Button";
import SelectorEditor from "../SelectorEditor/SelectorEditor";
import styles from "./MemeForm.module.css";

interface MemeFormProps {
  meme: I_meme;
  images: Array<I_memeImage>;
  onMemeChange: Function;
  save:Function;
}

const MemeForm: FC<MemeFormProps> = (props) => {
  // const [state, setstate] = useState(props.meme)
  const getOptions=()=>{
    const arr:Array<any>=[];
    for (const img of props.images) {
        arr.push(<option value={img.id}></option>)
    }
    return arr;
  }
  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      <SelectorEditor/>
      <form
        onChange={(event: FormEvent<HTMLFormElement>) => {
          // const changedMeme: I_meme = {
          //   title: event.currentTarget["titre"].value,
          //   text: event.currentTarget["text"].value,
          //   x:parseInt(event.currentTarget["x"].value),
          //   y: parseInt(event.currentTarget["y"].value),
          //   fontSize: parseInt(event.currentTarget["fontSize"].value),
          //   fontWeight: event.currentTarget["fontWeight"].value,
          //   color: event.currentTarget["color"].value,
          //   underline: event.currentTarget["underline"].checked,
          //   italic: event.currentTarget["italic"].checked,
          //   imageId:parseInt(event.currentTarget["image"].value),
          //   id: undefined,
          // };
          // props.onMemeChange(changedMeme);
        }}
        onSubmit={(evt:FormEvent<HTMLFormElement>)=>{
          evt.preventDefault();
          props.save();
        }}
      >
        <label htmlFor="titre">
          <h1>Titre</h1>
        </label>
        <br />
        <input name="titre" id="titre" 
        value={props.meme.title} 
        onChange={(evt)=>{props.onMemeChange({...props.meme,title:evt.currentTarget.value})}}  
        />
        <hr />
        <label htmlFor="image">
          <h2>Image</h2>
        </label>
        <br />
        <select name="image" id="image" 
        value={props.meme.imageId}
        onChange={(evt)=>{props.onMemeChange({...props.meme,imageId:parseInt(evt.currentTarget.value)})}}  
        
        >
          {
            props.images.map((e: I_memeImage,pos:number)=>{
              return <option value={e.id} key={'option-img'+pos}>{e.title}</option>
            })
          }
        </select>
        <hr />
        <label htmlFor="text">
          <h2>texte</h2>
        </label>
        <br />
        <input name="text" id="text" type="text" 
        value={props.meme.text} 
        onChange={(evt)=>{props.onMemeChange({...props.meme,text:evt.currentTarget.value})}}  
        />
        <br />
        <label htmlFor="x">
          <h2 style={{ display: "inline" }}>x :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="x"
          id="x"
          type="number"
          value={props.meme.x}
          onChange={(evt)=>{props.onMemeChange({...props.meme,x:parseInt(evt.currentTarget.value)})}}  

        />
        <label htmlFor="y">
          <h2 style={{ display: "inline" }}>y :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="y"
          id="y"
          type="number"
          value={props.meme.y}
          onChange={(evt)=>{props.onMemeChange({...props.meme,y:parseInt(evt.currentTarget.value)})}}  
        />
        <hr />
        <br />
        <h2>Decorations</h2>
        <label htmlFor="color">
          <h2 style={{ display: "inline" }}>color :</h2>
        </label>
        <input name="color" id="color" type="color" 
        value={props.meme.color} 
        onChange={(evt)=>{props.onMemeChange({...props.meme,color:evt.currentTarget.value})}}  
        />
        <br />
        <label htmlFor="fontSize">
          <h2 style={{ display: "inline" }}>font-size :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="fontSize"
          id="fontSize"
          type="number"
          min="0"
          value={props.meme.fontSize}
          onChange={(evt)=>{props.onMemeChange({...props.meme,fontSize:parseInt(evt.currentTarget.value)})}}  
          />
        px
        <br />
        <label htmlFor="fontWeight">
          <h2 style={{ display: "inline" }}>font-weight :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="fontWeight"
          id="fontWeight"
          type="number"
          min="100"
          step="100"
          max="900"
          value={props.meme.fontWeight}
          onChange={(evt)=>{props.onMemeChange({...props.meme,fontWeight:evt.currentTarget.value})}}  
          />
        <br />
        <input
          name="underline"
          id="underline"
          type="checkbox"
          checked={props.meme.underline}
          onChange={(evt)=>{props.onMemeChange({...props.meme,underline:evt.currentTarget.checked})}}  
        />
        &nbsp;
        <label htmlFor="underline">
          <h2 style={{ display: "inline" }}>underline</h2>
        </label>
        &nbsp;<h2 style={{ display: "inline" }}>/</h2>&nbsp;
        <label htmlFor="italic">
          <h2 style={{ display: "inline" }}>italic</h2>
        </label>
        &nbsp;
        <input
          name="italic"
          id="italic"
          type="checkbox"
          checked={props.meme.italic}
          onChange={(evt)=>{props.onMemeChange({...props.meme,italic:evt.currentTarget.checked})}}  
        />
        <hr />
        <br />
        <Button type="submit">Enregistrer</Button>
      </form>
    </div>
  );
};
export default MemeForm;

function mapStateToProps(storeState:any,ownProps:any) {
  return{
    ...ownProps,
    meme:storeState.current,
    images:storeState.ressources.images
  }
}
function mapDispatchToProps(dispatch:Function){
  return {
    onMemeChange:(meme:I_meme)=>dispatch({type:E_Curent_Actions.UPDATE_CURRENT,value:meme}),
    save:()=>dispatch({type:E_Curent_Actions.SAVE}),
  }
}
const ConnectMemeForm=connect(mapStateToProps,mapDispatchToProps)(MemeForm);
export const MemeFormWithStore=withRouter(ConnectMemeForm);