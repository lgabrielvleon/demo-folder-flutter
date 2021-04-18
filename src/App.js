import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/dist/collapse'
import {faGuilded} from '@fortawesome/free-brands-svg-icons'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import principalImage from './assets/images/principal_image.png'

function App() {
  
  const onOverMouse = () => {
    var brandName = document.getElementById('brand-name')
    brandName.classList.remove('invisible')
  }
  
  const onSetoutMouse = () => {
    var brandName = document.getElementById('brand-name')
    brandName.classList.remove('invisible') 
  }

  
  return (
    <>
      <div className="background-page">
        <div className="color1"></div>
        <div className="color2"></div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark nav-custom fixed-top">
        <div className="container">
          <a id="brand-logo" href="#!" className="navbar-brand" onMouseOver={onOverMouse} onMouseOut={onSetoutMouse}><FontAwesomeIcon icon={faGuilded}/></a>
          <div className="d-flex align-items-center">
            <div id="brand-name" className="custom-brand-name">
              <h1 className="brand-heading mb-0">Gabriel Vasquez</h1>
              <p className="brand-subheading text-center mb-0">Developer</p>
            </div>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#!" className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a href="#!" className="nav-link">About Me</a>
              </li>
              <li className="nav-item">
                <a href="#!" className="nav-link">Skills</a>
              </li>
              <li className="nav-item">
                <a href="#!" className="nav-link">Projects</a>
              </li>
              <li className="nav-item">
                <a href="#!" className="nav-link">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="section-principal">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-2">
              <div className="p-4">
                <img className="img-fluid custom-img" src={principalImage} alt=""/>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <div className="p-4 border-start border-white border-5">
                <h1 className="display-3 principal-heading">Hello, <br/>I'm <span>Gabriel</span> !</h1>
                <p className="principal-subheading mb-1">Fullstack Developer</p>
                <p className="principal-subheading mb-4">Integration Developer</p>
                <button type="button" className="btn btn-primary custom-btn">Hire me!</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
