import React from 'react';

class Info extends React.Component {
    render = () =>
      !this.props.info ? null : <div className="message">{this.props.info}</div>;
  }

  export default Info