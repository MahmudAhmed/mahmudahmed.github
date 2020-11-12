import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "React_skill",
          content: "React",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "Rails_skill",
          content: "Ruby/Rails",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "ReactNative_skill",
          content: "React-Native",
          porcentage: "70%",
          value: "70"
        },
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "85%", value: "85" },
        { id: "JQuery", content: "JQuery", porcentage: "75%", value: "75" },
        { id: "SQL", content: "SQL", porcentage: "75%", value: "75" },
        {
          id: "NoSQL_skill",
          content: "NoSQL",
          porcentage: "70%",
          value: "70"
        },
        {
          id: "Wordpress_skill",
          content: "Wordpress",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Marketing_skill",
          content: "Marketing",
          porcentage: "90%",
          value: "90"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I'm a web developer (...as well as a MMA fanactic) with experience in building applications in JavaScript, React/React-Native, MERN (MongoDB, Express, React, Node) and Ruby on Rails. I'm drawn to programming because it is a dynamic and intellectually challenging field that can transform and improve the lives of people around the world. Software engineering is a never-ending puzzle that I am passionately engaged in solving."
        },
        {
          id: "second-p-about",
          content:
            "Coming from a Marketing and an Entrepreneurial background, I had to be self-taught in a lot of areas. I had to solve unique problems (with no “manual” on how to solve them) with approaches I had to pick up on the fly. Giving this “problem solving” background I feel it has made my transition into software engineering smoother than the average joe."
        },
        {
          id: "third-p-about",
          content:
            "As it is with the ever-changing industry we are in, my skill sets and familiarity with technologies are also changing and adapting. Here are a few technologies I have under my belt, so far..."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" id="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
