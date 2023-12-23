import React from "react";
import "./ProductSlider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";
function ProductSlider({ products, categoryname }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1300, min:780 },
      items: 3,
    },
    mobile: {
      breakpoint: { max:780, min:560 },
      items: 2,
    },
    small :{
        breakpoint: { max:560, min: 0 },
        items: 1,
    }
  };
  return (
    <div className="productsliderout">
      <h1>{categoryname}</h1>
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2000}
        style={{"width":"fit-content","display":"flex","justify-content":"space-between"}}
      >
        {products.map((item) => {
          return <ProductCard data={item} key={item.id} />;
        })}
      </Carousel>
    </div>
  );
}

export default ProductSlider;
