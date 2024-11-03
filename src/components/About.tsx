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
                    Hi there! I&apos;m a children&apos;s book illustrator, author, and Registered Art Therapist (credential #22-487) with 10+ collaborative projects, self-published and traditionally published. Most recently, I released a kid&apos;s coloring book devotional with Tommy Nelson Publishing called <a href="https://linktr.ee/janaecoraggio"><i>Coloring God&apos;s Love for Me: 100 Devotions to Inspire Young Hearts</i></a>.
                </p>
                {!isDesktop && (
                    <div className="About--ImageContainer">
                        <img alt="Profile" className="About--Image" src={`${process.env.PUBLIC_URL}/profile.jpeg`}></img>
                    </div>
                )}
                <p>
                    I hold a Masters of Arts degree in Marriage and Family Therapy (MFT) and Art Therapy (AT) from Dominican University of California. I believe that art-making and the creative process can be powerful tools in helping people process emotions and difficult life circumstances while getting in touch with their values and new ways of thinking for promoting a healthy and purpose-driven life. My master&apos;s thesis is <a href="https://scholar.dominican.edu/art-therapy-theses-dissertations/1/"><i>The Therapeutic Benefits of Children&apos;s Literature: Responding Through Making Art and Writing Stories</i></a>. My undergrad is in Child and Adolescent Development, which might explain why I love working particularly with kids and teens in a therapeutic context.
                </p>
                <p>
                    I&apos;m currently working as an art therapist at a memory care facility, helping people with Alzheimer&apos;s and dementia find creative self-expression. I volunteer with the Kids & Art Foundation, a nonprofit in the Bay Area bringing the arts to children fighting cancer and chronic illness. In my free time, I find the best coffee shops in San Francisco, stay active in my church community, and play tennis with my husband.
                </p>
            </div>
        </div>
    )
}