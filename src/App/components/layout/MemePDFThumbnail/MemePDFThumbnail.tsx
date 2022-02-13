import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import styles from "./MemePDFThumbnail.module.css";
import { I_meme } from "../../../interfaces/I_meme";
import FlexBoxThumbnail from "../FlexBoxThumbnail/FlexBoxThumbnail";
import MemePDFSvgRenderer from "../../MemePDFSvgRenderer/MemePDFSvgRenderer";
/**
 *
 */
interface IMemePDFThumbnailProps {
  memes: Array<I_meme>;
}
/**
 * MemePDFThumbnail component
 * @param {IMemePDFThumbnailProps} props Props du composant
 * @returns component render
 */
export const MemePDFThumbnail: React.FC<IMemePDFThumbnailProps> = (props) => {
  return (
    <div className={styles.MemePDFThumbnail} data-testid="MemePDFThumbnail">
      <FlexBoxThumbnail>
        {props.memes.map((e, pos) => (
          <MemePDFSvgRenderer meme={e} key={'pdf'+pos}/>
        ))}
      </FlexBoxThumbnail>
    </div>
  );
};

const mapStateToProps = (storeState: any, ownProps: any) => {
  return {
    ...ownProps,
    memes:storeState.ressources.memes
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {};
};

export const ConnectedMemePDFThumbnail = connect(mapStateToProps, mapDispatchToProps)(MemePDFThumbnail);
