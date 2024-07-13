import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider( {items} ) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <section className=''>
            <div className="w-10/12 m-auto">
                <div>
                 <Slider {...settings}>
                    {items.map((slide, index) => (
                        <img key={index} src={slide.img} />
                    ))}
                 </Slider>
                </div>
            </div>
        </section>
    )
}