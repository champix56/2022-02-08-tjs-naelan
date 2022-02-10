import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import styles from './MemeThumbnail.module.css';
/**
 * 
 */
interface IMemeThumbnailProps{};
/**
 * MemeThumbnail component
 * @param {IMemeThumbnailProps} props Props du composant
 * @returns component render
 */
export const MemeThumbnail:React.FC<IMemeThumbnailProps>= (props) => {
  return <div className={styles.MemeThumbnail} data-testid="MemeThumbnail">memeThumbnail component</div>;
};

const mapStateToProps = (storeState:any,ownProps:any) => {
    return {
        ...ownProps,
    };
};

const mapDispatchToProps = (dispatch:Function)=>{
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(MemeThumbnail);
