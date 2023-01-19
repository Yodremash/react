import React from 'react';

class Info extends React.Component {
    render = () =>
      !this.props.info ? null : <div className="info">{this.props.info}</div>;
  }

  export default Info