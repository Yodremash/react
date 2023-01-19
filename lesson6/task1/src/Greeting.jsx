import React from 'react';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

const Greeting = ( {isLoggedIn} ) => isLoggedIn
    ?(<UserGreeting />)
    :(<GuestGreeting />)

export default Greeting;

// const Greeting = props => {
//     if (props.isLoggedIn) {
//     return(<UserGreeting />)
//     }
//     return(<GuestGreeting />)
// }
// export default Greeting;