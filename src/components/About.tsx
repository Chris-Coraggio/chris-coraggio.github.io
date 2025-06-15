import './About.scss';
import { useContext } from 'react';
import DesktopContext from '../context/DesktopContext';

export const About = () => {
    const isDesktop = useContext(DesktopContext);
    return (
        <div className="About">
            {isDesktop && (
                <div className="About--ImageContainer">
                    <img alt="Profile" className="About--Image" src={`${process.env.PUBLIC_URL}/profile.jpeg`}></img>
                </div>
            )}
            <div className="About--Bio">
                <p>
                    Janae is a children&apos;s book illustrator, author, and Board Certified Art Therapist (#22-487) with 10+ collaborative projects, self-published and traditionally published. Most recently, she released a kid&apos;s coloring book devotional with Tommy Nelson Publishing called <a href="https://www.amazon.com/Coloring-Gods-Love-Me-Devotions/dp/1400236347"><i>Coloring God&apos;s Love for Me: 100 Devotions to Inspire Young Hearts</i></a>.
                </p>
                {!isDesktop && (
                    <div className="About--ImageContainer">
                        <img alt="Profile" className="About--Image" src={`${process.env.PUBLIC_URL}/profile.jpeg`}></img>
                    </div>
                )}
                <p>
                    She holds a Masters of Arts degree in Marriage and Family Therapy (MFT) and Art Therapy (AT) from Dominican University of California. She believes that art-making and the creative process can be powerful tools in helping people process emotions and difficult life circumstances. Her master&apos;s thesis is <a href="https://scholar.dominican.edu/art-therapy-theses-dissertations/1/"><i>The Therapeutic Benefits of Children&apos;s Literature: Responding Through Making Art and Writing Stories</i></a>.
                </p>
                <p>
                    She currently works as an art therapist at a memory care facility, helping people with Alzheimer&apos;s and dementia find creative self-expression. She volunteers with the Kids & Art Foundation, a nonprofit in the Bay Area bringing the arts to children fighting cancer and chronic illness. In her free time, she finds the best coffee shops in San Francisco, stays active in her church community, and loves to walk her husky, Coda, with her husband, Chris.
                </p>
            </div>
        </div>
    )
}