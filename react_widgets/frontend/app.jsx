import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';




class App extends React.Component {
  constructor (props) {
    super(props);
    this.props = props;
  }
  
  render() {
    return (
      <div>
        <Clock />
        <br></br>
        <Tabs tabsInfo = {this.props.tabsInfo}/>
      </div>
    );
  }
}

export default App;