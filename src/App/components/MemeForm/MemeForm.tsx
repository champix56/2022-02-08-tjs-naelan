import React, { FC } from "react";
import styles from "./MemeForm.module.css";

interface MemeFormProps {}

const MemeForm: FC<MemeFormProps> = () => (
  <div className={styles.MemeForm} data-testid="MemeForm">
    <form>
      <label htmlFor="titre">
        <h1>Titre</h1>
      </label>
      <br />
      <input name="titre" id="titre" value="React is easy" />
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
      <input name="text" id="text" type="text" value="Le js m'a tué" />
      <br />
      <label htmlFor="x">
        <h2 style={{ display: "inline" }}>x :</h2>
      </label>
      <input
        className={styles.smallNumber}
        name="x"
        id="x"
        type="number"
        value="121"
      />
      <label htmlFor="y">
        <h2 style={{ display: "inline" }}>y :</h2>
      </label>
      <input
        className={styles.smallNumber}
        name="y"
        id="y"
        type="number"
        value="65"
      />
      <hr />
      <br />
      <h2>Decorations</h2>
      <label htmlFor="color">
        <h2 style={{ display: "inline" }}>color :</h2>
      </label>
      <input name="color" id="color" type="color" value="#FFFFFF" />
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
        value="73"
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
        value="900"
      />
      <br />
      <input name="underine" id="underline" type="checkbox" />
      &nbsp;
      <label htmlFor="underline">
        <h2 style={{ display: "inline" }}>underline</h2>
      </label>
      &nbsp;<h2 style={{ display: "inline" }}>/</h2>&nbsp;
      <label htmlFor="italic">
        <h2 style={{ display: "inline" }}>italic</h2>
      </label>
      &nbsp;
      <input name="italic" id="italic" type="checkbox" />
      <hr />
      <br />
      <label htmlFor="frameSizeX">
        <h2 style={{ display: "inline" }}>frame size X :</h2>
      </label>
      <input
        className={styles.smallNumber}
        name="frameSizeX"
        id="frameSizeX"
        type="number"
        min="0"
        value="0"
      />
      px{" "}
      <label htmlFor="frameSizeY">
        <h2 style={{ display: "inline" }}>frame size y :</h2>
      </label>
      <input
        className={styles.smallNumber}
        name="frameSizeY"
        id="frameSizeY"
        type="number"
        min="0"
        value="0"
      />
      px
      <br />
    </form>
  </div>
);

export default MemeForm;
