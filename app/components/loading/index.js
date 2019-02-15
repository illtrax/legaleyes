/*
 * Loading
 */

import React from 'react';

/* eslint-disable react/prefer-stateless-function */
export default class Loading extends React.PureComponent {
  render() {
    return (
      <div id="">
        <img src='../../images/loader.gif' />
      </div>
    );
  }
}
