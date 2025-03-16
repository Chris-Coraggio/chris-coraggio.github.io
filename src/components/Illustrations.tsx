import './Illustrations.scss';
import { Gallery } from "react-grid-gallery";
import { useContext } from 'react';
import DesktopContext from '../context/DesktopContext';


export const Illustrations = () => {
    const isDesktop = useContext(DesktopContext);
    const unit = isDesktop ? 320 : 160;
    return (
        <div className="Illustrations" id="illustrations">
            <Gallery images={illustrations(unit)} enableImageSelection={false} rowHeight={unit}></Gallery>
        </div>
    );
}


// find . -type f -exec identify -format "\{src: \`\${process.env.PUBLIC_URL}/illustrations/%f\`,height: unit,width: unit* %[fx:w/h],\},\n" {} \; | sort -bh | pbcopy
// rename 's/^old_prefix/new_prefix/' old_prefix*
const illustrations = (unit: number) => [
    {src: `${process.env.PUBLIC_URL}/illustrations/1-Lions-3.jpg`,height: unit,width: unit* 1.23701,},
    {src: `${process.env.PUBLIC_URL}/illustrations/1-Lions-4.jpg`,height: unit,width: unit* 2.4108,},
    {src: `${process.env.PUBLIC_URL}/illustrations/2-HappyField-2.jpg`,height: unit,width: unit* 2,},
    {src: `${process.env.PUBLIC_URL}/illustrations/3-Fifi-1.jpg`,height: unit,width: unit* 1.20077,},
    {src: `${process.env.PUBLIC_URL}/illustrations/4-Zoo-3.jpg`,height: unit,width: unit* 1.58562,},
    {src: `${process.env.PUBLIC_URL}/illustrations/4-Zoo-4.jpg`,height: unit,width: unit* 1.58562,},
    {src: `${process.env.PUBLIC_URL}/illustrations/7-Carousel-2.jpg`,height: unit,width: unit* 0.666667,},
    {src: `${process.env.PUBLIC_URL}/illustrations/8-Elephant-4.jpg`,height: unit,width: unit* 1.60565,},
    {src: `${process.env.PUBLIC_URL}/illustrations/8-Elephant-8.jpg`,height: unit,width: unit* 0.749518,},
    {src: `${process.env.PUBLIC_URL}/illustrations/9-Characters-2.jpg`,height: unit,width: unit* 0.772798,},
]