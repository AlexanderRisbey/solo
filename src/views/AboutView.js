/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=63667a86befaedf883e34757").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class AboutView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/AboutController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = AboutView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '6377c735e0b2eff84844a80d'
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
    const proxies = AboutView.Controller !== AboutView ? transformProxies(this.props.children) : {

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
                <a href="about" aria-current="page" className="af-class-nav-link w-nav-link w--current">About</a>
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
            <div className="af-class-about-hero-section af-class-hero-inner-spacing af-class-wf-section">
              <div className="af-class-container w-container">
                <h1 className="af-class-hero-about-title">About Us</h1>
                <div data-w-id="9164bd5b-cca2-1824-9c54-0da7bdb9c373" className="af-class-hero-about-image-wrap"><img src="images/office_2.png" loading="eager" sizes="(max-width: 479px) 96vw, (max-width: 767px) 97vw, 98vw" srcSet="images/office_2-p-500.png 500w, images/office_2-p-800.png 800w, images/office_2-p-1080.png 1080w, images/office_2-p-1600.png 1600w, images/office_2.png 2016w" alt className="af-class-hero-about-image" />
                  <div style={{width: '100%', height: '100%'}} className="af-class-hero-split-bg" />
                </div>
              </div>
            </div>
            <div className="af-class-section-spacing af-class-wf-section">
              <div className="af-class-container w-container">
                <div className="w-layout-grid af-class-grid-about">
                  <div id="w-node-_3c1bdf24-1e35-248a-b530-8b15aa8fe6be-4844a80d">
                    <h2 className="af-class-heading-4">"Anima magis est ubi amat, quam ubi animat."</h2>
                  </div>
                  <div id="w-node-bde17b7f-7f86-3614-bd96-16939c50bd39-4844a80d">
                    <p className="af-class-paragraph-2">Solo Architects is an enterprise that was established in March 2020 in MIMAR SINAN UNVERSITY OF FINE ARTS. It firstly started it activities in Beyoğlu / Cihangir with more interior design works but also pursued projects in Van, Bursa, Yalova but mainly in Istanbul. Moreover Solo Architects has consulted to many projects about budget, construction, work safety, &nbsp;design, material, building management, application etc. and made periodic partnership with other construction and architecture firms in their project by taking charge of the quality control. The main goal of Solo Architects is to develop its clients project with its all capacity and the team. Here is the summarized scheme of how we are taking the action when starting work with any business, foundation, person, client;<br /></p>
                    <div className="w-layout-grid af-class-about-clients">
                      <div id="w-node-_7891e35f-bc9d-eba2-95cc-02da20f65de3-4844a80d" className="af-class-client-item"><img src="images/IMG_1019.PNG" loading="lazy" sizes="100px" srcSet="images/IMG_1019-p-500.png 500w, images/IMG_1019-p-800.png 800w, images/IMG_1019-p-1080.png 1080w, images/IMG_1019-p-1600.png 1600w, images/IMG_1019-p-2000.png 2000w, images/IMG_1019.PNG 2048w" alt className="af-class-image-5" />
                        <div>Mevisim</div>
                      </div>
                      <div id="w-node-_8b88c95c-6f88-7f40-b035-c0a000590202-4844a80d" className="af-class-client-item"><img src="images/IMG_1018.PNG" loading="lazy" sizes="100px" srcSet="images/IMG_1018-p-500.png 500w, images/IMG_1018-p-800.png 800w, images/IMG_1018-p-1080.png 1080w, images/IMG_1018-p-1600.png 1600w, images/IMG_1018-p-2000.png 2000w, images/IMG_1018.PNG 2048w" alt className="af-class-image-5" />
                        <div>ULTEDA</div>
                      </div>
                      <div id="w-node-_7891e35f-bc9d-eba2-95cc-02da20f65de5-4844a80d" className="af-class-client-item"><img src="images/IMG_1017.PNG" loading="lazy" sizes="100px" srcSet="images/IMG_1017-p-500.png 500w, images/IMG_1017-p-800.png 800w, images/IMG_1017-p-1080.png 1080w, images/IMG_1017-p-1600.png 1600w, images/IMG_1017-p-2000.png 2000w, images/IMG_1017.PNG 2048w" alt className="af-class-image-6" />
                        <div>The Marions Suite Hotel</div>
                      </div>
                      <div id="w-node-_7891e35f-bc9d-eba2-95cc-02da20f65de7-4844a80d" className="af-class-client-item"><img src="images/IMG_1016.PNG" loading="lazy" sizes="100px" height srcSet="images/IMG_1016-p-500.png 500w, images/IMG_1016-p-800.png 800w, images/IMG_1016-p-1080.png 1080w, images/IMG_1016-p-1600.png 1600w, images/IMG_1016-p-2000.png 2000w, images/IMG_1016.PNG 2048w" alt className="af-class-image-7" />
                        <div>NIYAMA</div>
                      </div>
                      <div id="w-node-_7891e35f-bc9d-eba2-95cc-02da20f65de9-4844a80d" className="af-class-client-item"><img src="images/IMG_1015.PNG" loading="lazy" sizes="80px" srcSet="images/IMG_1015-p-500.png 500w, images/IMG_1015-p-800.png 800w, images/IMG_1015-p-1080.png 1080w, images/IMG_1015-p-1600.png 1600w, images/IMG_1015-p-2000.png 2000w, images/IMG_1015.PNG 2048w" alt className="af-class-image-8" />
                        <div>LYGOS FILMS</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-team-section af-class-wf-section">
              <div className="af-class-container w-container">
                <h2>Meet the artists</h2>
                <div className="w-dyn-list">
                  <div role="list" className="af-class-team-list w-dyn-items">
                    <div role="listitem" className="w-dyn-item">
                      <a data-w-id="e41b3079-ffac-926c-f741-1227fc99a426" href="#" className="af-class-team-item w-inline-block"><img src loading="eager" style={{WebkitTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} alt className="af-class-team-image" />
                        <h6 className="af-class-team-name" />
                        <div className="af-class-team-job-title" />
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
                          <a href="about" aria-current="page" className="af-class-footer-link w--current">About Us</a>
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

export default AboutView

/* eslint-enable */