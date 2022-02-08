import React from "react";
interface I_PropsButton {
  onButtonClicked:Function;
  //forcer l'array pour children
  children:Array<any>;
}
const Button: React.FC<I_PropsButton> = (props) => {
  console.log(props);

  return (
    <button className="Button" style={ {color:'blue'} } 
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
