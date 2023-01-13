import React from 'react';
import Comment from './Comment';

const UserInfoFull = {
  name: 'Tom',
};

const App = () => {
  return (
    <div>
      <Comment user={UserInfoFull} text="Good job!" date={new Date()} />;
      <Comment user={UserInfoFull} text="Hello, world!" date={new Date()} />
    </div>
  );
};

export default App;
