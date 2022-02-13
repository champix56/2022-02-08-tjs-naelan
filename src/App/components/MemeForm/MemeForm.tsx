import React, { FC, FormEvent } from "react";
import { connect } from "react-redux";
import { useParams, withRouter } from "react-router-dom";
import { I_meme, I_memeImage } from "../../interfaces/I_meme";
import { E_Curent_Actions, store } from "../../store/store";
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
          const changedMeme: I_meme = {
            title: event.currentTarget["titre"].value,
            text: event.currentTarget["text"].value,
            x:parseInt(event.currentTarget["x"].value),
            y: parseInt(event.currentTarget["y"].value),
            fontSize: parseInt(event.currentTarget["fontSize"].value),
            fontWeight: event.currentTarget["fontWeight"].value,
            color: event.currentTarget["color"].value,
            underline: event.currentTarget["underline"].checked,
            italic: event.currentTarget["italic"].checked,
            imageId:parseInt(event.currentTarget["image"].value),
            id: undefined,
          };
          props.onMemeChange(changedMeme);
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
        <input name="titre" id="titre" defaultValue={props.meme.title}  />
        <hr />
        <label htmlFor="image">
          <h2>Image</h2>
        </label>
        <br />
        <select name="image" id="image" defaultValue={props.meme.imageId}>
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
        <input name="text" id="text" type="text" defaultValue={props.meme.text} />
        <br />
        <label htmlFor="x">
          <h2 style={{ display: "inline" }}>x :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="x"
          id="x"
          type="number"
          defaultValue={props.meme.x}
        />
        <label htmlFor="y">
          <h2 style={{ display: "inline" }}>y :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="y"
          id="y"
          type="number"
          defaultValue={props.meme.y}
        />
        <hr />
        <br />
        <h2>Decorations</h2>
        <label htmlFor="color">
          <h2 style={{ display: "inline" }}>color :</h2>
        </label>
        <input name="color" id="color" type="color" defaultValue={props.meme.color} />
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
          defaultValue={props.meme.fontSize}
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
          defaultValue={props.meme.fontWeight}
        />
        <br />
        <input
          name="underline"
          id="underline"
          type="checkbox"
          defaultChecked={props.meme.underline}
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
          defaultChecked={props.meme.italic}
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