import React from 'react';

const CollapserContext = React.createContext({
  collapsed: false,
  toggleCollapse: () => {},
});

export default CollapserContext;
