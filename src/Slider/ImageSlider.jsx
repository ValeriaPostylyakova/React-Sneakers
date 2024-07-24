import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImageSlider.scss';

export default function ImageSlider( {items} ) {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "grey" }}
            onClick={onClick}
          />
        );
      }

      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "grey", color: "grey"}}
            onClick={onClick}
          />
        );
      }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

    return (
        <section className='slider'>
            <div className="w-10/12 m-auto mt-14">
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