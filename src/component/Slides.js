import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import Slider from "react-slick";
import Img1 from '~/../../src/assets/images/slides/4.png';
import Img2 from '~/../../src/assets/images/whushu.png';
import Img3 from '~/../../src/assets/images/slides/1.png';
import Img4 from '~/../../src/assets/images/slides/2.png';
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import HomeUrl from '~/../../src/assets/images/home-border.png';
export default class Slides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideitems: [
        {
          id: 100,
          img: Img1,
          name: 'Féderation Tunisienne de Whushu Kung Fu',

          description: 'The European languages are members of the Same family Their separate existence is a myth For science, music, sport, etc, europe convals d feugiat egdgfet cursus tellus their languages common words.'
        },
        {
          id: 101,
          img: Img2,
          name: 'Le Whshu, un sport officiel des Jeux olympiques ',
          designation: '',
          description: ''
        },
        {
          id: 103,
          img: Img3,
          name: 'Un mode de vie sain pour les gens du monde entier',
          designation: 'Manager',
          description: 'The European languages are members of the Same family Their separate existence is a myth For science, music, sport, etc, europe convals d feugiat egdgfet cursus tellus their languages common words.'
        },
        // {
        //   id: 104,
        //   img: Img4,
        //   name: 'Margaret Lampley',
        //   designation: 'CEO',
        //   description: 'The European languages are members of the Same family Their separate existence is a myth For science, music, sport, etc, europe convals d feugiat egdgfet cursus tellus their languages common words.'
        // },
      ],
    };
  }
  render() {

    var slidesettings = {
  
      dots: true,
      speed: 300,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay:true,
      dotsClass: "slick-dots slick-thumb carousel-indicators",
      customPaging: function (i) {
        return (
          <img src={process.env.PUBLIC_URL + '/images/' + (i+1) +'.png'} alt="" className=" testi-img img-fluid rounded mx-auto d-block" />
        );
      },
    };

    const clientslides = this.state.slideitems.map((slideitem, clientkey) => {
      return (
        
        <React.Fragment  key={slideitem.id}>
      <section className="container" id="home">
               
              <Container>
                <Row className="align-items-center">
                  <Col lg={7}>
                    <div className="home-content">
                      <p className="mb-0"></p>
                      <img src={HomeUrl} height="15" alt="" />
                      <h1 className="home-title mt-4">{slideitem.name} </h1>
                      <p className="text-muted mt-4 f-20"></p>
                      <div className="mt-4 pt-2">
                        <Link to="#" className="btn btn-primary mr-3">Contacter nous</Link>{" "}
                        {/* <Link to="#" className="video-play-icon text-dark" onClick={this.openModal}><i className="mdi mdi-play-circle-outline text-dark mr-2"></i>Watch Intro Video</Link> */}
                      </div>
                    </div>
                  </Col>
                  <Col lg={5}>
                    <div className="home-img">
                      <div className="animation-1"></div>
                      <div className="animation-2"></div>

                      <div className="animation-3"></div>
                      <img src={slideitem.img} className="img-fluid" alt="" />

                    </div>
                  </Col>
                </Row>
              </Container>
            
            <ModalVideo
              channel="vimeo"
              isOpen={this.state.isOpen}
              videoId="99025203"
              onClose={() => this.setState({ isOpen: false })}
            />
         
        </section>
      </React.Fragment>
         
      );
    });

    return (
      <React.Fragment>
        <section className="section" id="clients">
          <Container>
            <Row className="mt-5 pt-4">
              <Col lg="12">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <Slider {...slidesettings}>
                      {clientslides}
                    </Slider>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
       
      </React.Fragment>
    );
  }
}
