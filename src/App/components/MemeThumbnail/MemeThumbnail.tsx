import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { I_meme, I_memeImage } from "../../interfaces/I_meme";
import FlexBoxThumbnail from "../layout/FlexBoxThumbnail/FlexBoxThumbnail";
import MemeSvgViewer, { MemeSvgViewerWithStoreImage } from "../ui/MemeSvgViewer/MemeSvgViewer";
import styles from "./MemeThumbnail.module.css";
/**
 *
 */
interface IMemeThumbnailProps {
  memes: Array<I_meme>;
}
/**
 * MemeThumbnail component
 * @param {IMemeThumbnailProps} props Props du composant
 * @returns component render
 */
export const MemeThumbnail: React.FC<IMemeThumbnailProps> = (props) => {
  return (
    <div className={styles.MemeThumbnail} data-testid="MemeThumbnail">
      <FlexBoxThumbnail>
        {props.memes.map((e, pos) => (
          <MemeSvgViewerWithStoreImage
            key={"meme-" + pos}
            meme={e}
          />
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

export const ConnectedMemeThumbnail = connect(mapStateToProps, mapDispatchToProps)(MemeThumbnail);
