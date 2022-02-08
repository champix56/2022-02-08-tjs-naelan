import React from "react";
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

  return (
    <button className={style.Button} style={{backgroundColor:props.bgColor}}
      onClick={() => {
        props.onButtonClicked('Le boutton est bien');
      }}
    >
      {/* execution du on click fournit par le parent par les props*/}
      {props.children}
      {/* affichage du text fournit par le parent par les props  */}
    </button>
  );
};
export default Button;
Button.propTypes={
  bgColor: PropTypes.string.isRequired
}
Button.defaultProps={
 //bgColor:'tomato'
}