import React from 'react';
import moment from 'moment';

const Greeting = (props) => {
  const birthDateDiff = moment(new Date()).diff(
    moment(props.birthDate),
    'years'
  );
  return (
    <div className="greeting">{`My name is ${props.firstName} ${props.lastName}. I am ${birthDateDiff} years old`}</div>
  );
};

export default Greeting;
