import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    // text:
    //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Sanu Kumar" },
    { id: 2, title: "Email:", text: "Sanuk12942gmail.com" },
    { id: 3, title: "Mobile:", text: "8540952206" },
    { id: 4, title: "Linkedin", text: "sanu-kumar-0a1624202" },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="/images/man-01.png" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
                My name is Sanu Kumar. I live in Gaya, Bihar. 
                I matriculated in year 2017. I am third Year education
                 student at the Lakshmi Narain College Of Technology, Bhopal.
                 I specialize in Electronics and Communication Engineering.
              </div>
              <div className="about__info-p2">
                I am a talketive person and friendly at the same time.
                 I like to staying outdoors,walking,listening music and reading 
                 newspapers.
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
