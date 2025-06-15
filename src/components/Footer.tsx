import './Footer.scss';

export const Footer = () => {
    return (
        <div className="Footer">
            <a href="mailto:janaecoraggio@gmail.com"><img alt="Email" src={`${process.env.PUBLIC_URL}/envelope-regular.svg`} className="Footer--Icon" /></a>
            <a href="https://www.linkedin.com/in/janaedueck/"><img alt="LinkedIn" src={`${process.env.PUBLIC_URL}/linkedin-in.svg`} className="Footer--Icon" /></a>
            <a href="https://www.instagram.com/janaearttherapy/"><img alt="Instagram" src={`${process.env.PUBLIC_URL}/insta_logo.svg`} className="Footer--Icon" /></a>
        </div>
    )
}