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



const illustrations = (unit: number) => [
    // LIONS
    {
        src: `${process.env.PUBLIC_URL}/illustrations/6.jpg`,
        height: unit,
        width: unit * 2.4108,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/page23-24.jpg`,
        height: unit,
        width: unit * 1.23701,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/image-asset-6.jpg`,
        height: unit,
        width: unit * 2.4108,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/image-asset-5.jpg`,
        height: unit,
        width: unit * 1.25063,
    },
    // END LIONS
    // merry go round?
    {
        src: `${process.env.PUBLIC_URL}/illustrations/65.jpg`,
        height: unit,
        width: unit * 0.800331,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/66.jpg`,
        height: unit,
        width: unit * 0.800427,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/67.jpg`,
        height: unit,
        width: unit * 0.800329,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Bumpas+_282_29.jpg`,
        height: unit,
        width: unit,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Carousel.jpg`,
        height: unit,
        width: unit,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Chapter+1.jpg`,
        height: unit,
        width: unit * 0.666667,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Chapter+5.jpg`,
        height: unit,
        width: unit * 0.800114,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Chapter+12+Scene+1.jpg`,
        height: unit,
        width: unit * 0.800111,
    },
    // end merry go round?
    // DIRT
    {
        src: `${process.env.PUBLIC_URL}/illustrations/page34final.jpg`,
        height: unit,
        width: unit * 2,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/image-asset-7.jpg`,
        height: unit,
        width: unit * 2,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Cover+SPREAD.jpg`,
        height: unit,
        width: unit * 2,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/BethanyClemons3.jpg`,
        height: unit,
        width: unit * 2,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/finalpages23-24.jpg`,
        height: unit,
        width: unit * 2,
    },
    // END DIRT
    {
        src: `${process.env.PUBLIC_URL}/illustrations/charactersballet.jpg`,
        height: unit,
        width: unit * 0.792173,
    },
    // Fecal Fighters
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Chill+Superhero.jpg`,
        height: unit,
        width: unit * 0.772798,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Clean.jpg`,
        height: unit,
        width: unit * 0.772798,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Colonel+Colon+Superhero.jpg`,
        height: unit,
        width: unit * 0.772798,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Cook+Superhero.jpg`,
        height: unit,
        width: unit * 0.772798,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Separate.jpg`,
        height: unit,
        width: unit * 0.772798,
    },
    // End Fecal Fighters
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Digital+art+children_s+book+cover+.jpg`,
        height: unit,
        width: unit * 1.20077,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/image-asset-3.jpg`,
        height: unit,
        width: unit * 1.59949,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/image-asset-4.jpg`,
        height: unit,
        width: unit * 1.59949,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Instagram_.jpg`,
        height: unit,
        width: unit,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Life+is+What+You+Make+of+IT.jpg`,
        height: unit,
        width: unit * 1.20019,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Owl_And_Elephant+copy.jpg`,
        height: unit,
        width: unit * 0.887218,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Wedding_Invite.jpg`,
        height: unit,
        width: unit * 1.48754,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Page+29-30a.jpg`,
        height: unit,
        width: unit * 1.60565,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Pages+17-18.jpg`,
        height: unit,
        width: unit * 1.60565,
    },
    // elephant
    {
        src: `${process.env.PUBLIC_URL}/illustrations/image-2.jpg`,
        height: unit,
        width: unit * 1.77809,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Pages13-14+Final.jpg`,
        height: unit,
        width: unit * 0.749518,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/image-3.jpg`,
        height: unit,
        width: unit * 1.77809,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Pages+19-20-2.jpg`,
        height: unit,
        width: unit * 1.60565,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Pages+23-24-2.jpg`,
        height: unit,
        width: unit * 1.60565,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/image.jpg`,
        height: unit,
        width: unit * 1.77809,
    },
    // END elephant
    // ZOO
    {
        src: `${process.env.PUBLIC_URL}/illustrations/image-asset-2.jpg`,
        height: unit,
        width: unit * 1.57398,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Pages+7-8.jpg`,
        height: unit,
        width: unit * 1.57398,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Page+15-16.jpg`,
        height: unit,
        width: unit * 1.58562,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/17.jpg`,
        height: unit,
        width: unit * 1.58562,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Pages+23-24.jpg`,
        height: unit,
        width: unit * 1.58562,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Pages+25-26.jpg`,
        height: unit,
        width: unit * 1.58562,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/image-asset.jpg`,
        height: unit,
        width: unit * 1.57398,
    },
    // END ZOO
]