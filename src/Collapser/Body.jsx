import React from 'react';
import CollapserContext from './CollapserContext';


function Body({ children }) {
  return (
    <CollapserContext.Consumer>
      {({ collapsed }) => {
        const display = collapsed ? 'none' : '';
        return (
          <div style={{ padding: '5px 0' }}>
            <div style={{ display }}>{children}</div>
          </div>
        );
      }}
    </CollapserContext.Consumer>
  );
}

export default Body;
