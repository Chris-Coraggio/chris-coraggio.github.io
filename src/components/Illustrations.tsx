import { JsxElement } from 'typescript';
import './Illustrations.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const illustrations = [
    `${process.env.PUBLIC_URL}/6.jpg`,
    `${process.env.PUBLIC_URL}/17.jpg`,
    `${process.env.PUBLIC_URL}/65.jpg`,
    `${process.env.PUBLIC_URL}/66.jpg`,
    `${process.env.PUBLIC_URL}/67.jpg`,
    `${process.env.PUBLIC_URL}/BethanyClemons3.jpg`,
    `${process.env.PUBLIC_URL}/Bumpas+_282_29.jpg`,
    `${process.env.PUBLIC_URL}/Carousel.jpg`,
    `${process.env.PUBLIC_URL}/Chapter+1.jpg`,
    `${process.env.PUBLIC_URL}/Chapter+5.jpg`,
    `${process.env.PUBLIC_URL}/Chapter+12+Scene+1.jpg`,
    `${process.env.PUBLIC_URL}/charactersballet.jpg`,
    `${process.env.PUBLIC_URL}/Chill+Superhero.jpg`,
    `${process.env.PUBLIC_URL}/Clean.jpg`,
    `${process.env.PUBLIC_URL}/Colonel+Colon+Superhero.jpg`,
    `${process.env.PUBLIC_URL}/Cook+Superhero.jpg`,
    `${process.env.PUBLIC_URL}/Cover+SPREAD.jpg`,
    `${process.env.PUBLIC_URL}/Digital+art+children_s+book+cover+.jpg`,
    `${process.env.PUBLIC_URL}/Digital+art+concept+of+character+.jpg`,
    `${process.env.PUBLIC_URL}/finalpages23-24.jpg`,
    `${process.env.PUBLIC_URL}/image-2.jpg`,
    `${process.env.PUBLIC_URL}/image-3.jpg`,
    `${process.env.PUBLIC_URL}/image-asset-2.jpg`,
    `${process.env.PUBLIC_URL}/image-asset-3.jpg`,
    `${process.env.PUBLIC_URL}/image-asset-4.jpg`,
    `${process.env.PUBLIC_URL}/image-asset-5.jpg`,
    `${process.env.PUBLIC_URL}/image-asset-6.jpg`,
    `${process.env.PUBLIC_URL}/image-asset-7.jpg`,
    `${process.env.PUBLIC_URL}/image-asset.jpg`,
    `${process.env.PUBLIC_URL}/image.jpg`,
    `${process.env.PUBLIC_URL}/Instagram_.jpg`,
    `${process.env.PUBLIC_URL}/Life_Is_What_You_Make_Of_It_.jpg`,
    `${process.env.PUBLIC_URL}/Life+is+What+You+Make+of+IT.jpg`,
    `${process.env.PUBLIC_URL}/Make+Art+Monday+(1a).jpg`,
    `${process.env.PUBLIC_URL}/Owl_And_Elephant+copy.jpg`,
    `${process.env.PUBLIC_URL}/Page+15-16.jpg`,
    `${process.env.PUBLIC_URL}/Page+29-30a.jpg`,
    `${process.env.PUBLIC_URL}/page23-24.jpg`,
    `${process.env.PUBLIC_URL}/page34final.jpg`,
    `${process.env.PUBLIC_URL}/Pages+7-8.jpg`,
    `${process.env.PUBLIC_URL}/Pages+17-18.jpg`,
    `${process.env.PUBLIC_URL}/Pages+19-20-2.jpg`,
    `${process.env.PUBLIC_URL}/Pages+23-24-2.jpg`,
    `${process.env.PUBLIC_URL}/Pages+23-24.jpg`,
    `${process.env.PUBLIC_URL}/Pages+25-26.jpg`,
    `${process.env.PUBLIC_URL}/Pages13-14+Final.jpg`,
    `${process.env.PUBLIC_URL}/sample3.jpg`,
    `${process.env.PUBLIC_URL}/Separate.jpg`,
    `${process.env.PUBLIC_URL}/Wedding_Invite.jpg`
]

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black", borderRadius: '1rem', lineHeight: 1.19 }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black", borderRadius: '1rem', lineHeight: 1.19 }}
            onClick={onClick}
        />
    );
}

export const Illustrations = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className="Illustrations slider-container">
            <Slider {...settings}>
                {illustrations.map(i => (
                    <div className="Illustrations--ImageContainer">
                        <img src={i} alt={i} className="Illustrations--Image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}