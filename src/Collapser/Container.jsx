import React, { Component, Children } from 'react';
import CollapserContext from './CollapserContext';

class Collapser extends Component{
  constructor(props) {
    super(props);
    const { collapsed = false } = props;

    this.state = {
      collapsed,
      toggleCollapse: this.toggleCollapse,
    };
  }

  toggleCollapse = () => {
    this.setState(state => ({
      collapsed: !state.collapsed,
    }));
  }

  render() {
    const { children } = this.props;
    return (
      <CollapserContext.Provider value={this.state}>
        {children}
      </CollapserContext.Provider>
    );
  }
}


export default Collapser;
