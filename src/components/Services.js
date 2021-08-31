import React from "react";
import {
  FaGithub,
  FaCamera,
  FaMusic,
  // FaCircleNotch,
  // FaApple,
  FaLaptopCode,
  // FaFileVideo,
  FaTree,
  // FaSearchDollar,
  FaProjectDiagram,
} from "react-icons/fa";
const Services = () => {
  const [header] = React.useState({
    mainHeader: "SERVICES",
    subHeading: "My Work",
    // text:
    //   "Lorem Ipsum is simply dummy text of the printing and typesetting\
    // industry. Lorem Ipsum standard dummy text.",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGithub className="commonIcons" />,
      heading: "Web Development",
      text:
        " I am beginer web developer in front-end technology using HTML, CSS, Javascript and React",
    },
    {
      id: 2,
      icon: <FaCamera className="commonIcons" />,
      heading: "Photography",
      text:
        "I like Photography so much. I really intrested in capture natural photographs.",
    },
    {
      id: 3,
      icon: <FaMusic className="commonIcons" />,
      heading: "Listening Music",
      text:
        "I love listening music in free time. 90's songs give me more pleasure after listening",
    },
    {
      id: 4,
      icon: <FaLaptopCode className="commonIcons" />,
      heading: "Programmer",
      text:
        "I am also working on programming language on C++. I earned 4 star on Hackerrank.",
    },
    {
      id: 5,
      icon: <FaTree className="commonIcons" />,
      heading: "Adventure Tours",
      text:
        "An adventure is an exciting experience that is typically bold, sometimes risky or undertaking.",
    },
    {
      id: 6,
      icon: <FaProjectDiagram className="commonIcons" />,
      heading: "Project",
      text:
        "I have done 3-4 project on frontend technology using HTML,CSS,Javascript and React.",
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
