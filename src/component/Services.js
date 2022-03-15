import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CountUp from 'react-countup';

import { Link } from "react-router-dom";
import HomeUrl from '../assets/images/home-border.png';
import Img1 from '~/../../src/assets/images/slides/5.png';

export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          id: 'service1',
          icon: 'mdi-check',
          title: "Kung Fu",
          description: "Kung fu est un mot en chinois qui se traduit grossièrement par des compétences acquises avec du temps et des efforts. Ainsi, dans la société chinoise, ce mot pouvait être utilisé non seulement pour désigner un pratiquant d'art martial, mais aussi pour désigner des personnes possédant des compétences différentes"
        },
        {
          id: 'service2',
          icon: 'mdi-check',
          title: "Whushu",
          description: 'Le wushu est également un sport de contact pratiqué au niveau international. Le wushu est l expression mise en avant par les autorités chinoises depuis le début du mouvement de réforme chinois. Le wushu est devenu un sport contemporain que les Chinois tentent d inclure dans les Jeux olympiques d été.'
        },
        {
          id: 'service3',
          icon: 'mdi-check',
          title: "Kung fu et Whushu",
          description: 'Kung fu et Wushu sont des termes qui ont été utilisés pour décrire les arts martiaux chinois. Wushu signifie littéralement "arts martiaux", tandis que Kung fu désigne des compétences acquises avec du temps et des efforts.'
        },
      ],
      counters: [
        {
          id: '1',
          extraclass: '',
          start: 25,
          end: 49,
          title: "Employees",
          description: 'Aliquam egestas vehicula sapien cibus sit amet rutrum dolor molestie.'
        },
        {
          id: '2',
          extraclass: 'pt-3',
          start: 25,
          end: 76,
          title: "Projects",
          description: 'Pellentesque habitant morbi malesuada fames ac turpis egestas.'
        },
        {
          id: '3',
          extraclass: 'pt-3',
          start: 25,
          end: 99,
          title: "CLIENTS",
          description: 'Suspendisse congue risus consequat sapien potitor risus tincidunt.'
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-services" id="services">
          <Container>
            <Row>
              <Col lg="12">
                <div className="title-box text-center">
                  <h3 className="title-heading mt-4">Les termes de FTWKF </h3>
                  <p className="text-muted f-17 mt-3">Consulter et découvrir toutes les nouvelles de FTWKF </p>

                  <img src={HomeUrl} height="15" className="mt-3" alt="" />
                </div>
              </Col>
            </Row>
            <Row className="mt-5 pt-4">
            <image src="/assets/images/banner.jpg"/>

              {/* Render Footer Link */}
              {this.state.services.map((item, key) => (
                <Col lg={4} key={key}>
                  <div className="services-box p-4 mt-4">
                    <div className="services-icon bg-soft-primary">
                      <i className={"mdi text-primary " + item.icon}></i>
                    </div>
                   {item.image}
                    <h5 className="mt-4">{item.title}</h5>
                    <p className="text-muted mt-3">{item.description}</p>

                    <div className="mt-3">
                      <Link to="#" className="text-primary f-16">Learn More <i className="mdi mdi-arrow-right ml-1"></i></Link>
                    </div>

                  </div>
                </Col>
              ))}
            </Row>
            <Row className="align-items-center mt-5 pt-4" id="counter">
              <Col lg={7}>
                <div className="pr-4 mt-4">
                  <p className="text-uppercase"><b>FTWKF</b> qui nous sommes ? </p>
                  <h3>Féderation Tunisienne de Whusu Kung Fu</h3>
                  <p className="text-muted mt-3">La FTWKF développe le wushu dans le monde entier, enrichissant la vie des gens physiquement et mentalement, et promouvant l'amitié et la compréhension, sans aucune forme de discrimination, entre tous les peuples à travers l'esprit du sport</p>
                  <div className="mt-4 pt-1">
                    <Link to="home" className="btn btn-outline-primary">Plus Détails</Link>
                  </div>
                </div>
              </Col>
              <Col lg={5}>
                <div className="mt-4 home-img">
                  <div className="animation-2"></div>
                  <div className="animation-3"></div>
                  <img src={Img1} className="img-fluid" alt="" />
                </div>
              </Col>
              {/* <Col lg={4} className="offset-lg-1">
                <div className="counter-box">
                  {this.state.counters.map((counteritem, key) => (
                    <div className={ (counteritem.id !== '1') ? 'mt-4 pt-3' : 'mt-4' } key={key}>
                      <div className="media">
                        <div className="count-box bg-soft-primary text-center">
                          <h3 className="counter-count mb-1 text-primary"> 
                          <CountUp className="counter-value" delay={2} start={counteritem.start} end={counteritem.end} />{" "}
                            <span className="count-plus text-primary"> +</span></h3>
                          <p className="text-uppercase text-muted mb-0 f-14">{counteritem.title} </p>
                        </div>
                        <div className="media-body pl-4">
                          <p className="text-muted mb-0 mt-3">{counteritem.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Col> */}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
