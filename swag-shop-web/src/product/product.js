import React, {Component} from 'react';
import './product.css'

class Product extends Component {
    render() {
        return (
            <div className="card product">
                
                <div className="card-body">
                    <img className="card-img-top" src={this.props.imgUrl} alt="Product"></img>
                    <h4 className="card-title">{this.props.title}</h4>
                    <p className="card-text">Price: $ {this.props.price}</p>
                    <a href="#" className="btn btn-primary">Add to wishlist</a>
                </div>
            </div>
        );
    }
}

export default Product;