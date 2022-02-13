import React, { ReactNode, useEffect, useState } from "react";
import style from './Button.module.css';
import PropTypes from 'prop-types';


interface I_PropsButton {
  onButtonClicked?:Function;
  //forcer l'array pour children
  children:Array<any>|ReactNode|string;
  bgColor?:string;
  type?:'button'|'submit'|'reset';
}
const Button: React.FC<I_PropsButton> = (props) => {
  console.log(props);
  // decl d'un gestionnaire d'etat avec declenchement de rendu aux changements*/
  const [isClicked, setisClicked] = useState(false);
  // hook d'effet pour catcher les changements d'etat et effectuer des actions suite aux changements*/
  useEffect(() => {
    if(isClicked){setTimeout(()=>setisClicked(false),1000);}
    // fonction de deomntage de la valeur
    return () => {
      //effect
    };
  }, [isClicked])
  //tableau d'inspection de montage/changement de valeur pour le declenchement
  return (
    <button type={props.type} className={`${style.Button}${isClicked?' '+style.clicked:''}`} style={{backgroundColor:props.bgColor}}
      onClick={() => {
        /* moddif de la valeur par le modifficateur associé*/
        setisClicked(true);
        /*ancienne valeur car moddif async fait par la fonction*/
        console.log(isClicked);
        
        if(undefined!==props.onButtonClicked){props.onButtonClicked('Le boutton est bien');}
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