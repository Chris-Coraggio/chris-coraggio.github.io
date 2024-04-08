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
                    <strong>Janae Dueck, MA, ATR</strong> is a children&apos;s book illustrator, author, and Registered Art Therapist with over seven self-published and traditionally published books. Most recently, she released a new kid&apos;s coloring book devotional with Tommy Nelson Publishing titled <i>Coloring God&apos;s Love for Me: 100 Devotions to Inspire Young Hearts</i> on June 14, 2022.
                </p>
                {!isDesktop && (
                    <div className="About--ImageContainer">
                        <img alt="Profile" className="About--Image" src={`${process.env.PUBLIC_URL}/profile.jpeg`}></img>
                    </div>
                )}
                <p>
                    Inspired by her writing and art pursuits, Janae holds a Masters of Arts degree in Marriage and Family Therapy (MFT) and Art Therapy (AT) from Dominican University of California. She believes that art-making and the creative process can be powerful tools in helping people process emotions and difficult life circumstances while getting in touch with their values and new ways of thinking for promoting a healthy and purpose-driven life. Her master&apos;s school thesis is titled <i>The Therapeutic Benefits of Children&apos;s Literature: Responding Through Making Art and Writing Stories</i>. Janae&apos;s undergraduate degree is in Child and Adolescent Development from San Jose State University and exemplifies a strong passion she has for providing art therapy and counseling services to children and teens.
                </p>
                <p>
                    Janae is currently working as an art therapist in pediatrics for those undergoing cancer treatment. She remains involved with the Kids & Art Foundation, a nonprofit in the Bay Area bringing the arts to children fighting cancer and chronic illness. She is a member of the American Art Therapy Association as a current ATR credential holder #22-487.
                </p>
            </div>
        </div>
    )
}