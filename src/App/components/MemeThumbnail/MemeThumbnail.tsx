import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { I_meme } from "../../interfaces/I_meme";
import FlexBoxThumbnail from "../layout/FlexBoxThumbnail/FlexBoxThumbnail";
import { MemeSvgViewerWithStoreImage } from "../ui/MemeSvgViewer/MemeSvgViewer";
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
          <Link to={'/editor/'+e.id}>
            <MemeSvgViewerWithStoreImage
              key={"meme-" + pos}
              meme={e}
            />
          </Link>
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
