import React, { useState } from "react";
import style from './Button.module.css';
import PropTypes from 'prop-types';


interface I_PropsButton {
  onButtonClicked:Function;
  //forcer l'array pour children
  children:Array<any>;
  bgColor?:string;
}
const Button: React.FC<I_PropsButton> = (props) => {
  console.log(props);
  // decl d'un gestionnaire d'etat avec declenchement de rendu aux changements*/
  const [isClicked, setisClicked] = useState(false);
  return (
    <button className={style.Button} style={{backgroundColor:props.bgColor}}
      onClick={() => {
        /* moddif de la valeur par le modifficateur associé*/
        setisClicked(true);
        /*ancienne valeur car moddif async fait par la fonction*/
        console.trace(isClicked);
        //props.onButtonClicked('Le boutton est bien');
      }}
    >
      {/* execution du on click fournit par le parent par les props*/}
      {props.children}
      <br/>
      {isClicked.toString()}
      {/* affichage du text fournit par le parent par les props  */}
    </button>
  );
};
export default Button;
Button.propTypes={
  bgColor: PropTypes.string.isRequired
}
Button.defaultProps={
 bgColor:'tomato'
}