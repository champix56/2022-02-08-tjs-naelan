import React from "react";
import styles from "./NavBar.module.css";
import {LinkContainer} from 'react-router-bootstrap'

const NavBar = (props) => {
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
          <LinkContainer to="/"><div className="navbar-brand">Meme creator</div></LinkContainer>
          {/* <a className="navbar-brand" href="#">Meme creator</a> */}

        </div>
        <div className="collapse navbar-collapse navbar-ex1-collapse">
          <ul className="nav navbar-nav">
            <li className="active">
              <LinkContainer to="/thumbnail"><div>Thumbnail</div></LinkContainer>
            </li>
            <li>
              <LinkContainer to="/editor"><div>New</div></LinkContainer>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
NavBar.defaultProps = {};
export default NavBar;
