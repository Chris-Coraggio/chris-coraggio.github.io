import './Illustrations.scss';
import { Gallery } from "react-grid-gallery";
import { useContext } from 'react';
import DesktopContext from '../context/DesktopContext';


export const Illustrations = () => {
    const isDesktop = useContext(DesktopContext);
    const unit = isDesktop ? 320 : 160;
    return (
        <div className="Illustrations" id="illustrations">
            <h2>Illustrations</h2>
            <p>Below illustrations are found in some of Janae&apos;s children&apos;s books, including <i>Sitting with My Lions: Being Brave Like Daniel in the Lion&apos;s Den</i> (2019), <i>The Happy Field</i> by Bethany Clemons (2020), <i>Fifi the Birthday Grump</i> by Nicole Marie (2018), <i>Dear Zoo, I Think My Sister Belongs with You!</i> by Bethany Clemons (2021), <i>Walking with My Elephant</i> by Nicole Marie (2021), and her newest picture book release, <i>The Space Between Us</i> by Art as Therapy art therapists Sally Chung, Rapinder Kaur, and Jane Kwon (2025).</p>
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
{src: `${process.env.PUBLIC_URL}/illustrations/6-Space07 (1).jpeg`,height: unit,width: unit* 0.900879,},
{src: `${process.env.PUBLIC_URL}/illustrations/6-Space07 (2).jpeg`,height: unit,width: unit* 1.00688,},
{src: `${process.env.PUBLIC_URL}/illustrations/6-Space07 (3).jpeg`,height: unit,width: unit* 0.993164,},
{src: `${process.env.PUBLIC_URL}/illustrations/6-Space07.jpeg`,height: unit,width: unit* 0.982043,},
{src: `${process.env.PUBLIC_URL}/illustrations/6-Space08 (1).jpeg`,height: unit,width: unit* 0.907715,},
{src: `${process.env.PUBLIC_URL}/illustrations/6-Space08.jpeg`,height: unit,width: unit* 2,},
{src: `${process.env.PUBLIC_URL}/illustrations/7-Carousel-2.jpg`,height: unit,width: unit* 0.666667,},
{src: `${process.env.PUBLIC_URL}/illustrations/8-Elephant-4.jpg`,height: unit,width: unit* 1.60565,},
{src: `${process.env.PUBLIC_URL}/illustrations/8-Elephant-8.jpg`,height: unit,width: unit* 0.749518,},
{src: `${process.env.PUBLIC_URL}/illustrations/9-Characters-2.jpg`,height: unit,width: unit* 0.772798,},
{src: `${process.env.PUBLIC_URL}/illustrations/headerimagething.jpeg`,height: unit,width: unit* 1,},
]