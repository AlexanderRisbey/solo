/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=63667a86befaedf883e34757").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class ContactView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/ContactController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ContactView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '6377c735e0b2ef98ed44a812'
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
    const proxies = ContactView.Controller !== ContactView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(C:\\css\\normalize.css);
          @import url(C:\\css\\webflow.css);
          @import url(C:\\css\\solo-architects.webflow.css);
        ` }} />
        <span className="af-view">
          <div>
            <div data-w-id="a1e4a4fe-8958-4d97-d653-0e5ab1a1f9e9" data-animation="default" data-collapse="medium" data-duration={60} data-easing="linear" data-easing2="linear" role="banner" className="af-class-navbar w-nav">
              <nav role="navigation" className="af-class-nav-menu w-nav-menu">
                <a href="index.html" className="af-class-nav-link w-nav-link">Home</a>
                <a href="about.html" className="af-class-nav-link w-nav-link">About</a>
                <a href="projects.html" className="af-class-nav-link w-nav-link">Work</a>
                <a href="service-detail.html" className="af-class-nav-link w-nav-link">Services</a>
                <a href="contact.html" aria-current="page" className="af-class-nav-link w-nav-link w--current">Contact</a>
              </nav>
              <div className="af-class-nav-button w-nav-button">
                <div className="af-class-icon w-icon-nav-menu" />
              </div>
              <div className="af-class-div-block">
                <a href="index.html" className="af-class-brand w-nav-brand"><img src="images/logo_1.svg" loading="lazy" data-w-id="a1e4a4fe-8958-4d97-d653-0e5ab1a1f9eb" alt className="af-class-image" />
                  <div className="af-class-text-block">Solo</div>
                  <div className="af-class-text-block-2">Architects</div>
                </a>
              </div>
            </div>
            <div className="af-class-hero-inner-spacing af-class-wf-section">
              <div className="af-class-container w-container">
                <div className="af-class-section-title">
                  <h2>Contact Us</h2>
                </div>
                <div className="w-layout-grid af-class-grid-contact">
                  <div id="w-node-_8862d9d5-a6e6-5199-3acf-6f6c252abfa6-ed44a812">
                    <div className="af-class-contact-form w-form">
                      <form id="wf-form-Contact-Form" name="wf-form-Contact-Form" data-name="Contact Form" method="get">
                        <div className="af-class-input-group"><input type="text" className="af-class-form-input w-input" maxLength={256} name="Name" data-name="Name" placeholder="Name" id="Name" required /></div>
                        <div className="af-class-input-group"><input type="email" className="af-class-form-input w-input" maxLength={256} name="Email" data-name="Email" placeholder="Email" id="Email" required /></div>
                        <div className="af-class-input-group"><textarea placeholder="Message" maxLength={5000} id="field" name="field" data-name="field" className="af-class-form-input af-class-form-textarea w-input" defaultValue={""} /></div><input type="submit" defaultValue="Send request" data-wait="Please wait..." className="af-class-button w-button" />
                      </form>
                      <div className="af-class-success-message w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="af-class-error-message w-form-fail">
                        <div>Oops! Something went wrong while submitting the form.</div>
                      </div>
                    </div>
                  </div>
                  <div id="w-node-f89c808c-bdbe-9fa0-741a-fa6999cab4fb-ed44a812" className="af-class-contact-info">
                    <div className="af-class-contact-item">
                      <h6>Email</h6>
                      <div className="af-class-text-block-4">info@architecturesolo.com</div>
                      <a href="mailto:info@architecturesolo.com" className="af-class-link-2-copy">info@architecturesolo.com</a>
                    </div>
                    <div className="af-class-contact-item">
                      <h6>Phone</h6>
                      <div className="af-class-text-block-5">+90 (507) 444 64 62</div>
                      <a href="tel:+905074446462" className="af-class-link-2-copy">+90 (507) 444 6462</a>
                    </div>
                    <div className="af-class-contact-item">
                      <h6>Address</h6>
                      <div className="af-class-text-block-6">Cihangir Mahsllesi Pürtelaş, <br />Sokak No:3A Beyoğlu/ İstanbul</div>
                      <a href="https://goo.gl/maps/8RbYQLJX7fT2jNft9" className="af-class-link-3-copy">Cihangir Mahallesi Pürtelaş, <br />Sokak No:3A Beyoğlu/ İstanbul</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-map-section af-class-section-spacing-top af-class-wf-section">
              <div className="w-widget w-widget-map" data-widget-style="roadmap" data-widget-latlng="37.3860517,-122.0838511" aria-label="Architecture" data-enable-scroll="false" role="region" title="Architecture" data-enable-touch="true" data-widget-zoom={12} data-widget-tooltip />
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
                      <a data-w-id="006893bb-e490-891c-7130-f6fdd71ac787" href="contact.html" aria-current="page" className="af-class-button-link w-inline-block w--current">
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
                        <a href="utility-pages/style-guide.html" className="af-class-footer-link">Style Guide</a>
                      </li>
                      <li className="af-class-footer-help-link-item">
                        <a href="utility-pages/untitled.html" className="af-class-footer-link">Instructions</a>
                      </li>
                      <li className="af-class-footer-help-link-item">
                        <a href="utility-pages/licenses.html" className="af-class-footer-link">Licenses</a>
                      </li>
                      <li className="af-class-footer-help-link-item">
                        <a href="utility-pages/changelog.html" className="af-class-footer-link">Changelog</a>
                      </li>
                    </ul>
                    <h4 className="af-class-heading-5">Have a question, a project? <br />We'd love to discuss</h4>
                  </div>
                  <div id="w-node-_006893bb-e490-891c-7130-f6fdd71ac769-d71ac766" className="af-class-footer-item">
                    <div className="w-layout-grid af-class-grid-menu-item">
                      <ul role="list" className="w-list-unstyled">
                        <li className="af-class-footer-link-item">
                          <a href="index.html" className="af-class-footer-link">Home</a>
                        </li>
                        <li className="af-class-footer-link-item">
                          <a href="about.html" className="af-class-footer-link">About Us</a>
                        </li>
                        <li className="af-class-footer-link-item">
                          <a href="projects.html" className="af-class-footer-link">Projects</a>
                        </li>
                        <li className="af-class-footer-link-item">
                          <a href="contact.html" aria-current="page" className="af-class-footer-link w--current">Contact</a>
                        </li>
                      </ul>
                    </div>
                    <div className="af-class-footer-bottom">
                      <div className="af-class-footer-logo">
                        <a href="index.html" className="w-inline-block"><img src="images/logo_1.svg" loading="lazy" width={100} height="Auto" alt className="af-class-image-2" /></a>
                        <a href="https://goo.gl/maps/8RbYQLJX7fT2jNft9" className="af-class-link-3">Cihangir Mahallesi Pürtelaş, <br />Sokak No:3A Beyoğlu/ İstanbul</a>
                        <p className="af-class-footer-address">Cihangir Mahsllesi Pürtelaş, <br />Sokak No:3A Beyoğlu/ İstanbul<br /></p>
                      </div>
                      <p className="af-class-copyright">© 2022 Solo Architects<br />Powered by <a href="https://www.gnu.org/gnu/gnu.html" target="_blank">GNU/Linux</a>
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

export default ContactView

/* eslint-enable */