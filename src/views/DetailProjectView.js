/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import { useParams, redirect } from 'react-router-dom';
import Projects from '../data/projects'


const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=63667a86befaedf883e34757").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]




const DetailProjectView = () => {
  
  function getProjectData() {
    // Get the project name from the URL
    const { id } = useParams();

    // Retrieve the project data from the JSON array
    const projectData = Projects.find(project => project.Link === id);
    console.log(projectData)
    
    
      return projectData;

    
  }
  const projectData = getProjectData();

  
  window.onload = function() {
    getProjectData();
  };

  const Controller = () => {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/DetailProjectController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = DetailProjectView

        return Controller
      }

      throw e
    }
  }
  Controller()

  const componentDidMount = () => {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '6377c735e0b2eff41c44a815'
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
              <a href="../about" className="af-class-nav-link w-nav-link">About</a>
              <a href="../projects" className="af-class-nav-link w-nav-link">Work</a>
              <a href="../service-detail" className="af-class-nav-link w-nav-link">Services</a>
              <a href="../contact" className="af-class-nav-link w-nav-link">Contact</a>
            </nav>
            <div className="af-class-nav-button w-nav-button">
              <div className="af-class-icon w-icon-nav-menu" />
            </div>
            <div className="af-class-div-block">
              <a href="/" className="af-class-brand w-nav-brand"><img src="../images/logo_1.svg" loading="lazy" data-w-id="a1e4a4fe-8958-4d97-d653-0e5ab1a1f9eb" alt className="af-class-image" />
                <div className="af-class-text-block">Solo</div>
                <div className="af-class-text-block-2">Architects</div>
              </a>
            </div>
          </div>
          {/* DYNAMIC CONTENT */}
          <div className="af-class-project-detail-section wf-section">
            <div className="af-class-container w-container"><img src={projectData.bigImageURL} loading="eager" alt="" className="af-class-image-3"/>
              <div className="w-layout-grid af-class-grid-project-info">
                <div id="w-node-_9007da63-f615-5910-edd0-685ad7ef3ee9-1c44a815" className="div-block-2">
                  <h1 className=".af-class-heading-2">{projectData.Name}</h1>
                </div>
                <div id="w-node-c39ad925-1d74-34c9-eedd-20b3523cc33b-1c44a815" className="af-class-project-info-right">
                  <div className="af-class-featured-list">
                    <div className="af-class-featured-list-item">
                      <div className="af-class-featured-list-title">Client: </div>
                      <div>{projectData.Client}</div>
                    </div>
                    <div className="af-class-featured-list-item">
                      <div className="af-class-featured-list-title">Location: </div>
                      <div>{projectData.Location}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-richtext"></div>
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
                    <a href="https://www.instagram.com/soloarchitects/" target="_blank" className="af-class-footer-social-link w-inline-block"><img src="../images/instagram-brands.svg" loading="lazy" alt className="af-class-footer-social-icon" /></a>
                    <a href="https://pinterest.com/soloarchitects" target="_blank" className="af-class-footer-social-link w-inline-block"><img src="../images/pinterest.svg" loading="lazy" alt className="af-class-footer-social-icon" /></a>
                    <a href="https://twitter.com/soloarchitects/" target="_blank" className="af-class-footer-social-link w-inline-block"><img src="../images/twitter.svg" loading="lazy" alt className="af-class-footer-social-icon" /></a>
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
                        <a href="../about" className="af-class-footer-link">About Us</a>
                      </li>
                      <li className="af-class-footer-link-item">
                        <a href="../projects" className="af-class-footer-link">Projects</a>
                      </li>
                      <li className="af-class-footer-link-item">
                        <a href="../contact" className="af-class-footer-link">Contact</a>
                      </li>
                    </ul>
                  </div>
                  <div className="af-class-footer-bottom">
                    <div className="af-class-footer-logo">
                      <a href="/" className="w-inline-block"><img src="../images/logo_1.svg" loading="lazy" width={100} height="Auto" alt className="af-class-image-2" /></a>
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


export default DetailProjectView

/* eslint-enable */