import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'
import headshot from '../assets/images/headshot.png'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <p>I offer ... ? Or some sort of very short bio/intro of what the company is?</p>
              </div>
              <span className="image"><img src={headshot} alt="Headshot of Hollie Emery" /></span>
            </div>
          </section>

          <section id="clients" className="main special">
            <header className="major">
              <h2>Clients</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3>Team17 Digital Ltd</h3>
                <p>I worked at Team17 as a permanent employee for over six years. I spent the first three years working as a QA/Senior QA assistant before moving across into Production.</p>
              </li>
              <li>
                <span className="icon major style3 fa-copy"></span>
                <h3>Studio 2</h3>
                <p>Something about this studio?</p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>Studio 3</h3>
                <p>Something about this studio?</p>
              </li>
            </ul>
          </section>

          <section id="about" className="main special">
            <header className="major">
              <h2>About</h2>
              <p>Some more information about the services offered and career. It can all be here or have another page to be viewed with this learn more button.</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

        </div>

      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
