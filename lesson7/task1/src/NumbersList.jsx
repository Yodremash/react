import React from "react";

const NumbersList = ({ numbers }) => {
  const listElems = numbers.map(num => <li>{num}</li>)
  return (
    <ul>
      {listElems}
    </ul>
  )
}


// const NumbersList = ({ numbers }) => {
//   return (
//     <ul>
//       {numbers.map(num => <li>{num}</li>)}
//     </ul>
//   )
// }
export default NumbersList;