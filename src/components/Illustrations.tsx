import './Illustrations.scss';
import { Gallery } from "react-grid-gallery";
import { useContext } from 'react';
import DesktopContext from '../context/DesktopContext';


export const Illustrations = () => {
    const isDesktop = useContext(DesktopContext);
    const unit = isDesktop ? 320 : 160;
    return (
        <div className="Illustrations">
            <Gallery images={illustrations(unit)} enableImageSelection={false} rowHeight={unit}></Gallery>
        </div>
    );
}


// find -E . -regex ".*\.(jpg|gif|png|jpeg)" -type f -exec identify -format "\{\nsrc: \`\${process.env.PUBLIC_URL}/illustrations/%f\`,\nheight: unit,\nwidth: unit* %[fx:w/h],\n\}," {} \;
const illustrations = (unit: number) => [
    {
        src: `${process.env.PUBLIC_URL}/illustrations/A_Grocery_Store_And_The_Talking_Carrot_.jpeg`,
        height: unit,
        width: unit * 1.5548,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Zoo-1.jpg`,
        height: unit,
        width: unit * 1.57398,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Zoo-2.jpg`,
        height: unit,
        width: unit * 1.58562,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Characters-8.jpg`,
        height: unit,
        width: unit * 1,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Zoo-3.jpg`,
        height: unit,
        width: unit * 1.58562,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Scenes-1.jpeg`,
        height: unit,
        width: unit * 1.77778,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Lions-4.jpg`,
        height: unit,
        width: unit * 2.4108,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Zoo-7.jpg`,
        height: unit,
        width: unit * 1.57398,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Zoo-6.jpg`,
        height: unit,
        width: unit * 1.58562,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Lions-1.jpg`,
        height: unit,
        width: unit * 1.25063,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Lions-3.jpg`,
        height: unit,
        width: unit * 1.23701,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Zoo-4.jpg`,
        height: unit,
        width: unit * 1.58562,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Zoo-5.jpg`,
        height: unit,
        width: unit * 1.57398,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Lions-2.jpg`,
        height: unit,
        width: unit * 2.4108,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Elephant-5.jpg`,
        height: unit,
        width: unit * 1.60565,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Elephant-4.jpg`,
        height: unit,
        width: unit * 1.60565,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Elephant-6.jpg`,
        height: unit,
        width: unit * 1.60565,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Elephant-7.jpg`,
        height: unit,
        width: unit * 1.60565,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Elephant-3.jpg`,
        height: unit,
        width: unit * 1.77809,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Carousel-8.jpg`,
        height: unit,
        width: unit * 0.800329,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Elephant-2.jpg`,
        height: unit,
        width: unit * 1.77809,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Land_Of_Imagination_.jpeg`,
        height: unit,
        width: unit * 1.611,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Elephant-1.jpg`,
        height: unit,
        width: unit * 1.77809,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/HappyField-7.jpg`,
        height: unit,
        width: unit * 2,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Carousel-6.jpg`,
        height: unit,
        width: unit * 0.800331,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Carousel-7.jpg`,
        height: unit,
        width: unit * 0.800427,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Wedding_Invite.jpg`,
        height: unit,
        width: unit * 1.48754,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Fifi-3.jpg`,
        height: unit,
        width: unit * 1.59949,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Fifi-1.jpg`,
        height: unit,
        width: unit * 1.20077,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/HappyField-4.jpg`,
        height: unit,
        width: unit * 2,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Carousel-5.jpg`,
        height: unit,
        width: unit * 1,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Carousel-4.jpg`,
        height: unit,
        width: unit * 0.800111,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Life+is+What+You+Make+of+IT.jpg`,
        height: unit,
        width: unit * 1.20019,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Fifi-4.jpg`,
        height: unit,
        width: unit * 1.59949,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/HappyField-1.jpg`,
        height: unit,
        width: unit * 2,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Carousel-1.jpg`,
        height: unit,
        width: unit * 1,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Digital art tree and hammock.jpeg`,
        height: unit,
        width: unit * 1.09096,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/HappyField-2.jpg`,
        height: unit,
        width: unit * 2,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Carousel-3.jpg`,
        height: unit,
        width: unit * 0.800114,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Carousel-2.jpg`,
        height: unit,
        width: unit * 0.666667,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/HappyField-3.jpg`,
        height: unit,
        width: unit * 2,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Elephant-8.jpg`,
        height: unit,
        width: unit * 0.749518,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Characters-3.jpg`,
        height: unit,
        width: unit * 0.772798,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Characters-2.jpg`,
        height: unit,
        width: unit * 0.772798,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Characters-1.jpg`,
        height: unit,
        width: unit * 0.792173,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Characters-5.jpg`,
        height: unit,
        width: unit * 0.772798,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Lions-7.jpeg`,
        height: unit,
        width: unit * 1.34125,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Characters-4.jpg`,
        height: unit,
        width: unit * 0.772798,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Course-1.jpeg`,
        height: unit,
        width: unit * 0.625089,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Characters-6.jpg`,
        height: unit,
        width: unit * 0.772798,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/IMG_0535.jpeg`,
        height: unit,
        width: unit * 1.20111,
    }, {
        src: `${process.env.PUBLIC_URL}/illustrations/Characters-7.jpg`,
        height: unit,
        width: unit * 0.887218,
    },
]