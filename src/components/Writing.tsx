import './Writing.scss';
import { useContext } from 'react';
import DesktopContext from '../context/DesktopContext';

export const Writing = () => {
    const isDesktop = useContext(DesktopContext);
    return (
        <>
            <div className="Writing">
                <div className="Writing--Feature">
                    {isDesktop && (
                        <div className="Writing--FeatureImage">
                            <img alt="Coloring God's Love" src={`${process.env.PUBLIC_URL}/ColoringGodsLove.jpg`} style={{ maxWidth: '100%', height: 'auto' }} />
                        </div>
                    )}
                    <div className="Writing--FeatureText">
                        <h2>Coloring God&apos;s Love For Me: 100 Devotions To Inspire Young Hearts</h2>
                        <h5>Published by Tommy Nelson on June 14, 2022</h5>
                        <p>
                            Available online at Target, Walmart, Barnes & Noble, and Amazon
                        </p>
                        <p>
                            Here&apos;s my post about <i>Coloring God&apos;s Love for Me</i> and how art therapy has influenced my work as a writer. I recommend my and other resources that can prompt therapeutic art-making to reduce anxiety, promote relaxation, and strengthen your faith.
                        </p>
                        {!isDesktop && (
                            <div className="Writing--FeatureImage">
                                <img alt="Coloring God's Love" src={`${process.env.PUBLIC_URL}/ColoringGodsLove.jpg`} style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                        )}
                        <a href="https://shepherd.com/best-books/coloring-books-from-a-faith-based-art-therapist">
                            <button className="Writing--Button">
                                Read Post
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="Writing--Video">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/rVBI6cQy3Cw"
                    title="Read Aloud: Sitting with my Lions"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </>
    )
}