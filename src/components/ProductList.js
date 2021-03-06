import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import store from '../store' ;

const styles = {
  products: {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },
  product: {
    width: '220px',
    marginLeft: 10,
    marginRight: 10
  }
};

class ProductList extends Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);

    this.state = {
      products: [
        { id: 1, name: "Converse Red", price: 70, image: "http://coliseum.vteximg.com.br/arquivos/ids/172281-210-210/157640C-0.jpg?v=636452255400300000" },
        { id: 2, name: "Vans White", price: 100, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjyCzvYqzLym9nIHz034ChSLsU79lTTLTgxX0FU_UC3CKyP7IN" },
        { id: 3, name: "Adidas Black and White", price: 85, image: "https://http2.mlstatic.com/S_668325-MLA25437749769_032017-O.jpg" },
      ]
    }
  }

  render() {
    return (

      <div style={styles.products}>
        {this.state.products.map(product =>

          <div className="thumbnail" style={styles.product} key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="caption">
              <h4>{product.name}</h4>
              <p>
                <Button bsStyle="primary" onClick={() => this.addToCart(product)} role="button" disabled={product.inventory <= 0}>${product.price} <Glyphicon glyph="shopping-cart" /></Button>
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }

  addToCart(product) {
    store.dispatch({
      type : "ADD_TO_CART",
      product : product
    })
  }
}

export default ProductList;
