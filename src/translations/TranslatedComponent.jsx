import React from 'react';

function TranslatedComponent({ children, language }) {
  // Recursively traverse children and translate them
    const common = require(`./${language}/common.json`)
  const translateChildren = (child) => {
    if (typeof child === 'string') {
      // If the child is a string, translate it
      const translation = child.split('.').reduce((obj, key) => obj[key], common.app);
      return translation || child;
    } else if (React.isValidElement(child)) {
      // If the child is a React element, recursively translate its children
      return React.cloneElement(child, {
        children: React.Children.map(child.props.children, translateChildren),
      });
    } else {
      // Otherwise, return the child as is
      return child;
    }
  };

  // Translate all children
  const translatedChildren = React.Children.map(children, translateChildren);

  return <>{translatedChildren}</>;
}

export default TranslatedComponent;
