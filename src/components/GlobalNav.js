import React from 'react';
import {render} from 'react-dom';

class GlobalNav extends React.Component {
  render () {

    return (
      <nav className="uk-navbar-container uk-margin uk-navbar">
        <div className="uk-navbar-center">
            <div className="uk-navbar-center-left"><div>
                <ul className="uk-navbar-nav">
                    <li className="uk-active"><a href="#">Active</a></li>
                    <li>
                        <button class="uk-button uk-button-default"><a href="#"><i class="fa fa-trello" aria-hidden="true"></i>Board</a></button>
                        <div className="uk-navbar-dropdown">
                            <ul className="uk-nav uk-navbar-dropdown-nav">
                                <li className="uk-active"><a href="#">Active</a></li>
                                <li><a href="#">Item</a></li>
                                <li><a href="#">Item</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div><form class="uk-search uk-search-default">

    <input class="uk-search-input" type="search" placeholder=""><span uk-search-icon></span>
</form></div>
            <a className="uk-navbar-item uk-logo" href="#"><img width='75px' height='25px' src='https://d2k1ftgv7pobq7.cloudfront.net/meta/u/res/images/brand-assets/Logos/0099ec3754bf473d2bbf317204ab6fea/trello-logo-blue.png'/></a>
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

export default GlobalNav
