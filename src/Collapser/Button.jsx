import React, { Component } from 'react';
import CollapserContext from './CollapserContext';

function On() {
  return (
    <i style={{ color: '#000' }}>-</i>
  );
}

function Off() {
  return (
    <i style={{ color: '#000' }}>+</i>
  );
}

function Button({ onButton = <On />, offButton = <Off /> }) {
  return (
    <CollapserContext.Consumer>
      {({ collapsed, toggleCollapse }) => {
        return (
          <span onClick={toggleCollapse} >
            {collapsed ? onButton : offButton }
          </span>
        )
      }}
    </CollapserContext.Consumer>
  );
}

export default Button;
