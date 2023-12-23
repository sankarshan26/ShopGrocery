import React from 'react'
import Slider from 'react-slick'; 
import "./BannerSlider.css"
function BannerSlider() {
    const data =[
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            title: 'Fresh Vegetables & Fruits at your doorstep',
            description: 'We deliver fresh vegetables & fruits at your doorstep',
            button: 'htttps://www.google.com'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1495480137269-ff29bd0a695c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
            title: 'Fresh Vegetables & Fruits at your doorstep',
            description: 'Cherries and berries. Sweet peaches and nectarines. Summer baking season is here, and I couldn’t be more delighted.',
            button: 'htttps://www.google.com'
        }
    ]
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='bannerslider' {...settings}>
        <Slider className='bannerslider'>
        {
            data.map(items=>{
                return (
                <div className='imagecont'>
                    <img src={items.image}  alt="noimg" />
                    <div className='content'>
                        <h1>{items.title}</h1>
                        <span>{items.description}</span>
                        <button>Shop More</button>
                    </div>
                </div>)
            })
        }
        </Slider>
    </div>
  )
}

export default BannerSlider