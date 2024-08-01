export default function About(){
    return(
<>
<div>
  <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div className="container">
      <a className="navbar-brand" href="index.html">Car<span>Book</span></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="oi oi-menu" /> Menu
      </button>
      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item"><a href="index.html" className="nav-link">Home</a></li>
          <li className="nav-item active"><a href="about.html" className="nav-link">About</a></li>
          <li className="nav-item"><a href="services.html" className="nav-link">Services</a></li>
          <li className="nav-item"><a href="pricing.html" className="nav-link">Pricing</a></li>
          <li className="nav-item"><a href="car.html" className="nav-link">Cars</a></li>
          <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
          <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
  <section className="hero-wrap hero-wrap-2 js-fullheight" style={{backgroundImage: 'url("src/images/bg_3.jpg")'}} data-stellar-background-ratio="0.5">
    <div className="overlay" />
    <div className="container">
      <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
        <div className="col-md-9 ftco-animate pb-5">
          <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i className="ion-ios-arrow-forward" /></a></span> <span>About us <i className="ion-ios-arrow-forward" /></span></p>
          <h1 className="mb-3 bread">About Us</h1>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section ftco-about">
    <div className="container">
      <div className="row no-gutters">
        <div className="col-md-6 p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(src/images/about.jpg)'}}>
        </div>
        <div className="col-md-6 wrap-about ftco-animate">
          <div className="heading-section heading-section-white pl-md-5">
            <span className="subheading">About us</span>
            <h2 className="mb-4">Welcome to Carbook</h2>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <p><a href="#" className="btn btn-primary py-3 px-4">Search Vehicle</a></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section ftco-intro" style={{backgroundImage: 'url(src/images/bg_3.jpg)'}}>
    <div className="overlay" />
    <div className="container">
      <div className="row justify-content-end">
        <div className="col-md-6 heading-section heading-section-white ftco-animate">
          <h2 className="mb-3">Do You Want To Earn With Us? So Don't Be Late.</h2>
          <a href="#" className="btn btn-primary btn-lg">Become A Driver</a>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section testimony-section bg-light">
    <div className="container">
      <div className="row justify-content-center mb-5">
        <div className="col-md-7 text-center heading-section ftco-animate">
          <span className="subheading">Testimonial</span>
          <h2 className="mb-3">Happy Clients</h2>
        </div>
      </div>
      <div className="row ftco-animate">
        <div className="col-md-12">
          <div className="carousel-testimony owl-carousel ftco-owl">
            <div className="item">
              <div className="testimony-wrap rounded text-center py-4 pb-5">
                <div className="user-img mb-2" style={{backgroundImage: 'url(src/images/person_1.jpg)'}}>
                </div>
                <div className="text pt-4">
                  <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <p className="name">Roger Scott</p>
                  <span className="position">Marketing Manager</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap rounded text-center py-4 pb-5">
                <div className="user-img mb-2" style={{backgroundImage: 'url(src/images/person_2.jpg)'}}>
                </div>
                <div className="text pt-4">
                  <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <p className="name">Roger Scott</p>
                  <span className="position">Interface Designer</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap rounded text-center py-4 pb-5">
                <div className="user-img mb-2" style={{backgroundImage: 'url(src/images/person_3.jpg)'}}>
                </div>
                <div className="text pt-4">
                  <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <p className="name">Roger Scott</p>
                  <span className="position">UI Designer</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap rounded text-center py-4 pb-5">
                <div className="user-img mb-2" style={{backgroundImage: 'url(src/images/person_1.jpg)'}}>
                </div>
                <div className="text pt-4">
                  <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <p className="name">Roger Scott</p>
                  <span className="position">Web Developer</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap rounded text-center py-4 pb-5">
                <div className="user-img mb-2" style={{backgroundImage: 'url(src/images/person_1.jpg)'}}>
                </div>
                <div className="text pt-4">
                  <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <p className="name">Roger Scott</p>
                  <span className="position">System Analyst</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-counter ftco-section img" id="section-counter">
    <div className="overlay" />
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
          <div className="block-18">
            <div className="text text-border d-flex align-items-center">
              <strong className="number" data-number={60}>0</strong>
              <span>Year <br />Experienced</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
          <div className="block-18">
            <div className="text text-border d-flex align-items-center">
              <strong className="number" data-number={1090}>0</strong>
              <span>Total <br />Cars</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
          <div className="block-18">
            <div className="text text-border d-flex align-items-center">
              <strong className="number" data-number={2590}>0</strong>
              <span>Happy <br />Customers</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
          <div className="block-18">
            <div className="text d-flex align-items-center">
              <strong className="number" data-number={67}>0</strong>
              <span>Total <br />Branches</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>	
  <footer className="ftco-footer ftco-bg-dark ftco-section">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2"><a href="#" className="logo">Car<span>book</span></a></h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
              <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
              <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
              <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
            </ul>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4 ml-md-5">
            <h2 className="ftco-heading-2">Information</h2>
            <ul className="list-unstyled">
              <li><a href="#" className="py-2 d-block">About</a></li>
              <li><a href="#" className="py-2 d-block">Services</a></li>
              <li><a href="#" className="py-2 d-block">Term and Conditions</a></li>
              <li><a href="#" className="py-2 d-block">Best Price Guarantee</a></li>
              <li><a href="#" className="py-2 d-block">Privacy &amp; Cookies Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Customer Support</h2>
            <ul className="list-unstyled">
              <li><a href="#" className="py-2 d-block">FAQ</a></li>
              <li><a href="#" className="py-2 d-block">Payment Option</a></li>
              <li><a href="#" className="py-2 d-block">Booking Tips</a></li>
              <li><a href="#" className="py-2 d-block">How it works</a></li>
              <li><a href="#" className="py-2 d-block">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Have a Questions?</h2>
            <div className="block-23 mb-3">
              <ul>
                <li><span className="icon icon-map-marker" /><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                <li><a href="#"><span className="icon icon-phone" /><span className="text">+2 392 3929 210</span></a></li>
                <li><a href="#"><span className="icon icon-envelope" /><span className="text">info@yourdomain.com</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <p>
            Copyright © All rights reserved | This template is made with <i className="icon-heart color-danger" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
  <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx={24} cy={24} r={22} fill="none" strokeWidth={4} stroke="#eeeeee" /><circle className="path" cx={24} cy={24} r={22} fill="none" strokeWidth={4} strokeMiterlimit={10} stroke="#F96D00" /></svg></div>
</div>

</>
    );
}