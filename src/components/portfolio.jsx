import React from "react";

//import stock
import stock from "../img/image1.png";
import stock1 from "../img/image2.png";
import stock2 from "../img/image3.png";
import stock3 from "../img/image4.png";
import stock4 from "../img/image5.png";
import stock5 from "../img/image6.png";
import stock6 from "../img/image7.png";
import stock7 from "../img/image8.png";
import stock8 from "../img/image9.png";


class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  A few of my recent projects.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            { PROJECTS.map( project => {
              return (
                <div className="col-md-4">
                  <div className="work-box">
                    <a target="_blank" href={project.href} title="View Site">
                      <div className="work-img">
                        <img src={project.imgSrc} alt="" className="img-fluid" />
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">{project.title}</h2>
                            <div className="w-more">
                              <span className="w-ctegory">
                                {project.category}
                              </span>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;


const PROJECTS = [
  {

    href: "https://halal-table.herokuapp.com/",
    imgSrc: stock,
    title: "Halal Tables",
    category: "Rails, PostgreSQL, JavaScript, React, Redux, AWS, REST"
  },
  {
    href: "https://crime-watch.herokuapp.com/",
    imgSrc: stock1,
    title: "Crime Watch",
    category: "MongoDB, ExpressJS, ReactJS, NodeJS, Google Maps API"
  },
  {
    href: "https://mahmudahmed.github.io/Bull-E-Season/",
    imgSrc: stock2,
    title: "BULL-E Season",
    category: "HTML5, CSS3, Vanilla JavaScript, DOM"
  },
  {
    href: "https://mahmudahmed.com/TriviaUniverse/",
    imgSrc: stock3,
    title: "Trivia University",
    category: "React, HTML, CSS, APIs"
  },
  {
    href: "http://mahmudahmed.com/Data-Visualization-Boston-Housing-Market/",
    imgSrc: stock4,
    title: "Data Visualization",
    category: "JavaScript, HTML/CSS, Canvas, D3"
  },
  {
    href: "https://expo.io/@mahmudahmed/BaitnHook",
    imgSrc: stock5,
    title: "Bait & Hook Mobile App",
    category: "React-Native, Firebase, EXPO"
  },
  {
    href: "https://expo.io/@mahmudahmed/projects/react-firebase-app",
    imgSrc: stock8,
    title: "Instagram App lone",
    category: "React-Native, Firebase, EXPO"
  },
  {
    href: "https://mahmudahmed.com/todo",
    imgSrc: stock6,
    title: "QuickList",
    category: "React, HTML/CSS, Firebase"
  },
  {
    href: "https://github.com/MahmudAhmed/CMSTextEditor",
    imgSrc: stock7,
    title: "CMSTextEditor",
    category: "Ruby on Rails, PostgreSQL, HTML/CSS"
  }
]