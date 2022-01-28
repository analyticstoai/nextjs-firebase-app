import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useAuthentication } from "../hooks/authentication";
import Link from "next/link";
import { useEffect } from "react";
import Slider from "react-slick";

declare global {
  interface Window {
    jQuery: any;
    AceMenu: any;
    Slick: any;
  }
}

export default function Home() {
  const { user } = useAuthentication();
  useEffect(() => {
    window.jQuery = require('../public/js/jquery.min.js');
    window.AceMenu = require('../public/js/ace-responsive-menu.js');

    window.jQuery("#respMenu").aceResponsiveMenu({
      resizeWidth: '999', // Set the same in Media query
      animationSpeed: 'fast', //slow, medium, fast
      accoridonExpAll: false //Expands all the accordion menu on click
    });
    window.jQuery().scroll(function () {
      if (window.jQuery(this).scrollTop() > 120) {
        window.jQuery('.header').addClass('fixed');
      } else {
        window.jQuery('.header').removeClass('fixed');
      }
    });
  }, []);
  const customerLogoSetting = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 2
        }
    }, {
        breakpoint: 520,
        settings: {
            slidesToShow: 2
        }},
  {
        breakpoint: 400,
        settings: {
            slidesToShow: 1
        }
    }]
};
  return (
    <>
      <div className="header fixed">
        <div className="container-fluid position-relative">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-8 col-8">
              <div id="logo"><img src="/images/sr_03.png" className="img-fluid" alt="" /></div>
              <div id="logo_small"><img src="/images/logo_small.png" className="img-fluid" alt="" /></div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-4 col-4">
              <div className="menu_area float-end">
                <div className="menu float-start">

                  <div className="navrow">
                    <nav className="mainNav">

                      <div className="menu-toggle">
                        <button type="button" id="menu-btn"> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
                      </div>
                      <ul id="respMenu" className="ace-responsive-menu" data-menu-style="horizontal">
                        <li> <a href="javascript:;" className="nav-item active"> <span className="title">Home</span> </a> </li>
                        <li> <a href="javascript:;"> <span className="title">Courses</span><span className="arrow"></span> </a>
                          <ul>
                            <li> <a href="javascript:;"> <span className="title">Machine Learning with Python</span><span className="arrow"></span></a>
                              <ul>
                                <li> <a href="#">Machine Learning with Python </a> </li>
                                <li> <a href="#">Sub Courses</a> </li>
                                <li> <a href="#">Sub Courses</a> </li>
                                <li> <a href="#">Sub Courses</a> </li>
                              </ul>
                            </li>
                            <li> <a href="javascript:;"> <span className="title">Machine Learning with Python</span><span className="arrow"></span></a>

                              <ul>
                                <li> <a href="#">Machine Learning with Python </a> </li>
                                <li> <a href="#">Sub Courses</a> </li>
                                <li> <a href="#">Sub Courses</a> </li>
                                <li> <a href="#">Sub Courses</a> </li>
                              </ul>

                            </li>
                            <li> <a href="javascript:;"> <span className="title">Machine Learning with Python</span><span className="arrow"></span></a>

                              <ul>
                                <li> <a href="#">Machine Learning with Python </a> </li>
                                <li> <a href="#">Sub Courses</a> </li>
                                <li> <a href="#">Sub Courses</a> </li>
                                <li> <a href="#">Sub Courses</a> </li>
                              </ul>


                            </li>
                            <li>  <a href="javascript:;"> <span className="title">Machine Learning with Python</span><span className="arrow"></span></a>

                              <ul>
                                <li> <a href="#">Machine Learning with Python </a> </li>
                                <li> <a href="#">Sub Courses</a> </li>
                                <li> <a href="#">Sub Courses</a> </li>
                                <li> <a href="#">Sub Courses</a> </li>
                              </ul>
                            </li>

                          </ul>
                        </li>
                        <li> <a href="javascript:;"> <span className="title">Solutions</span> </a> </li>
                        <li className="last "> <a href="javascript:;"> <span className="title">Contact Us</span> </a> </li>
                      </ul>
                    </nav>

                  </div>
                </div>
                <button type="button" className="btn btn-primary reg_btn float-start">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="slider_bg position-relative"> <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev"> <span className="carousel-control-prev-icon" aria-hidden="true"></span> <span className="sr-only">Previous</span> </a>
          <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next"> <span className="carousel-control-next-icon" aria-hidden="true"></span> <span className="sr-only">Next</span> </a>
          <div className="container-fluid">
            <div className="row">
              <div id="carouselExample" className="carousel carousel-fade" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExample" data-slide-to="0" className="active">
                    <button type="button" className="btn cources_btn float-start">For Individual</button>
                  </li>
                  <li data-target="#carouselExample" data-slide-to="1">
                    <button type="button" className="btn cources_btn float-start">For Enterprise</button>
                  </li>
                  <li data-target="#carouselExample" data-slide-to="2">
                    <button type="button" className="btn cources_btn float-start">For Institute</button>
                  </li>
                </ol>

                <div className="carousel-inner">
                  <div className="carousel-item fadeIn animated active">
                    <div className="slider_content">
                      <div className="row">
                        <div className="col-lg-7 col-md-12">
                          <h1 className="text-white pb-2 display-4">UpSkill your career with cutting edge technologies</h1>
                          <p className="text-white intro_font pb-2">Choose from multiples advanced online courses and get a chance to meet industry experts with more than 15 years of experience.</p>
                          <h3 className="text-white pb-3">100% Job Guarantee Program</h3>
                        </div>
                        <div className="col-lg-5 col-sm-12">
                          <div className="info_img"><img src="/images/sr_07.png" alt="" /></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item fadeIn animated">
                    <div className="slider_content">
                      <div className="row">
                        <div className="col-lg-7 col-md-12">
                          <h1 className="text-white pb-2 display-4 display-4">UpSkill your career with cutting edge technologies</h1>
                          <p className="text-white pb-2 intro_font">Choose from multiples advanced online courses and get a chance to meet industry experts with more than 15 years of experience.</p>
                          <h3 className="text-white pb-3">100% Job Guarantee Program</h3>
                        </div>
                        <div className="col-lg-5 col-sm-12">
                          <div className="info_img"><img src="/images/sr_08.png" alt="" /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item fadeIn animated">
                    <div className="slider_content">
                      <div className="row">
                        <div className="col-lg-7 col-md-12">
                          <h1 className="text-white pb-2 display-4 ">UpSkill your career with cutting edge technologies</h1>
                          <p className="text-white pb-2 intro_font">Choose from multiples advanced online courses and get a chance to meet industry experts with more than 15 years of experience.</p>
                          <h3 className="text-white pb-3">100% Job Guarantee Program</h3>
                        </div>
                        <div className="col-lg-5 col-sm-12">
                          <div className="info_img"><img src="/images/sr_09.png" alt="" /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-7 fadeIn animated">
                <div className="homepage_heading">About Us</div>
                <div className="sub_heading_aboutus">Unlimited Learning</div>
                <p>Learning is a never ending process. We believe in the same and we are proud to be a part of this process. We are a team of motivated individuals and our aim is to equip job seekers with the accepted skillset required to establish in the current market.</p>
                <a href="#" className="text-primary">readmore..</a> </div>
              <div className="col-lg-5 fadeIn animated">
                <div className="contact_image"><img src="/images/sr_11.png" alt="" /></div>
              </div>
            </div>
          </div>
        </div>


        <div className="section">
          <div className="container-fluid">
            <div className="homepage_heading">Why Squareroot Learning</div>
            <div className="row mt-3 pb-5">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="learning_area fadeInDown animatable delay1">
                  <ul className="learning_point">
                    <li><i className="fa fa-graduation-cap" aria-hidden="true"></i> 100% Job Guarantee Program.</li>
                    <li><i className="fa fa-graduation-cap" aria-hidden="true"></i>24*7 Support.</li>
                    <li><i className="fa fa-graduation-cap" aria-hidden="true"></i>Life Time Access of Materials. </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="learning_area fadeInDown animatable delay2">
                  <ul className="learning_point">
                    <li><i className="fa fa-graduation-cap" aria-hidden="true"></i>Mock Interviews.</li>
                    <li><i className="fa fa-graduation-cap" aria-hidden="true"></i>Career Counselling.</li>
                    <li><i className="fa fa-graduation-cap" aria-hidden="true"></i>100% Job Guarantee Program.</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="learning_area fadeInDown animatable delay3">
                  <ul className="learning_point">
                    <li><i className="fa fa-graduation-cap" aria-hidden="true"></i>2 Weeks Live Workshop.</li>
                    <li><i className="fa fa-graduation-cap" aria-hidden="true"></i>Resume Building Support.</li>
                    <li><i className="fa fa-graduation-cap" aria-hidden="true"></i>Live Online Session.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sub_heading_technologies text-center">Technologies</div>
        <div className="bottom_section">
          <div className="container-fluid">
            <div className="technologies_ticker">
              <div className="row">

                  <Slider className="customer-logos slider" {...customerLogoSetting}>
                    <div className="slide"> <img src="/images/azure-1.png" alt="" />Azure ML </div>
                    <div className="slide"> <img src="/images/azure-storage-blob--v1.png" alt="" />Blob Storage </div>
                    <div className="slide"> <img src="/images/external-ai-artificial-intelligence-kiranshastry-gradient-kiranshastry-2.png" alt="" />Artificial Intelligence </div>
                    <div className="slide"> <img src="/images/external-natural-language-processing-artificial-intelligence-becris-lineal-color-becris.png" alt="" />NLP </div>
                    <div className="slide"> <img src="/images/python--v1.png" alt="" />Python </div>
                  </Slider>

              </div>
            </div>
            <div className="contact_area fadeInDown animatable">
              <div className="heading_contactus text-center">Contact Us</div>
              <ul>
                <li> <i className="fa fa-phone-square" aria-hidden="true"></i> +91 8708728257, +91 9588763511 </li>
                <li> <i className="fa fa-envelope" aria-hidden="true"></i> hr@squarerootz.com </li>
              </ul>
              <div className="social_media">
                <ul>
                  <li><a href="#"></a><i className="fa fa-facebook-official" aria-hidden="true"></i></li>
                  <li><a href="#"></a><i className="fa fa-twitter-square" aria-hidden="true"></i></li>
                  <li><a href="#"></a><i className="fa fa-google-plus-square" aria-hidden="true"></i></li>
                  <li><a href="#"></a><i className="fa fa-linkedin-square" aria-hidden="true"></i></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div >
      <a id="scroll-top" href="#top" style={{ display: "block" }}> <img src="/images/gotop_btn.png" alt="" /> </a>
      <div className="footer">© Squareroot Learning Pvt. Ltd. || Gst number: 09ABGCS2685F1Z1</div>
      {/* <script type="text/jscript" src="js/index.js"></script> */}
    </>
  );
}
