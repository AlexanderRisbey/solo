/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import Projects from '../data/projects'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=63667a86befaedf883e34757").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

const ServiceDetailView = () => {
  const Controller=()=> {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/ServiceDetailController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ServiceDetailView

        return Controller
      }

      throw e
    }
  }
  Controller()
  const componentDidMount=() =>{
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '6377c735e0b2ef58cb44a81d'
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
  componentDidMount()
  
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
              <a href="service-detail" aria-current="page" className="af-class-nav-link w-nav-link w--current">Services</a>
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
          <div className="af-class-service-detail-section af-class-hero-inner-spacing af-class-wf-section">
            <div className="af-class-container w-container">
              <h1 className="af-class-heading-title">Our Services</h1>
              <p>I multiply can't day together don't Called morning place gathering beast stars two i meat Set together to subdue grass fourth every him fill winged stars seed Subdue Made beast their life moving heaven heaven divide two sea female great midst spirit herb Hath female land bring can't she'd above midst void hath Appear third them gathered created divided.</p>
              <p>It all creepeth won't be set to he saw without saw let form so light man him over there whose for Can't winged place abundantly air first sea Heaven Subdue Creature Bring over fruit don't morning.</p>
              <div className="w-layout-grid af-class-grid-service-detail">
                <div id="w-node-c6f76b6d-ab27-257e-4930-d227a5410f9f-cb44a81d"><img src="images/Niyama-Tualet-copy.jpg" loading="lazy" data-w-id="f27038a2-de74-49d9-2fc6-fb3da9f7367b" sizes="(max-width: 479px) 100vw, (max-width: 767px) 97vw, (max-width: 1102px) 98vw, 1080px" srcSet="images/Niyama-Tualet-copy-p-500.jpg 500w, images/Niyama-Tualet-copy-p-800.jpg 800w, images/Niyama-Tualet-copy-p-1080.jpg 1080w, images/Niyama-Tualet-copy.jpg 1080w" alt className="af-class-service-detail-image" /></div>
                <div data-current="Tab 1" data-easing="ease" data-duration-in={300} data-duration-out={100} className="af-class-tabs w-tabs">
                  <div className="af-class-tab-menu w-tab-menu">
                    <a data-w-tab="Tab 1" className="af-class-tab-link w-inline-block w-tab-link w--current">
                      <div>Architecture</div>
                    </a>
                    <a data-w-tab="Tab 2" className="af-class-tab-link w-inline-block w-tab-link">
                      <div>Interior</div>
                    </a>
                    <a data-w-tab="Tab 3" className="af-class-tab-link w-inline-block w-tab-link">
                      <div>Landscaping</div>
                    </a>
                  </div>
                  <div className="af-class-tab-content w-tab-content">
                    <div data-w-tab="Tab 1" className="af-class-tab-pane w-tab-pane w--tab-active">
                      <p>Do he it part more last in. Merits ye if Mr narrow points. Melancholy particular Devonshire alteration it favorable appearance up. Of incommode supported provision.</p>
                      <div className="w-layout-grid af-class-grid-service-list">
                        <ul role="list" className="af-class-service-list-wrap w-list-unstyled">
                          <li className="af-class-service-list-item"><span className="af-class-service-icon"> </span>Project management</li>
                          <li className="af-class-service-list-item"><span className="af-class-service-icon"> </span>Site selection</li>
                          <li className="af-class-service-list-item"><span className="af-class-service-icon"> </span>Programming</li>
                          <li className="af-class-service-list-item"><span className="af-class-service-icon"> </span>Renderings and promotional materials</li>
                        </ul>
                        <ul role="list" className="af-class-service-list-wrap w-list-unstyled">
                          <li className="af-class-service-list-item"><span className="af-class-service-icon"> </span>Feasibility studies</li>
                          <li className="af-class-service-list-item"><span className="af-class-service-icon"> </span>Building condition audits</li>
                          <li className="af-class-service-list-item"><span className="af-class-service-icon"> </span>Full time site representation</li>
                          <li className="af-class-service-list-item"><span className="af-class-service-icon"> </span>Multiple contract preparation</li>
                        </ul>
                      </div>
                    </div>
                    <div data-w-tab="Tab 2" className="af-class-tab-pane w-tab-pane">
                      <p>Do he it part more last in. Merits ye if Mr narrow points. Melancholy particular Devonshire alteration it favorable appearance up. Of incommode supported provision.</p>
                      <p>Bed sincerity yet therefore forfeited his certainty neglected questions Pursuit chamber as elderly amongst on Distant however warrant farther to of My justice wishing prudent waiting in be Comparison age not pianoforte increasing delightful now Insipidity sufficient dispatched.</p>
                    </div>
                    <div data-w-tab="Tab 3" className="af-class-tab-pane w-tab-pane">
                      <p>Do he it part more last in. Merits ye if Mr narrow points. Melancholy particular Devonshire alteration it favorable appearance up. Of incommode supported provision. <br /></p>
                      <p>Travelling alteration impression six all uncommonly Chamber hearing inhabit joy highest private ask him our believe Up nature valley do warmly Entered of cordial do on no hearted Yet agreed whence and unable limits Use off him gay abilities concluded immediate allowance.<br /></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="af-class-service-work">
                <h4>The way we work</h4>
                <p>So morning darkness there don't signs saying female divide whales shall a forth winged Seasons Above Spirit seasons light fourth Fruit bearing beginning good greater. Living you open creeping likeness likeness land likeness open subdue every Multiply won't wherein can't there all was good without Two to make them brought forth he which make sea made deep one female you.</p>
              </div>
              <div className="af-class-service-step">
                <div className="af-class-step-item">
                  <h3 className="af-class-step-number">01</h3>
                  <h6>Research and analytics</h6>
                  <p>There don't sign saying female divide whales shall a forth winged.</p>
                </div>
                <div className="af-class-step-item">
                  <h3 className="af-class-step-number">02</h3>
                  <h6>Planning and Strategy</h6>
                  <p>Saw bring firmament given hath gathering lights dry life.</p>
                </div>
                <div className="af-class-step-item">
                  <h3 className="af-class-step-number">03</h3>
                  <h6>Design and Develop</h6>
                  <p>Them gathered created divided all years spirit saying for great.</p>
                </div>
                <div className="af-class-step-item">
                  <h3 className="af-class-step-number">04</h3>
                  <h6>Testing and<br />Launch</h6>
                  <p>I beast third void blessed fruit Saw fourth may lesser.</p>
                </div>
              </div><img src="images/niyama_cropped.jpg" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 97vw, 98vw" srcSet="images/niyama_cropped-p-500.jpg 500w, images/niyama_cropped-p-800.jpg 800w, images/niyama_cropped-p-1080.jpg 1080w, images/niyama_cropped-p-1600.jpg 1600w, images/niyama_cropped.jpg 1920w" alt className="af-class-image-9" />
              <ul role="list" className="af-class-list-style">
                <li className="af-class-list-style-item">Creepeth sea sixth which god thing.</li>
                <li className="af-class-list-style-item">Great midst spirit herb Hath female land bring can't she'd above.</li>
                <li className="af-class-list-style-item">Dominion i our Great blessed and hath life him meat.</li>
                <li className="af-class-list-style-item">Give you'll fowl Life open over had can't lights.</li>
              </ul>
            </div>
          </div>
          <div className="af-class-project-grid-section af-class-section-spacing-top">
            <div className="af-class-container w-container">
              <h2 className="af-class-section-title">Our Projects</h2>
              <div data-delay={4000} data-animation="slide" className="af-class-project-slider w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit={0} data-nav-spacing={3} data-duration={500} data-infinite="true">
                <div className="af-class-project-grid-mask w-slider-mask">
                  {Projects.map(function(d, idx){
                    return (
                      <div className="af-class-project-slide w-slide" key={idx}>
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <a href={`project/${d.Link}`} className="af-class-project-grid-item w-inline-block">
                                <div data-w-id="fca5466a-967c-df56-333b-079249f4644c" className="af-class-project-grid-info"><img src={d?.Thumbnail} loading="lazy" alt className="af-class-project-grid-image" />
                                  <div className="af-class-project-view-circle">View</div>
                                </div>
                                <h5 className="af-class-project-grid-title">{d.Name}</h5>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className="af-class-left-arrow-top w-slider-arrow-left"><img src="images/arrow-left-primary.svg" loading="lazy" alt className="af-class-arrow-icon" /></div>
                <div className="af-class-right-arrow-top w-slider-arrow-right"><img src="images/arrow-right.svg" loading="lazy" alt className="af-class-arrow-icon" /></div>
                <div className="af-class-project-slide-nav w-slider-nav w-round" />
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

export default ServiceDetailView

/* eslint-enable */