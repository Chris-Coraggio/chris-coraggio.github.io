import './Footer.css';

export const Footer = () => {
    return (
        <div className="Footer">
            <a href="mailto:janaedueck@sbcglobal.net"><img alt="Email" src={`${process.env.PUBLIC_URL}/envelope-regular.svg`} className="Footer--Icon" /></a>
            <a href="https://www.linkedin.com/in/janae-dueck-09364799/"><img alt="LinkedIn" src={`${process.env.PUBLIC_URL}/linkedin-in.svg`} className="Footer--Icon" /></a>
            <a href="https://www.instagram.com/janae.dueck/"><img alt="Instagram" src={`${process.env.PUBLIC_URL}/insta_logo.svg`} className="Footer--Icon" /></a>
        </div>
    )
}