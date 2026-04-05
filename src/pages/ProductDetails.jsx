import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
const ProductDetails = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

    useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const settingsLarge = {
    dots: false,
    slidesToShow: 1,
    arrows: false,
  };

  return (
    <section>
      <div className="container grid grid-cols-2">
        <div className=''>
          <h4>First Slider</h4>
      <Slider {...settingsLarge} asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
        <div>
          <img src="/Features-8.png" alt="" />
        </div>
        <div>
          <h3><img src="/Features-7.png" alt="" /></h3>
        </div>
        <div>
          <h3><img src="/Features-5.png" alt="" /></h3>
        </div>
        <div>
          <h3><img src="/Features-10.png" alt="" /></h3>
        </div>
      </Slider>
      <h4>Second Slider</h4>
      <Slider
        asNavFor={nav1}
        ref={slider => (sliderRef2 = slider)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        <div>
          <img src="/Features-8.png" alt="" />
        </div>
        <div>
          <h3><img src="/Features-7.png" alt="" /></h3>
        </div>
        <div>
          <h3><img src="/Features-5.png" alt="" /></h3>
        </div>
        <div>
          <h3><img src="/Features-10.png" alt="" /></h3>
        </div>
      </Slider>
    </div>

       <div>2nd part</div>
      </div>
    </section>
  )
}

export default ProductDetails
