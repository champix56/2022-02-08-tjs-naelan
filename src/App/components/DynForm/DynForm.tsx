import React, { FC, useState } from "react";
import styles from "./DynForm.module.css";

interface DynFormProps {
  form: {id:number;inputs:[any];};
}
let tableauEtat:Array<any>=[];
const DynForm: FC<DynFormProps> = (props) => {
  const [state, setstate] = useState(tableauEtat)

  return <div className={styles.DynForm} data-testid="DynForm">
    <form>
      {JSON.stringify(state)}
      {props.form.inputs.map((e,i)=>{
      switch (e.type) {
        case 'text':
          return<><label htmlFor={e.name}>{e.name}</label><input type="text" name={e.name} onChange={
            (evt)=>{
              let obj=[...state];
              obj[i]=evt.target.value;
                setstate(obj)
            }
          }
          value={state[i]}/></> 
         case 'number':
          return <><label htmlFor={e.name}>{e.name}</label><input type="number" name={e.name} onChange={
            (evt)=>{
              let obj=[...state];
              obj[i]=evt.target.value;
                setstate(obj)
            }
          }
          value={state[i]}/>
          </>
          case 'date':
            return <><label htmlFor={e.name}>{e.name}</label><input type="text" name={e.name} onChange={
              (evt)=>{
                let obj=[...state];
                obj[i]=evt.target.value;
                  setstate(obj)
              }
            }
            value={state[i]}/>
            </>
            case 'textArea':
              return <><label htmlFor={e.name}>{e.name}</label><textarea name={e.name} onChange={
                (evt)=>{
                  let obj=[...state];
                  obj[i]=evt.target.value;
                    setstate(obj)
                }
              }
              value={state[i]}/></>
      }
    })}</form>
  </div>;
};
export default DynForm;
