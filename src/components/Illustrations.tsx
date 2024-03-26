import { JsxElement } from 'typescript';
import './Illustrations.css';

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
    `${process.env.PUBLIC_URL}/logo.png`,
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

export const Illustrations = () => {
    const eightRandomIllustrations = illustrations.slice().sort(() => Math.random() - 0.5).slice(0, 8)
    let numInRow = 3;
    let rows: Array<JSX.Element> = [];
    for (let i = 0; i < 8;) {
        const numbers = Array.from({ length: numInRow }, (_, index) => i + index);
        rows.push(
            <div style={{ gridTemplateColumns: `repeat(${numInRow}, 1fr)` }}>
                {numbers.map(j => <img src={eightRandomIllustrations[j]} className="Illustrations--Image"></img>)}
            </div>
        )
        i += numInRow
        numInRow = numInRow === 2 ? 3 : 2;
    }
    return (
        <div className="Illustrations">
            {rows}
        </div>
    )
}