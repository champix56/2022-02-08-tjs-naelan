import React, { FC, useState } from "react";
import { I_meme, I_memeImage } from "../../interfaces/I_meme";
import styles from "./MemeForm.module.css";

interface MemeFormProps {
  meme: I_meme;
  images: Array<I_memeImage>;
}

const MemeForm: FC<MemeFormProps> = (props) => {
 // const [state, setstate] = useState(props.meme)
  return <div className={styles.MemeForm} data-testid="MemeForm">
    <form>
      <label htmlFor="titre">
        <h1>Titre</h1>
      </label>
      <br />
      <input name="titre" id="titre" value={props.meme.title} />
      <hr />
      <label htmlFor="image">
        <h2>Image</h2>
      </label>
      <br />
      <select name="image" id="image">
        <option value="1">futurama1.jpg</option>
        <option value="2">futurama2.png</option>
        <option value="3">futurama3.png</option>
        <option value="4">gwenadu.jpg</option>
      </select>
      <hr />
      <label htmlFor="text">
        <h2>texte</h2>
      </label>
      <br />
      <input name="text" id="text" type="text" value={props.meme.text} />
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
      />
      <hr />
      <br />
      <h2>Decorations</h2>
      <label htmlFor="color">
        <h2 style={{ display: "inline" }}>color :</h2>
      </label>
      <input name="color" id="color" type="color" value={props.meme.color} />
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
      />
      <br />
      <input name="underline" id="underline" type="checkbox" checked={props.meme.underline} />
      &nbsp;
      <label htmlFor="underline">
        <h2 style={{ display: "inline" }}>underline</h2>
      </label>
      &nbsp;<h2 style={{ display: "inline" }}>/</h2>&nbsp;
      <label htmlFor="italic">
        <h2 style={{ display: "inline" }}>italic</h2>
      </label>
      &nbsp;
      <input name="italic" id="italic" type="checkbox" checked={props.meme.italic} />
      <hr />
      <br />
      
    </form>
  </div>;
};
export default MemeForm;
