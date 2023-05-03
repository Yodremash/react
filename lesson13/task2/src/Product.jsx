import React from 'react';

const Product = ({ match }) => {
    return(
    <div class="product">{match.params.productId}</div>
    )
}

export default Product;