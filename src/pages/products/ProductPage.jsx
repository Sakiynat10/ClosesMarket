import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/loading/loading";

import "./productPage.scss";
import axios from "axios";

class ProductPage extends Component {
  state = {
    products: null,
    loading: false,
  };

  async getProduct() {
    this.setState({ loading: true });
    let productId = window.location.pathname.split("/").at(-1);

    try {
      let { data } = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      this.setState({ products: data });
    } catch (err) {
    } finally {
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.getProduct();
  }

  render() {
    const { products, loading } = this.state;
    return (
      <Fragment>
        {loading ? (
          <Loading />
        ) : (
          <Fragment>
            <section id="products">        
              <div className="container product-container">
                <div className="product-left">
                  <img src={products?.image} alt={products?.title} />
                  <div className="overlay"></div>
                  <h2>
                    {products?.id === 1
                      ? "The first product"
                      : "" || products?.id === 2
                      ? "The second product"
                      : "" || products?.id === 3
                      ? "The third product"
                      : "" || products?.id === 4
                      ? "The fourth product"
                      : "" || products?.id === 5
                      ? "The fifth product"
                      : "" || products?.id === 6
                      ? "The sixth product"
                      : "" || products?.id === 7
                      ? "The seventh product"
                      : "" || products?.id === 8
                      ? "The eighth product"
                      : "" || products?.id === 9
                      ? "The ninth product"
                      : "" || products?.id === 10
                      ? "The tenth product"
                      : "" || products?.id === 11
                      ? "The eleventh product"
                      : "" || products?.id === 12
                      ? "The twelfth product"
                      : "" || products?.id === 13
                      ? "The thirteenth product"
                      : "" || products?.id === 14
                      ? "The fourteenth product"
                      : "" || products?.id === 15
                      ? "The fifteenth product"
                      : "" || products?.id === 16
                      ? "The sixteenth product"
                      : "" || products?.id === 17
                      ? "The seventeenth product"
                      : "" || products?.id === 18
                      ? "The eighteenth product"
                      : "" || products?.id === 19
                      ? "The nineteenth product"
                      : "" || products?.id === 20
                      ? "The twentieth product"
                      : ""}
                  </h2>
                </div>
                <div className="product-info">
                  <h1>{products?.category}</h1>
                  <p>{products?.description}</p>
                  <div className="product-price">
                    <h3>
                      Price: <span>${products?.price}</span>
                    </h3>
                    <div className="rating">
                      <div
                        className={
                          products?.rating.rate >= 5 ? "active" : "none"
                        }
                      >
                        <img src="/star-fill.svg" alt="" />
                        <img src="/star-fill.svg" alt="" />
                        <img src="/star-fill.svg" alt="" />
                        <img src="/star-fill.svg" alt="" />
                        <img src="/star-fill.svg" alt="" />
                      </div>
                      <div
                        className={
                          products?.rating.rate >= 4.5 &&
                          products?.rating.rate < 5
                            ? "active"
                            : "none"
                        }
                      >
                        <img src="/star-fill.svg" alt="" />
                        <img src="/star-fill.svg" alt="" />
                        <img src="/star-fill.svg" alt="" />
                        <img src="/star-fill.svg" alt="" />
                        <img src="/star-half.svg" alt="" />
                      </div>
                      <div
                        className={
                          products?.rating.rate > 4 &&
                          products?.rating.rate < 4.5
                            ? "active"
                            : "none"
                        }
                      >
                        <img src="/star-fill.svg" alt="" />
                        <img src="/star-fill.svg" alt="" />
                        <img src="/star-fill.svg" alt="" />
                        <img src="/star-fill.svg" alt="" />
                      </div>
                      <div
                        className={
                          products?.rating.rate >= 3.5 &&
                          products?.rating.rate < 4
                            ? "active"
                            : "none"
                        }
                      >
                        <img src="/star-fill.svg" alt="" />
                        <img src="/star-fill.svg" alt="" />
                        <img src="/star-fill.svg" alt="" />
                        <img src="/star-half.svg" alt="" />
                      </div>
                      <div
                        className={
                          products?.rating.rate >= 3 &&
                          products?.rating.rate < 3.5
                            ? "active"
                            : "none"
                        }
                      >
                        <img src="/star-fill.svg" alt="" />
                        <img src="/star-fill.svg" alt="" />
                        <img src="/star-fill.svg" alt="" />
                      </div>
                      <div
                        className={
                          products?.rating.rate >= 2.5 &&
                          products?.rating.rate < 3
                            ? "active"
                            : "none"
                        }
                      >
                        <img src="/star-fill.svg" alt="" />
                        <img src="/star-fill.svg" alt="" />
                        <img src="/star-half.svg" alt="" />
                      </div>
                      <div
                        className={
                          products?.rating.rate >= 2 &&
                          products?.rating.rate < 2.5
                            ? "active"
                            : "none"
                        }
                      >
                        <img src="/star-fill.svg" alt="" />
                        <img src="/star-fill.svg" alt="" />
                      </div>
                      <div
                        className={
                          products?.rating.rate >= 1.5 &&
                          products?.rating.rate < 2
                            ? "active"
                            : "none"
                        }
                      >
                        <img src="/star-fill.svg" alt="" />
                        <img src="/star-half.svg" alt="" />
                      </div>
                      <div
                        className={
                          products?.rating.rate >= 1 &&
                          products?.rating.rate < 1.5
                            ? "active"
                            : "none"
                        }
                      >
                        <img src="/star-fill.svg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="product-quantity">
                    <h3>
                      Available products: <span>{products?.rating.count}</span>
                    </h3>
                    <Link className="back-btn" to={"/"}>
                      Back
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default ProductPage;
