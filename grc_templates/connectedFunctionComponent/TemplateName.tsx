import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import styles from './TemplateName.module.css';
/**
 * 
 */
interface ITemplateNameProps{};
/**
 * TemplateName component
 * @param {ITemplateNameProps} props Props du composant
 * @returns component render
 */
export const TemplateName:React.FC<ITemplateNameProps>= (props) => {
  return <div className={styles.TemplateName}></div>;
};

const mapStateToProps = (storeState:any,ownProps:any) => {
    return {
        ...ownProps,
    };
};

const mapDispatchToProps = (dispatch:Function)=>{
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplateName);
