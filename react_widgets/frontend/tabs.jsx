import React from 'react';
import {Header} from './header';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {tab: 0};
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(idx) {
    return (e) => {
      this.setState({tab: idx});
    };
  }
  
  
  
  render() {
    // debugger
    return (
      <div>
        <h1>TABS</h1>
        <ul>
          {this.props.tabsInfo.map((headerInfo, idx) => {
            return(<Header onClick = {this.handleClick(idx)} 
              headerInfo = {headerInfo.header} />);}
          )};
        </ul>
      </div>
      
    );
  }
}
// <article class =aritlce{idx}></article>
// <article></article>
// <article></article>
export default Tabs;