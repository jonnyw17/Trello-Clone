import React from 'react';
import {render} from 'react-dom';
import GlobalNav from './GlobalNav';
import BoardNav from './BoardNav';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render( ) {
    return (
      <div>
        <GlobalNav />
        <BoardNav />
      </div>
    )
  }
}

export default App;
