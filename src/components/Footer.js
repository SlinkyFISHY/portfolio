import React from 'react'
import Link from 'gatsby-link'

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Is there anything you might want here?</h2>
            <p>Maybe a bit more info ... again can have this learn more button and change the text if required.</p>
            <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
            </ul>
        </section>
        <section>
            <h2>Contact</h2>
            <dl className="alt">
                <dt>Phone</dt>
                <dd>(000) 000-0000 x 0000</dd>
                <dt>Email</dt>
                <dd><a href="#">hollie.prod@gmail.com</a></dd>
            </dl>
            <ul className="icons">
                <li><a href="https://www.linkedin.com/in/hollie-emery-074a625b/" className="icon fa-linkedin-square alt"><span className="label">LinkedIn</span></a></li>
                <li><a href="https://twitter.com/SLINKYFISHY" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
                <li><a href="https://www.facebook.com/SlinkyFISHY" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
                <li><a href="https://www.instagram.com/slinkyfishy/" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
                <li><a href="https://github.com/SlinkyFISHY" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
            </ul>
        </section>
        <p className="copyright">Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
    </footer>
)

export default Footer
