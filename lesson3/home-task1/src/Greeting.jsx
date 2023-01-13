import React from 'react';
import moment from 'moment';

const Greeting = (props) => {
  return (
    <div className="greeting">{`My name is ${props.firstName} ${
      props.lastName
    }. I am ${moment().diff(props.birthDate, 'years')} years old`}</div>
  );
};

export default Greeting;
