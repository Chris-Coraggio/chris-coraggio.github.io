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


// find . -type f -exec identify -format "\{src: \`\${process.env.PUBLIC_URL}/illustrations/%f\`,height: unit,width: unit* %[fx:w/h],\},\n" {} \; | sort -bh | pbcopy// rename 's/^old_prefix/new_prefix/' old_prefix*
// rename 's/^old_prefix/new_prefix/' old_prefix*
const illustrations = (unit: number) => [
    { src: `${process.env.PUBLIC_URL}/illustrations/1-Lions-10.png`, height: unit, width: unit * 2.41379, },
    { src: `${process.env.PUBLIC_URL}/illustrations/1-Lions-11.png`, height: unit, width: unit * 1.19578, },
    { src: `${process.env.PUBLIC_URL}/illustrations/1-Lions-2.jpg`, height: unit, width: unit * 2.4108, },
    { src: `${process.env.PUBLIC_URL}/illustrations/1-Lions-3.jpg`, height: unit, width: unit * 1.23701, },
    { src: `${process.env.PUBLIC_URL}/illustrations/1-Lions-4.jpg`, height: unit, width: unit * 2.4108, },
    { src: `${process.env.PUBLIC_URL}/illustrations/1-Lions-7.jpeg`, height: unit, width: unit * 1.34125, },
    { src: `${process.env.PUBLIC_URL}/illustrations/1-Lions-8.png`, height: unit, width: unit * 1.53448, },
    { src: `${process.env.PUBLIC_URL}/illustrations/1-Lions-9.png`, height: unit, width: unit * 2.41379, },
    { src: `${process.env.PUBLIC_URL}/illustrations/2-HappyField-1.jpg`, height: unit, width: unit * 2, },
    { src: `${process.env.PUBLIC_URL}/illustrations/2-HappyField-2.jpg`, height: unit, width: unit * 2, },
    { src: `${process.env.PUBLIC_URL}/illustrations/2-HappyField-3.jpg`, height: unit, width: unit * 2, },
    { src: `${process.env.PUBLIC_URL}/illustrations/2-HappyField-4.jpg`, height: unit, width: unit * 2, },
    { src: `${process.env.PUBLIC_URL}/illustrations/2-HappyField-7.jpg`, height: unit, width: unit * 2, },
    { src: `${process.env.PUBLIC_URL}/illustrations/3-Fifi-1.jpg`, height: unit, width: unit * 1.20077, },
    { src: `${process.env.PUBLIC_URL}/illustrations/3-Fifi-10.png`, height: unit, width: unit * 0.8, },
    { src: `${process.env.PUBLIC_URL}/illustrations/3-Fifi-11.png`, height: unit, width: unit * 1.00544, },
    { src: `${process.env.PUBLIC_URL}/illustrations/3-Fifi-12.png`, height: unit, width: unit * 0.8, },
    { src: `${process.env.PUBLIC_URL}/illustrations/3-Fifi-3.jpg`, height: unit, width: unit * 1.59949, },
    { src: `${process.env.PUBLIC_URL}/illustrations/3-Fifi-4.jpg`, height: unit, width: unit * 1.59949, },
    { src: `${process.env.PUBLIC_URL}/illustrations/3-Fifi-7.png`, height: unit, width: unit * 0.8, },
    { src: `${process.env.PUBLIC_URL}/illustrations/3-Fifi-8.png`, height: unit, width: unit * 0.8, },
    { src: `${process.env.PUBLIC_URL}/illustrations/3-Fifi-9.png`, height: unit, width: unit * 0.8, },
    { src: `${process.env.PUBLIC_URL}/illustrations/4-Zoo-1.jpg`, height: unit, width: unit * 1.57398, },
    { src: `${process.env.PUBLIC_URL}/illustrations/4-Zoo-2.jpg`, height: unit, width: unit * 1.58562, },
    { src: `${process.env.PUBLIC_URL}/illustrations/4-Zoo-3.jpg`, height: unit, width: unit * 1.58562, },
    { src: `${process.env.PUBLIC_URL}/illustrations/4-Zoo-4.jpg`, height: unit, width: unit * 1.58562, },
    { src: `${process.env.PUBLIC_URL}/illustrations/4-Zoo-5.jpg`, height: unit, width: unit * 1.57398, },
    { src: `${process.env.PUBLIC_URL}/illustrations/4-Zoo-6.jpg`, height: unit, width: unit * 1.58562, },
    { src: `${process.env.PUBLIC_URL}/illustrations/4-Zoo-7.jpg`, height: unit, width: unit * 1.57398, },
    { src: `${process.env.PUBLIC_URL}/illustrations/5-Groceries-1.jpeg`, height: unit, width: unit * 1.5548, },
    { src: `${process.env.PUBLIC_URL}/illustrations/5-Groceries-2.jpeg`, height: unit, width: unit * 1.611, },
    { src: `${process.env.PUBLIC_URL}/illustrations/6-Course-1.jpeg`, height: unit, width: unit * 0.625089, },
    { src: `${process.env.PUBLIC_URL}/illustrations/7-Carousel-2.jpg`, height: unit, width: unit * 0.666667, },
    { src: `${process.env.PUBLIC_URL}/illustrations/7-Carousel-3.jpg`, height: unit, width: unit * 0.800114, },
    { src: `${process.env.PUBLIC_URL}/illustrations/7-Carousel-4.jpg`, height: unit, width: unit * 0.800111, },
    { src: `${process.env.PUBLIC_URL}/illustrations/7-Carousel-6.jpg`, height: unit, width: unit * 0.800331, },
    { src: `${process.env.PUBLIC_URL}/illustrations/7-Carousel-7.jpg`, height: unit, width: unit * 0.800427, },
    { src: `${process.env.PUBLIC_URL}/illustrations/7-Carousel-8.jpg`, height: unit, width: unit * 0.800329, },
    { src: `${process.env.PUBLIC_URL}/illustrations/8-Elephant-1.jpg`, height: unit, width: unit * 1.77809, },
    { src: `${process.env.PUBLIC_URL}/illustrations/8-Elephant-2.jpg`, height: unit, width: unit * 1.77809, },
    { src: `${process.env.PUBLIC_URL}/illustrations/8-Elephant-3.jpg`, height: unit, width: unit * 1.77809, },
    { src: `${process.env.PUBLIC_URL}/illustrations/8-Elephant-4.jpg`, height: unit, width: unit * 1.60565, },
    { src: `${process.env.PUBLIC_URL}/illustrations/8-Elephant-5.jpg`, height: unit, width: unit * 1.60565, },
    { src: `${process.env.PUBLIC_URL}/illustrations/8-Elephant-6.jpg`, height: unit, width: unit * 1.60565, },
    { src: `${process.env.PUBLIC_URL}/illustrations/8-Elephant-7.jpg`, height: unit, width: unit * 1.60565, },
    { src: `${process.env.PUBLIC_URL}/illustrations/8-Elephant-8.jpg`, height: unit, width: unit * 0.749518, },
    { src: `${process.env.PUBLIC_URL}/illustrations/9-Characters-1.jpg`, height: unit, width: unit * 0.792173, },
    { src: `${process.env.PUBLIC_URL}/illustrations/9-Characters-10.jpg`, height: unit, width: unit * 1, },
    { src: `${process.env.PUBLIC_URL}/illustrations/9-Characters-11.jpg`, height: unit, width: unit * 1, },
    { src: `${process.env.PUBLIC_URL}/illustrations/9-Characters-13.jpg`, height: unit, width: unit * 1.48754, },
    { src: `${process.env.PUBLIC_URL}/illustrations/9-Characters-14.jpeg`, height: unit, width: unit * 1.77778, },
    { src: `${process.env.PUBLIC_URL}/illustrations/9-Characters-15.jpg`, height: unit, width: unit * 1.20019, },
    { src: `${process.env.PUBLIC_URL}/illustrations/9-Characters-16.jpeg`, height: unit, width: unit * 1.20111, },
    { src: `${process.env.PUBLIC_URL}/illustrations/9-Characters-2.jpg`, height: unit, width: unit * 0.772798, },
    { src: `${process.env.PUBLIC_URL}/illustrations/9-Characters-3.jpg`, height: unit, width: unit * 0.772798, },
    { src: `${process.env.PUBLIC_URL}/illustrations/9-Characters-4.jpg`, height: unit, width: unit * 0.772798, },
    { src: `${process.env.PUBLIC_URL}/illustrations/9-Characters-5.jpg`, height: unit, width: unit * 0.772798, },
    { src: `${process.env.PUBLIC_URL}/illustrations/9-Characters-6.jpg`, height: unit, width: unit * 0.772798, },
    { src: `${process.env.PUBLIC_URL}/illustrations/9-Characters-7.jpg`, height: unit, width: unit * 0.887218, },
    { src: `${process.env.PUBLIC_URL}/illustrations/9-Characters-8.jpg`, height: unit, width: unit * 1, },
    { src: `${process.env.PUBLIC_URL}/illustrations/9-Characters-9.jpeg`, height: unit, width: unit * 1.09096, },

]