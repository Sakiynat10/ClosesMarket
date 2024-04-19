import React, { Component, Fragment } from "react";
import Loading from "../../components/loading/loading";
import categories from "../../data/categories";
import { Link } from "react-router-dom";
import ProductCard from "../productCard/productCard";
import axios from "axios";
import { toast } from "react-toastify";

class WomenCard extends Component {
  state = {
    products: [],
    loading: false,
  };

  async getProducts() {
    try {
      this.setState({ loading: true });
      let { data } = await axios.get("https://fakestoreapi.com/products/");
      this.setState({ products: data });
      console.log(data);
    } catch (err) {
      toast.error("Error");
    } finally {
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    const { products, loading } = this.state;

    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          categories.filter((category) => category === "women's clothing").map(category => (
            <Fragment>
              <div className="cards container">
                {products
                  .filter((product) => product.category === category)
                  .map((product, i) => (
                    <ProductCard key={i} {...product} />
                  ))}
              </div>
            </Fragment>
          ))
        )}
      </div>
    );
  }
}

export default WomenCard;