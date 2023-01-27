import React from 'react';
import UsersList from './UsersList';

const users = [
  {
    id: 'id-0',
    name: 'A',
    age: 21
  },
  {
    id: 'id-1',
    name: 'B',
    age: 22
  },
  {
    id: 'id-2',
    name: 'C',
    age: 25
  },
  {
    id: 'id-3',
    name: 'D',
    age: 23
  },{
    id: 'id-4',
    name: 'E',
    age: 51
  },{
    id: 'id-5',
    name: 'b',
    age: 64
  },{
    id: 'id-6',
    name: 'a',
    age: 41
  }
]

const App = () => {
  return(
    <>
      <UsersList users={users} />
    </>
  )
}
export default App