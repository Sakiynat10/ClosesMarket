import React, { Component } from "react";
import { Fragment } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./homePage.scss";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import axios from "axios";
import { toast } from "react-toastify";
import MenCard from "../../cards/men-card/menCard";
import JewelryCard from "../../cards/jewelry-card/jewelryCards";
import ElectronicsCard from "../../cards/electronics-card/electronicsCard";
import WomenCard from "../../cards/women-card/womenCard";
import AllCard from "../../cards/all-card/allCard";
import Loading from "../../components/loading/loading";

class HomePage extends Component {
  state = {
    products: [],
    loading: false,
    activeTab: "all",
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
    const { loading } = this.state;
    return (
      <Fragment>
        <section id="hero">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="swiper-img">
              <div className="container">
                <div className="hero-left">
                  <h1>
                    Buy, sell, and discover fashion, home decor, beauty, and
                    more
                  </h1>
                  <p>
                    Sign up now and join millions of people on the social
                    marketplace for all things style
                  </p>
                  <button>Read more</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-img">
              <div className="container">
                <div className="hero-left">
                  <h1>
                    Buy, sell, and discover fashion, home decor, beauty, and
                    more
                  </h1>
                  <p>
                    Sign up now and join millions of people on the social
                    marketplace for all things style
                  </p>
                  <button>Read more</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-img">
              <div className="container">
                <div className="hero-left">
                  <h1>
                    Buy, sell, and discover fashion, home decor, beauty, and
                    more
                  </h1>
                  <p>
                    Sign up now and join millions of people on the social
                    marketplace for all things style
                  </p>
                  <button>Read more</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-img">
              <div className="container">
                <div className="hero-left">
                  <h1>
                    Buy, sell, and discover fashion, home decor, beauty, and
                    more
                  </h1>
                  <p>
                    Sign up now and join millions of people on the social
                    marketplace for all things style
                  </p>
                  <button>Read more</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-img">
              <div className="container">
                <div className="hero-left">
                  <h1>
                    Buy, sell, and discover fashion, home decor, beauty, and
                    more
                  </h1>
                  <p>
                    Sign up now and join millions of people on the social
                    marketplace for all things style
                  </p>
                  <button>Read more</button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
        <section id="products">
          <div className="container">
            <h1>Our Products</h1>
          </div>
          <Tabs className="product-tabs">
              <TabList className="tabs container">
                <Tab className="tab-link">All products</Tab>
                <Tab className="tab-link">Men's clothing</Tab>
                <Tab className="tab-link">Jewelry</Tab>
                <Tab className="tab-link">Electronics</Tab>
                <Tab className="tab-link">Women's clothing</Tab>
              </TabList>
              <TabPanel>
                {loading ? <Loading /> : <AllCard   />}
              </TabPanel>
              <TabPanel>
                {loading ? <Loading /> : <MenCard   />}
              </TabPanel>
              <TabPanel>
                {loading ? <Loading /> : <JewelryCard   />}
              </TabPanel>
              <TabPanel>
                {loading ? (
                  <Loading />
                ) : (
                  <ElectronicsCard  />
                )}
              </TabPanel>
              <TabPanel>
                {loading ? <Loading /> : <WomenCard   />}
              </TabPanel>
            </Tabs>
        </section>
      </Fragment>
    );
  }
}

export default HomePage;
