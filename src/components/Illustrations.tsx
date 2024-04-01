import './Illustrations.css';
import { Gallery } from "react-grid-gallery";

export const Illustrations = () => {
    return (
        <div className="Illustrations">
            <Gallery images={illustrations} enableImageSelection={false} rowHeight={UNIT}></Gallery>
        </div>
    );
}

const UNIT = 320

const illustrations = [
    // LIONS
    {
        src: `${process.env.PUBLIC_URL}/illustrations/6.jpg`,
        height: UNIT,
        width: UNIT * 2.4108,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/page23-24.jpg`,
        height: UNIT,
        width: UNIT * 1.23701,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/image-asset-6.jpg`,
        height: UNIT,
        width: UNIT * 2.4108,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/image-asset-5.jpg`,
        height: UNIT,
        width: UNIT * 1.25063,
    },
    // END LIONS
    // merry go round?
    {
        src: `${process.env.PUBLIC_URL}/illustrations/65.jpg`,
        height: UNIT,
        width: UNIT * 0.800331,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/66.jpg`,
        height: UNIT,
        width: UNIT * 0.800427,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/67.jpg`,
        height: UNIT,
        width: UNIT * 0.800329,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Bumpas+_282_29.jpg`,
        height: UNIT,
        width: UNIT,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Carousel.jpg`,
        height: UNIT,
        width: UNIT,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Chapter+1.jpg`,
        height: UNIT,
        width: UNIT * 0.666667,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Chapter+5.jpg`,
        height: UNIT,
        width: UNIT * 0.800114,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Chapter+12+Scene+1.jpg`,
        height: UNIT,
        width: UNIT * 0.800111,
    },
    // end merry go round?
    // DIRT
    {
        src: `${process.env.PUBLIC_URL}/illustrations/page34final.jpg`,
        height: UNIT,
        width: UNIT * 2,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/image-asset-7.jpg`,
        height: UNIT,
        width: UNIT * 2,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Cover+SPREAD.jpg`,
        height: UNIT,
        width: UNIT * 2,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/BethanyClemons3.jpg`,
        height: UNIT,
        width: UNIT * 2,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/finalpages23-24.jpg`,
        height: UNIT,
        width: UNIT * 2,
    },
    // END DIRT
    {
        src: `${process.env.PUBLIC_URL}/illustrations/charactersballet.jpg`,
        height: UNIT,
        width: UNIT * 0.792173,
    },
    // Fecal Fighters
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Chill+Superhero.jpg`,
        height: UNIT,
        width: UNIT * 0.772798,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Clean.jpg`,
        height: UNIT,
        width: UNIT * 0.772798,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Colonel+Colon+Superhero.jpg`,
        height: UNIT,
        width: UNIT * 0.772798,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Cook+Superhero.jpg`,
        height: UNIT,
        width: UNIT * 0.772798,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Separate.jpg`,
        height: UNIT,
        width: UNIT * 0.772798,
    },
    // End Fecal Fighters
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Digital+art+children_s+book+cover+.jpg`,
        height: UNIT,
        width: UNIT * 1.20077,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Digital+art+concept+of+character+.jpg`,
        height: UNIT,
        width: UNIT * 1.47059,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/image-asset-3.jpg`,
        height: UNIT,
        width: UNIT * 1.59949,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/image-asset-4.jpg`,
        height: UNIT,
        width: UNIT * 1.59949,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Instagram_.jpg`,
        height: UNIT,
        width: UNIT,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Life_Is_What_You_Make_Of_It_.jpg`,
        height: UNIT,
        width: UNIT * 1.20019,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Life+is+What+You+Make+of+IT.jpg`,
        height: UNIT,
        width: UNIT * 1.20019,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Make+Art+Monday+(1a).jpg`,
        height: UNIT,
        width: UNIT * 1.26212,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Owl_And_Elephant+copy.jpg`,
        height: UNIT,
        width: UNIT * 0.887218,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Page+29-30a.jpg`,
        height: UNIT,
        width: UNIT * 1.60565,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Pages+17-18.jpg`,
        height: UNIT,
        width: UNIT * 1.60565,
    },
    // elephant
    {
        src: `${process.env.PUBLIC_URL}/illustrations/image-2.jpg`,
        height: UNIT,
        width: UNIT * 1.77809,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Pages13-14+Final.jpg`,
        height: UNIT,
        width: UNIT * 0.749518,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/image-3.jpg`,
        height: UNIT,
        width: UNIT * 1.77809,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Pages+19-20-2.jpg`,
        height: UNIT,
        width: UNIT * 1.60565,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Pages+23-24-2.jpg`,
        height: UNIT,
        width: UNIT * 1.60565,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/image.jpg`,
        height: UNIT,
        width: UNIT * 1.77809,
    },
    // END elephant
    // ZOO
    {
        src: `${process.env.PUBLIC_URL}/illustrations/image-asset-2.jpg`,
        height: UNIT,
        width: UNIT * 1.57398,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Pages+7-8.jpg`,
        height: UNIT,
        width: UNIT * 1.57398,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Page+15-16.jpg`,
        height: UNIT,
        width: UNIT * 1.58562,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/17.jpg`,
        height: UNIT,
        width: UNIT * 1.58562,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Pages+23-24.jpg`,
        height: UNIT,
        width: UNIT * 1.58562,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Pages+25-26.jpg`,
        height: UNIT,
        width: UNIT * 1.58562,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/image-asset.jpg`,
        height: UNIT,
        width: UNIT * 1.57398,
    },
    // END ZOO
    {
        src: `${process.env.PUBLIC_URL}/illustrations/sample3.jpg`,
        height: UNIT,
        width: UNIT * 1.09096,
    },
    {
        src: `${process.env.PUBLIC_URL}/illustrations/Wedding_Invite.jpg`,
        height: UNIT,
        width: UNIT * 0.714286,
    },
]