/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=63667a86befaedf883e34757").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class JournalView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/JournalController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = JournalView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '6377c735e0b2ef5aab44a81a'
    htmlEl.dataset['wfSite'] = '63667a86befaedf883e34757'

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = JournalView.Controller !== JournalView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/solo-architects.webflow.css);
        ` }} />
        <span className="af-view">
          <div>
            <div data-w-id="a1e4a4fe-8958-4d97-d653-0e5ab1a1f9e9" data-animation="default" data-collapse="medium" data-duration={60} data-easing="linear" data-easing2="linear" role="banner" className="af-class-navbar w-nav">
              <nav role="navigation" className="af-class-nav-menu w-nav-menu">
                <a href="/" className="af-class-nav-link w-nav-link">Home</a>
                <a href="about" className="af-class-nav-link w-nav-link">About</a>
                <a href="projects" className="af-class-nav-link w-nav-link">Work</a>
                <a href="service-detail" className="af-class-nav-link w-nav-link">Services</a>
                <a href="contact" className="af-class-nav-link w-nav-link">Contact</a>
              </nav>
              <div className="af-class-nav-button w-nav-button">
                <div className="af-class-icon w-icon-nav-menu" />
              </div>
              <div className="af-class-div-block">
                <a href="/" className="af-class-brand w-nav-brand"><img src="images/logo_1.svg" loading="lazy" data-w-id="a1e4a4fe-8958-4d97-d653-0e5ab1a1f9eb" alt className="af-class-image" />
                  <div className="af-class-text-block">Solo</div>
                  <div className="af-class-text-block-2">Architects</div>
                </a>
              </div>
            </div>
            <div className="af-class-hero-inner-spacing af-class-wf-section">
              <div className="af-class-container w-container">
                <h2 className="af-class-blog-heading-title">Journal</h2>
                <div className="w-dyn-list">
                  <div role="list" className="af-class-collection-list w-dyn-items">
                    <div role="listitem" className="af-class-blog-item w-dyn-item">
                      <a data-w-id="800c015b-8821-9549-fb3a-7d185fcacc11" href="#" className="af-class-blog-link w-inline-block">
                        <div className="af-class-blog-image-wrap">
                          <div className="af-class-blog-view-circle">View</div><img src loading="lazy" style={{WebkitTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} alt className="af-class-blog-image" />
                        </div>
                        <div className="af-class-blog-info">
                          <h4 className="af-class-blog-date" />
                          <h6 className="af-class-blog-title" />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="af-class-empty-state w-dyn-empty">
                    <div>No items found.</div>
                  </div>
                </div>
              </div>
            </div>
            <footer id="footer" className="af-class-footer af-class-wf-section">
              <div className="af-class-container w-container">
                <div className="w-layout-grid af-class-grid-footer">
                  <div id="w-node-_006893bb-e490-891c-7130-f6fdd71ac77c-d71ac766" className="af-class-footer-item">
                    <div className="af-class-footer-call-wrap">
                      <div className="af-class-footer-call">
                        <div className="af-class-footer-mail">info@architecturesolo.com</div>
                        <a href="mailto:info@architecturesolo.com" className="af-class-link-2">info@architecturesolo.com</a>
                        <a href="tel:+905074446462" className="af-class-link-2">+90 (507) 444 6462</a>
                        <div className="af-class-footer-number">+90 (507) 444 64 62</div>
                      </div>
                      <a data-w-id="006893bb-e490-891c-7130-f6fdd71ac787" href="contact" className="af-class-button-link w-inline-block">
                        <div className="af-class-button-link-line-hover" />
                        <div className="af-class-button-link-line" />
                        <div>Send A message</div>
                      </a>
                    </div>
                    <div className="af-class-footer-social">
                      <a href="https://www.instagram.com/soloarchitects/" target="_blank" className="af-class-footer-social-link w-inline-block"><img src="images/instagram-brands.svg" loading="lazy" alt className="af-class-footer-social-icon" /></a>
                      <a href="https://pinterest.com/soloarchitects" target="_blank" className="af-class-footer-social-link w-inline-block"><img src="images/pinterest.svg" loading="lazy" alt className="af-class-footer-social-icon" /></a>
                      <a href="https://twitter.com/soloarchitects/" target="_blank" className="af-class-footer-social-link w-inline-block"><img src="images/twitter.svg" loading="lazy" alt className="af-class-footer-social-icon" /></a>
                    </div>
                    <ul role="list" className="af-class-footer-menu w-list-unstyled">
                      <li className="af-class-footer-help-link-item">
                        <a href="utility-pages/style-guide" className="af-class-footer-link">Style Guide</a>
                      </li>
                      <li className="af-class-footer-help-link-item">
                        <a href="utility-pages/untitled" className="af-class-footer-link">Instructions</a>
                      </li>
                      <li className="af-class-footer-help-link-item">
                        <a href="utility-pages/licenses" className="af-class-footer-link">Licenses</a>
                      </li>
                      <li className="af-class-footer-help-link-item">
                        <a href="utility-pages/changelog" className="af-class-footer-link">Changelog</a>
                      </li>
                    </ul>
                    <h4 className="af-class-heading-5">Have a question, a project? <br />We'd love to discuss</h4>
                  </div>
                  <div id="w-node-_006893bb-e490-891c-7130-f6fdd71ac769-d71ac766" className="af-class-footer-item">
                    <div className="w-layout-grid af-class-grid-menu-item">
                      <ul role="list" className="w-list-unstyled">
                        <li className="af-class-footer-link-item">
                          <a href="/" className="af-class-footer-link">Home</a>
                        </li>
                        <li className="af-class-footer-link-item">
                          <a href="about" className="af-class-footer-link">About Us</a>
                        </li>
                        <li className="af-class-footer-link-item">
                          <a href="projects" className="af-class-footer-link">Projects</a>
                        </li>
                        <li className="af-class-footer-link-item">
                          <a href="contact" className="af-class-footer-link">Contact</a>
                        </li>
                      </ul>
                    </div>
                    <div className="af-class-footer-bottom">
                      <div className="af-class-footer-logo">
                        <a href="/" className="w-inline-block"><img src="images/logo_1.svg" loading="lazy" width={100} height="Auto" alt className="af-class-image-2" /></a>
                        <a href="https://goo.gl/maps/8RbYQLJX7fT2jNft9" className="af-class-link-3">Cihangir Mahallesi Pürtelaş, <br />Sokak No:3A Beyoğlu/ İstanbul</a>
                        <p className="af-class-footer-address">Cihangir Mahallesi Pürtelaş, <br />Sokak No:3A Beyoğlu/ İstanbul<br /></p>
                      </div>
                      <p className="af-class-copyright">© 2022 Solo Architects<br />Powered by <a href="https://www.gnu.org/gnu/gnu" target="_blank">GNU/Linux</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default JournalView

/* eslint-enable */