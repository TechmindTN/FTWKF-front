import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

//import images
import Img2 from '../assets/images/slides/sanda.png';
import Img1 from '../assets/images/whushu.png';
import Img4 from'../assets/images/slides/5.png';
import Img0 from'../assets/images/slides/kungfu.png';

import HomeUrl from '../assets/images/home-border.png';

export default class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pricing: [
        {
          id: 1,
          title: "Taolu",
          description: 'Le terme Taolu fait référence à la composante de la pratique de la routine (forme) du wushu. Une routine taolu comprend un ensemble de techniques prédéterminées, reliées entre elles de façon continue et chorégraphiées selon certains principes et philosophies afin d incorporer des principes stylistiques d attaque et de défense. Il s agit de techniques de mains, de jambes, de sauts, de balayages, de positions et de jeux de pieds, de saisies, de projections, de luttes et d équilibres',
img:Img4,
          
          icon: 'mdi-account',
          titlePrimary: false,
         
        },
        {
          id: 2,
          img:Img2,
          title: "Sanda",
          titlePrimary: true,
          description: 'Le sanda est un sport moderne de combat à mains nues qui s est développé à partir des techniques traditionnelles du wushu. Il utilise principalement des techniques de frappe, de coup de pied, de projection, de lutte et de défense.Les combats de compétition se déroulent sur une plate-forme surélevée appelée "leitai", qui mesure 80 cm de haut, 8 m de large et 8 m de long, et se compose d un cadre recouvert de mousse haute densité avec une couverture en toile. Sur le sol entourant la plate-forme se trouve un coussin de protection de 30 cm de hauteur et de 2 mètres de largeur. Les athlètes en compétition portent un équipement de protection comprenant un casque, un plastron et des gants, ainsi qu un protège-dents et un suspensoir.',
          icon: 'mdi-account-multiple text-primary',
          
        },
        {
          id: 3,
          title: "Kung Fu",
          img:Img0,
          description: 'Le Kungfu Shaolin est le plus grand art martial du monde car il a produit le plus grand nombre de généraux et de maîtres de l histoire, possède les techniques, les compétences et la philosophie les plus étendues, enrichit la vie des gens et conduit à l épanouissement spirituel. Le kungfu Shaolin est le plus grand art martial du monde !',
          titlePrimary: false,
          icon: 'mdi-account-multiple-plus',
                 
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light bg-features">
          <Container>
            <Row className="align-items-center">
              <Col lg={5}>
                <div className="mt-4 home-img">
                  <div className="animation-2"></div>
                  <div className="animation-3"></div>
                  <img src={Img1} className="img-fluid" alt="" />
                </div>
              </Col>
              <Col lg={6} className="offset-lg-1">
                <div className="mt-4">
                  <h2>Les nouvelles de FTWKF</h2>
                  <p className="mt-4 text-muted">Praesent ut tincidunt massa vel facilisis dui Integer mattis quis
                  augue in rhoncus Integer mattis enim vel eros bibendum egestas id laoreet nisi
                  Praesent malesuada eros at bibendum eleifend Nam nec urna hendrerit interdum risus
                  Donec faucibus quis magna sit amet laoreet Maecenas finibus semper massa in finibus est
                            venenatis quis.</p>

                  <div className="mt-4">
                    <Link to="#" className="btn btn-primary">Explore More</Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section" id="pricing">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="title-box text-center">
                  <h3 className="title-heading mt-4">Les sports de Whushu</h3>
                  <p className="text-muted f-17 mt-3"></p>
                  <img src={HomeUrl} height="15" className="mt-3" alt="" />
                </div>
              </Col>
            </Row>
            <Row className="mt-5 pt-4">
              {/* Render Pricing items */}
              {this.state.pricing.map((item, key) => (
                <Col lg={12} key={key}>
                  <div className="pricing-box mt-4">
                      {(item.titlePrimary === true) ?
                      <h4 className="f-20 text-primary">{item.title}</h4>
                      :
                      <h4 className="f-20">{item.title}</h4>
                    }

                
                    <p className="mt-4 pt-2 text-muted">{item.description}
                    
                    </p>
                    <img src={item.img}  alt="" />
                    <div className="mt-4 pt-3">
                      <Link to="#" className="btn btn-primary btn-rounded">Plus Détails</Link>
                    </div>
                  </div>
                </Col>
                
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
