import React, { Component } from "react";

// Importing Section
import Navbar from "../../component/Navbar/NavBar";

import Section from "./Section";
import Services from "../../component/Services";
import Pricing from "../../component/Pricing";
import Team from "../../component/Team";
import Clients from "../../component/Clients";
import Contact from "../../component/Contact";
import Footer from "../../component/Footer/Footer";
import Slides from "../../component/Slides"
class Layout1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { id: 1, idnm: "home", navheading: "Acceuil" },
        { id: 3, idnm: "services", navheading: "Termes de FTWKF" },
        { id: 4, idnm: "pricing", navheading: "Les sports Whushu" },
        { id: 5, idnm: "team", navheading: "Staff FTWKF" },
        { id: 7, idnm: "contact", navheading: "Contact" },
      ],
      pos: document.documentElement.scrollTop,
      imglight: false,
      navClass: "",
      fixTop : true
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > this.state.pos) {
      this.setState({ navClass: "nav-sticky", imglight: false });
    } else {
      this.setState({ navClass: "", imglight: false });
    }
  };

  render() {
    return (
      <React.Fragment>
          {/* Importing Navbar */}
          <Navbar
            navItems={this.state.navItems}
            navClass={this.state.navClass}
            imglight={this.state.imglight}
            top={this.state.fixTop}
          />
         <Slides/>
          {/* Importing Section */}
          {/* <Section /> */}
 
           {/* Importing Service */}
           <Services />

          {/* Importing Pricing */}
          <Pricing />

          {/* Importing Team */}
          <Team />

          {/* Importing Clients */}
          {/* <Clients /> */}

          {/* Importing Contact Us */}
          <Contact />

          {/* Importing Footer */}
          <Footer />
      </React.Fragment>
    );
  }
}
export default Layout1;
