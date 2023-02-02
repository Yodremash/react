import React from 'react';

import CartTitle from './CartTitle';
import ProductsList from './ProductsList';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [
        { id: '1', name: 'iPhone 14', price: 999 },
        { id: '2', name: 'iPad', price: 799 }
      ]
    }
  }
  render() {
    return (
      <div className="column" >
        <CartTitle userName={this.props.userName} count={this.state.cartItems.length} />
        <ProductsList cartItems={this.state.cartItems} />
      </div>
    )
  }
}
export default ShoppingCart;