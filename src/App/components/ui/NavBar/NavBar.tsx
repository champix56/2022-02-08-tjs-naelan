import React, { FC } from "react";
import styles from "./NavBar.module.css";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = (props) => {
  return (
    <div className={styles.NavBar} data-testid="NavBar">
      <nav className="navbar navbar-inverse" role="navigation">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-ex1-collapse"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Meme creator</a>
        </div>
        <div className="collapse navbar-collapse navbar-ex1-collapse">
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#">Thumbnail</a>
            </li>
            <li>
              <a href="#">New</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
NavBar.defaultProps = {};
export default NavBar;
