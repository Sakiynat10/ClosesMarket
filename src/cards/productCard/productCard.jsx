import React, { Component } from 'react';
import {Link} from "react-router-dom"
import "./productCard.scss"

class ProductCard extends Component {
  render() {
    const{title ,id , price ,rating , description , image} = this.props
    return (
      <Link to={`/${id}`} className='product-card'>
        <img className='card-img' src={image} alt="title" />
        <div className="product-rating">
            <h3>${price}</h3>
            <div  className={rating.rate >= 5 ? "active" : "none"}>
                <img src="/star-fill.svg" alt="" />
                <img src="/star-fill.svg" alt="" />
                <img src="/star-fill.svg" alt="" />
                <img src="/star-fill.svg" alt="" />
                <img src="/star-fill.svg" alt="" />
            </div>
            <div  className={ rating.rate >= 4.5 && rating.rate < 5 ? "active" : "none"}>
                <img src="/star-fill.svg" alt="" />
                <img src="/star-fill.svg" alt="" />
                <img src="/star-fill.svg" alt="" />
                <img src="/star-fill.svg" alt="" />
                <img src="/star-half.svg" alt="" />
            </div>
            <div  className={ rating.rate > 4 && rating.rate < 4.5 ? "active" : "none"}>
                <img src="/star-fill.svg" alt="" />
                <img src="/star-fill.svg" alt="" />
                <img src="/star-fill.svg" alt="" />
                <img src="/star-fill.svg" alt="" />
            </div>
            <div  className={ rating.rate >= 3.5 && rating.rate < 4 ? "active" : "none"}>
                <img src="/star-fill.svg" alt="" />
                <img src="/star-fill.svg" alt="" />
                <img src="/star-fill.svg" alt="" />
                <img src="/star-half.svg" alt="" />
            </div>
            <div  className={ rating.rate >= 3 && rating.rate < 3.5 ? "active" : "none"}>
                <img src="/star-fill.svg" alt="" />
                <img src="/star-fill.svg" alt="" />
                <img src="/star-fill.svg" alt="" />
            </div>
            <div  className={ rating.rate >= 2.5 && rating.rate < 3 ? "active" : "none"}>
                <img src="/star-fill.svg" alt="" />
                <img src="/star-fill.svg" alt="" />
                <img src="/star-half.svg" alt="" />
            </div>
            <div  className={ rating.rate >= 2 && rating.rate < 2.5 ? "active" : "none"}>
                <img src="/star-fill.svg" alt="" />
                <img src="/star-fill.svg" alt="" />
            </div>
            <div  className={ rating.rate >= 1.5 && rating.rate < 2 ? "active" : "none"}>
                <img src="/star-fill.svg" alt="" />
                <img src="/star-half.svg" alt="" />
            </div>
            <div  className={ rating.rate >= 1 && rating.rate < 1.5 ? "active" : "none"}>
                <img src="/star-fill.svg" alt="" />
            </div>
        </div>
        <p>{description}</p>
        <div className="card-info">
            <h5>Exist products: <span>{rating.count}</span></h5>
            <h5>Product-Number: <span>{id}</span></h5>
        </div>
        
      </Link>
    )
  }
}

export default ProductCard;