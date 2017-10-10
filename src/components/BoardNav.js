import React from 'react';
import {render} from 'react-dom';

class BoardNav extends React.Component {
    render() {
      return (
        <nav className="uk-navbar-container uk-margin uk-navbar" >
          <div className="uk-navbar-center">
              <div className="uk-navbar-center-left"><div>
                  <ul className="uk-navbar-nav">
                      <li className="uk-active"><a href="#">Active</a></li>
                      <li>
                          <button class="uk-button uk-button-default uk-inline"><a href="#"><i class="fa fa-trello" aria-hidden="true"></i>Board</a></button>
                          <div className="uk-navbar-dropdown">
                              <ul className="uk-nav uk-navbar-dropdown-nav">
                                  <li className="uk-active"><a href="#">Active</a></li>
                                  <li><a href="#">Item</a></li>
                                  <li><a href="#">Item</a></li>
                              </ul>
                          </div>
                      </li>
                  </ul>
              </div></div>
              <a className="uk-navbar-item uk-logo" href="#">Logo</a>
              <div className="uk-navbar-center-right"><div>
                  <ul className="uk-navbar-nav">
                      <li><a href="#">Item</a></li>
                  </ul>
              </div></div>
          </div>
        </nav>
      )
    }
}

export default BoardNav;
