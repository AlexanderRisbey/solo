/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import { Link } from "react-router-dom";

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=63667a86befaedf883e34757").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller


const IndexView = () => {
  
  const Controller = () => {
    if (Controller) return Controller
  
    try {
      Controller = require('..\controllers/IndexController')
      Controller = Controller.default || Controller
  
      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = IndexView
  
        return Controller
      }
  
      throw e
    }
  }
  Controller()
  
  const componentDidMount = () => {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '6377c735e0b2ef623b44a7c1'
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

        @media (min-width:992px) {html.w-mod-js:not(.w-mod-ix) [data-w-id=\"2762fbc3-1e80-8f4c-5001-048bcbdd9261\"] {display:none;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"55e9132b-3a8a-9edf-91f9-a0a614093a30\"] {display:none;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"a94c0481-ed6a-645f-0fdb-abe1055cb600\"] {-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}}
      ` }} />
      <span className="af-view">
        <div>
          <div data-w-id="a1e4a4fe-8958-4d97-d653-0e5ab1a1f9e9" data-animation="default" data-collapse="medium" data-duration={60} data-easing="linear" data-easing2="linear" role="banner" className="af-class-navbar w-nav">
            <nav role="navigation" className="af-class-nav-menu w-nav-menu">
              <a href="/" aria-current="page" className="af-class-nav-link w-nav-link w--current">Home</a>
              <a href="about" className="af-class-nav-link w-nav-link">About</a>
              <a href="projects" className="af-class-nav-link w-nav-link">Work</a>
              <a href="service-detail" className="af-class-nav-link w-nav-link">Services</a>
              <a href="contact" className="af-class-nav-link w-nav-link">Contact</a>
            </nav>
            <div className="af-class-nav-button w-nav-button">
              <div className="af-class-icon w-icon-nav-menu" />
            </div>
            <div className="af-class-div-block">
              <a href="/" aria-current="page" className="af-class-brand w-nav-brand w--current"><img src="images/logo_1.svg" loading="lazy" data-w-id="a1e4a4fe-8958-4d97-d653-0e5ab1a1f9eb" alt className="af-class-image" />
                <div className="af-class-text-block">Solo</div>
                <div className="af-class-text-block-2">Architects</div>
              </a>
            </div>
          </div>
          <div data-w-id="2b88efbc-a95a-4945-4975-155353eb2c89" className="af-class-hero-section af-class-wf-section">
            <div className="af-class-container w-container">
              <div className="af-class-hero-wrap">
                <div className="af-class-hero-heading-wrap">
                  <div className="af-class-hero-heading-overflow">
                    <h1 className="af-class-hero-heading">SOLO</h1>
                  </div>
                  <div className="af-class-decoration-shape"><img src="images/hero-decation-01.png" loading="lazy" alt className="af-class-heor-decoration-image" /></div>
                  <div className="af-class-hero-heading-overflow">
                    <h1 className="af-class-hero-heading-2">Architects</h1>
                  </div>
                </div>
                <div className="af-class-hero-image-wrap">
                  <div className="af-class-hero-image-block"><img src="images/logo.svg" loading="eager" alt className="af-class-hero-image-3" /><img src="images/logo_1.svg" loading="eager" alt className="af-class-hero-image-2" /><img src="images/hero-image.jpg" loading="eager" alt className="af-class-hero-image-1" /></div>
                  <div className="af-class-decoration-blur" />
                </div>
              </div>
            </div>
          </div>
          <div className="af-class-about-section af-class-section-spacing-bottom af-class-wf-section">
            <div className="af-class-container w-container">
              <div className="af-class-about-wrap">
                <p className="af-class-about-subtitle">We are solo architects</p>
                <h4 className="af-class-about-heading">"Anima magis est ubi amat, quam ubi animat."</h4><img src="images/hero-decation-02_1hero-decation-02.png" loading="lazy" alt className="af-class-about-shape-decoration" />
                <p>Solo Architects is an enterprise that was established in March 2020 in MIMAR SINAN UNVERSITY OF FINE ARTS. It firstly started it activities in Beyoğlu / Cihangir with more interior design works but also pursued projects in Van, Bursa, Yalova but mainly in Istanbul. Moreover Solo Architects has consulted to many projects about budget, construction, work safety, &nbsp;design, material, building management, application etc. and made periodic partnership with other construction and architecture firms in their project by taking charge of the quality control. The main goal of Solo Architects is to develop its clients project with its all capacity and the team.</p>
                <div className="af-class-about-links">
                  <a href="about" className="af-class-about-link-item w-inline-block">
                    <div>More about us</div>
                  </a>
                  <p className="af-class-about-link-divider">|</p>
                  <a href="projects" className="af-class-about-link-item w-inline-block">
                    <div>View our work</div>
                  </a>
                  <p className="af-class-about-link-divider">|</p>
                  <a href="contact" className="af-class-about-link-item w-inline-block">
                    <div>Contact us</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="af-class-expertise-section af-class-wf-section">
            <div className="w-layout-grid af-class-grid-expertise">
              <div id="w-node-ec9b35e8-76f3-60e5-616b-4d128dccc6af-3b44a7c1" className="af-class-expertise-item">
                <div className="af-class-expertise-hover"><img src="images/icon-1.svg" loading="lazy" alt className="af-class-expertise-icon" />
                  <h3 className="af-class-expertise-title">Architectural Services</h3>
                  <p className="af-class-expertise-description">We believe that the spaces humans inhabit provide much deeper value than simply shelter — they’re where we learn, explore, and become.</p>
                  <a href="service-detail" className="af-class-button-white af-class-expertise-button w-button">Read more</a>
                </div><img src="images/f163e0d2-eabf-4317-b1ed-78066c24a44b.JPG" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 45vw, (max-width: 991px) 31vw, (max-width: 1279px) 84vw, 98vw" srcSet="images/f163e0d2-eabf-4317-b1ed-78066c24a44b-p-500.jpg 500w, images/f163e0d2-eabf-4317-b1ed-78066c24a44b-p-800.jpg 800w, images/f163e0d2-eabf-4317-b1ed-78066c24a44b-p-1080.jpg 1080w, images/f163e0d2-eabf-4317-b1ed-78066c24a44b.JPG 1638w" alt className="af-class-expertise-image" />
                <div className="af-class-expertise-bg-color" />
              </div>
              <div id="w-node-d93c76f9-1255-5303-292e-65824790597b-3b44a7c1" className="af-class-expertise-item">
                <div className="af-class-expertise-hover"><img src="images/icon-2.svg" loading="lazy" alt className="af-class-expertise-icon" />
                  <h3 className="af-class-expertise-title">Interior Design<br />Services</h3>
                  <p className="af-class-expertise-description">We believe that the spaces humans inhabit provide much deeper value than simply shelter — they’re where we learn, explore, and become.</p>
                  <a href="service-detail" className="af-class-button-white af-class-expertise-button w-button">Read more</a>
                </div><img src="images/Niyama-Mutfak-copy.jpg" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 45vw, (max-width: 991px) 31vw, (max-width: 1279px) 84vw, 98vw" srcSet="images/Niyama-Mutfak-copy-p-500.jpg 500w, images/Niyama-Mutfak-copy-p-800.jpg 800w, images/Niyama-Mutfak-copy-p-1080.jpg 1080w, images/Niyama-Mutfak-copy.jpg 1920w" alt className="af-class-expertise-image" />
                <div className="af-class-expertise-bg-color" />
              </div>
              <div id="w-node-_1a94cc3d-0a50-dd19-93cd-58b480c0213d-3b44a7c1" className="af-class-expertise-item">
                <div className="af-class-expertise-hover"><img src="images/icon-3.svg" loading="lazy" alt className="af-class-expertise-icon" />
                  <h3 className="af-class-expertise-title">Landscaping<br />Services</h3>
                  <p className="af-class-expertise-description">We believe that the spaces humans inhabit provide much deeper value than simply shelter — they’re where we learn, explore, and become.</p>
                  <a href="service-detail" className="af-class-button-white af-class-expertise-button w-button">Read more</a>
                </div><img src="images/IMG_8756.jpg" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 45vw, (max-width: 991px) 31vw, (max-width: 1279px) 84vw, 98vw" srcSet="images/IMG_8756-p-500.jpg 500w, images/IMG_8756-p-800.jpg 800w, images/IMG_8756-p-1080.jpg 1080w, images/IMG_8756-p-1600.jpg 1600w, images/IMG_8756-p-2000.jpg 2000w, images/IMG_8756.jpg 3024w" alt className="af-class-expertise-image" />
                <div className="af-class-expertise-bg-color" />
              </div>
            </div>
          </div>
          <div className="af-class-tiny-section af-class-wf-section">
            <a href="https://solo-architects.webflow.io/project/solo-tiny/" className="af-class-link-block w-inline-block">
              <div className="af-class-hero-heading-wrap">
                <div className="af-class-hero-heading-overflow">
                  <h1 className="af-class-hero-heading">SOLO</h1>
                </div>
                <div className="af-class-hero-heading-overflow">
                  <h1 className="af-class-hero-heading-2">Tiny</h1>
                </div>
              </div>
            </a>
            <a href="/project/solo-tiny" id="w-node-_2a8d0037-3b89-8450-aeb4-17b2e830d0f9-3b44a7c1" className="af-class-link">More Info &gt;</a>
          </div>
          <div className="af-class-section-spacing-copy af-class-wf-section">
            <h1 className="af-class-heading-3">Our Work </h1>
            <div className="af-class-container-full w-container">
              <div className="af-class-collection-list-wrapper-2 w-dyn-list">
                <div id="w-node-b9900002-69f7-90fd-41ba-4d27b109fcb4-3b44a7c1" role="list" className="af-class-project-masonry-column-3 w-dyn-items w-row">
                  <div role="listitem" className="af-class-collection-item-2 w-dyn-item w-col w-col-6">
                    <a href="#" className="af-class-project-masonry-item w-inline-block">
                      <div className="af-class-project-masonry-image-wrap"><img src loading="lazy" alt className="af-class-project-masonry-image" /></div>
                      <div className="af-class-project-masonry-info">
                        <div className="af-class-project-masonry-title" />
                        <div className="af-class-text-block-3" />
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
          <div className="af-class-container w-container">
            <h1 className="af-class-heading-3">Our Work </h1>
            <div className="af-class-collection-list-wrapper-3 w-dyn-list">
              <div role="list" className="af-class-project-grid w-dyn-items">
                <div id="w-node-e0218e6c-b19a-58be-dbb1-e24fc1c375c9-3b44a7c1" role="listitem" className="af-class-collection-item-3 w-dyn-item">
                  <a href="#" className="af-class-project-grid-item w-inline-block">
                    <div data-w-id="e0218e6c-b19a-58be-dbb1-e24fc1c375cb" className="af-class-project-grid-info-copy"><img src loading="lazy" alt className="af-class-project-grid-image-copy af-class-project-grid-image-page-copy" />
                      <div className="af-class-project-view-circle">View</div>
                    </div>
                    <div className="af-class-div-block-3">
                      <div className="af-class-project-grid-category" />
                       <h4 className="af-class-project-grid-title-copy" />
                      <p className="af-class-project-grid-content" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="af-class-empty-state w-dyn-empty">
                <div>No items found.</div>
              </div>
            </div>
          </div>
          <div className="af-class-hero-split-section af-class-wf-section">
            <div className="af-class-hero-split-image-wrap"><img src="images/office_evening.jpg" loading="eager" sizes="100vw" srcSet="images/office_evening-p-500.jpg 500w, images/office_evening-p-800.jpg 800w, images/office_evening-p-1080.jpg 1080w, images/office_evening.jpg 1392w" alt className="af-class-hero-split-image" />
              <div className="af-class-hero-split-bg" />
            </div>
            <div className="af-class-container w-container">
              <div className="w-layout-grid af-class-grid-about-split">
                <h2 id="w-node-cb0bfa80-ce5a-1e0c-e574-7b1a93dfa5f8-3b44a7c1" className="af-class-heading">About Us</h2>
                <div id="w-node-cb0bfa80-ce5a-1e0c-e574-7b1a93dfa5fc-3b44a7c1">
                  <p className="af-class-paragraph">Solo Architects is an enterprise that was established in March 2020 in MIMAR SINAN UNVERSITY OF FINE ARTS. It firstly started it activities in Beyoğlu / Cihangir with more interior design works but also pursued projects in Van, Bursa, Yalova but mainly in Istanbul. Moreover Solo Architects has consulted to many projects about budget, construction, work safety, &nbsp;design, material, building management, application etc. and made periodic partnership with other construction and architecture firms in their project by taking charge of the quality control. The main goal of Solo Architects is to develop its clients project with its all capacity and the team.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="af-class-team-section af-class-section-spacing af-class-wf-section">
            <div className="af-class-container w-container">
              <h2>Meet the artists</h2>
              <div className="w-dyn-list">
                <div role="list" className="af-class-team-list w-dyn-items">
                  <div role="listitem" className="w-dyn-item">
                    <a data-w-id="a94c0481-ed6a-645f-0fdb-abe1055cb5ff" href="#" className="af-class-team-item w-inline-block"><img src loading="eager" data-w-id="a94c0481-ed6a-645f-0fdb-abe1055cb600" alt className="af-class-team-image" />
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
          <div className="af-class-projects-section af-class-section-spacing af-class-wf-section">
            <div className="af-class-container w-container">
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="af-class-project-reveal-wrap w-dyn-item">
                    <a data-w-id="73feaed1-1b14-3276-be34-effae9fa02b2" href="#" className="af-class-project-reveal-item w-inline-block">
                      <h2 className="af-class-project-reveal-title" /><img src loading="eager" data-w-id="2762fbc3-1e80-8f4c-5001-048bcbdd9261" alt className="af-class-project-reveal-thumbnail" /><img src loading="eager" data-w-id="55e9132b-3a8a-9edf-91f9-a0a614093a30" alt className="af-class-project-reveal-thumbnail-secondary" />
                    </a>
                  </div>
                </div>
                <div className="af-class-empty-state w-dyn-empty">
                  <div>No items found.</div>
                </div>
              </div>
              <div className="af-class-project-button">
                <a data-w-id="06c4952a-d8c9-395e-5b52-f8e3e49485d3" href="projects" className="af-class-button-link w-inline-block">
                  <div style={{width: 0}} className="af-class-button-link-line-hover" />
                  <div className="af-class-button-link-line" />
                  <div>View all projects</div>
                </a>
              </div>
            </div>
          </div>
          <div data-w-id="cba28d2e-f48a-787d-28c8-a8d07cc23e83" className="af-class-video-bg-section af-class-wf-section">
            <a href="#" className="af-class-video-lightbox w-inline-block w-lightbox">
              <h2 className="af-class-play-video-text">Play</h2>
            </a>
            <p className="af-class-video-description">They’re where we learn, <br />explore, and become.</p>
          </div>
          <div className="af-class-testimonial-section af-class-section-spacing af-class-wf-section">
            <div className="af-class-testimonial-sticky">
              <div className="af-class-container w-container">
                <div data-delay={4000} data-animation="slide" className="af-class-testimonial-slider w-slider" data-autoplay="true" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit={0} data-nav-spacing={3} data-duration={500} data-infinite="true">
                  <div className="w-slider-mask">
                    <div className="af-class-slide w-slide">
                      <div className="af-class-testimonial-item"><img src="images/avatar_1avatar.jpg" loading="lazy" alt className="af-class-testimonial-client" />
                        <h5 className="af-class-testimonial-content">I like archiex more and more each day because it makes my life a lot easier.</h5>
                        <p className="af-class-testimonial-client-name">Jack F, Phoenix</p>
                      </div>
                    </div>
                    <div className="w-slide">
                      <div className="af-class-testimonial-item"><img src="images/avatar-2_1avatar-2.jpg" loading="lazy" alt className="af-class-testimonial-client" />
                        <h5 className="af-class-testimonial-content">It's incredible. Archiex is both attractive and highly adaptable</h5>
                        <p className="af-class-testimonial-client-name">Joan Wallace, Google</p>
                      </div>
                    </div>
                  </div>
                  <div className="af-class-left-arrow-top-testimonial w-slider-arrow-left"><img src="images/arrow-left-primary.svg" loading="lazy" alt className="af-class-arrow-icon" /></div>
                  <div className="af-class-right-arrow-top-testimonial w-slider-arrow-right"><img src="images/arrow-right.svg" loading="lazy" alt className="af-class-arrow-icon" /></div>
                  <div className="af-class-hide w-slider-nav w-round w-num" />
                </div>
              </div>
            </div>
            <div data-w-id="7991295d-7020-d417-4c03-b342682f9717" className="af-class-gallery-1"><img src="images/gallery-01.jpg" loading="lazy" sizes="100vw" srcSet="images/gallery-01-p-500.jpeg 500w, images/gallery-01.jpg 692w" alt /></div>
            <div data-w-id="d43ffb1c-afac-7aa4-443e-ceb3bcba495d" className="af-class-gallery-2">
              <div data-poster-url="https://uploads-ssl.webflow.com/624411a161dbba153b79c135/624579fe8294a12c3de435ee_video-poster-00001.jpg" data-video-urls="videos/video-transcode.mp4,videos/video-transcode.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true" data-beta-bgvideo-upgrade="false" className="w-background-video w-background-video-atom"><video id="4df30f59-e840-798a-2d6f-61018ee12f29-video" autoPlay loop style={{backgroundImage: 'url("https://uploads-ssl.webflow.com/624411a161dbba153b79c135/624579fe8294a12c3de435ee_video-poster-00001.jpg")'}} muted playsInline data-wf-ignore="true" data-object-fit="cover">
                  <source src="videos/video-transcode.mp4" data-wf-ignore="true" />
                  <source src="videos/video-transcode.webm" data-wf-ignore="true" />
                </video></div>
            </div>
            <div data-w-id="b8ef9405-97fa-f788-03c8-496eec9fd416" className="af-class-gallery-3"><img src="images/gallery-03.jpg" loading="lazy" alt className="af-class-gallery-image-round" /></div>
            <div data-w-id="0ee4bbe4-4af5-5378-0fdb-95ff6b3da626" className="af-class-gallery-4"><img src="images/gallery-04.jpg" loading="lazy" alt /></div>
            <div data-w-id="9bd8de1d-5982-e706-ee74-c202633f59cd" className="af-class-gallery-5"><img src="images/gallery-05.jpg" loading="lazy" alt /></div>
          </div>
          <div className="af-class-blog-section af-class-section-spacing af-class-wf-section">
            <div className="af-class-container w-container">
              <div className="w-layout-grid af-class-grid-blog">
                <div id="w-node-e12c22f4-3275-7b59-b991-b05a2f31cf27-3b44a7c1" className="af-class-blog-title-wrap">
                  <h2>Latest Articles</h2>
                  <a data-w-id="c446bb48-537f-f74e-610e-a3d5fd088432" href="journal" className="af-class-button-link af-class-blog-button w-inline-block">
                    <div style={{width: 0}} className="af-class-button-link-line-hover" />
                    <div className="af-class-button-link-line" />
                    <div>View All Articles</div>
                  </a>
                </div>
                <div id="w-node-_1d9a2165-f8f9-0a9a-2383-2fc357d3a2a5-3b44a7c1">
                  <div className="w-dyn-list">
                    <div role="list" className="af-class-collection-list w-dyn-items">
                      <div role="listitem" className="af-class-blog-reveal-item w-dyn-item">
                        <a data-w-id="c8f52b33-7d62-fba1-de8b-dd968ad98730" href="#" className="af-class-blog-reveal-link w-inline-block">
                          <div className="af-class-blog-reveal-info">
                            <h6 className="af-class-blog-reveal-title" />
                            <h4 className="af-class-blog-reveal-date" />
                            <div className="af-class-blog-reveal-view-circle">View</div>
                          </div><img src loading="lazy" style={{WebkitTransform: 'translate3d(0, 0, 0) scale3d(1.3, 1.3, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 0, 0) scale3d(1.3, 1.3, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 0, 0) scale3d(1.3, 1.3, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 0, 0) scale3d(1.3, 1.3, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} alt className="af-class-blog-reveal-image" />
                          <div style={{width: '100%', height: '100%'}} className="af-class-blog-reveal-bg-color" />
                          <div className="af-class-blog-bg-color-overlay" />
                        </a>
                      </div>
                    </div>
                    <div className="af-class-empty-state w-dyn-empty">
                      <div>No items found.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="af-class-newsletter-section af-class-wf-section">
            <div className="af-class-container w-container">
              <div className="af-class-newsletter-wrap">
                <div className="w-layout-grid af-class-grid-newsletter">
                  <div id="w-node-fdc57d25-621f-fd68-b5dc-57d18a600c85-3b44a7c1">
                    <h4 className="af-class-text-white">Know about upcoming projects, news and more.</h4>
                  </div>
                  <div id="w-node-_1abfc1b8-65b5-a103-5e7f-0e1b72bd8ea5-3b44a7c1">
                    <div className="af-class-subscribe-form w-form">
                      <form id="wf-form-Subscribe-Form" name="wf-form-Subscribe-Form-3" data-name="Subscribe Form" method="get" className="af-class-subscribe-form-inputs"><input type="email" className="af-class-form-input af-class-form-input-newsletter w-input" maxLength={256} name="Subscribe-Email-Footer" data-name="Subscribe Email Footer" placeholder="Enter your email" id="Subscribe-Email-Footer" required /><input type="submit" defaultValue="Subscribe!" data-wait="Please wait..." className="af-class-button af-class-button-subscribe w-button" /></form>
                      <div className="af-class-success-message w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="af-class-error-message w-form-fail">
                        <div>Oops! Something went wrong while submitting the form.</div>
                      </div>
                    </div>
                  </div>
                </div><img src="images/Niyama-Mutfak-copy.jpg" loading="eager" srcSet="images/Niyama-Mutfak-copy-p-500.jpg 500w, images/Niyama-Mutfak-copy-p-800.jpg 800w, images/Niyama-Mutfak-copy-p-1080.jpg 1080w, images/Niyama-Mutfak-copy.jpg 1920w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 97vw, (max-width: 1279px) 98vw, 99vw" alt className="af-class-newsletter-bg" />
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
                        <a href="/" aria-current="page" className="af-class-footer-link w--current">Home</a>
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
                      <a href="/" aria-current="page" className="w-inline-block w--current"><img src="images/logo_1.svg" loading="lazy" width={100} height="Auto" alt className="af-class-image-2" /></a>
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

export default IndexView

/* eslint-enable */