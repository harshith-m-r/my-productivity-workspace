import React from "react";
import "./aboutMe.css";

function AboutMe() {
  return (
    <>
    <div className="aboutMe">
      <div className="aboutMeProfile">
        <img
          className="profilePicture"
          src="https://png.pngtree.com/png-vector/20190114/ourlarge/pngtree-vector-aim-icon-png-image_313723.jpg"
          alt="profile image"
        />
        <div className="profileName">harsh</div>
        <div className="userDesg">D E V E L O P E R</div>
      </div>

      <div className="profileData">
        <div className="bio">
          Hey, I'm Harsh, a frontend developer trainee working on react
          typescript and this is a task where I'm building a single page
          application.
        </div>

        <div className="projectDesc">
          This project is to understand and revisit the concepts of React.{" "}
          <br />
          <br />
          This is a single page application dashboard that one could use to
          maintain their own todolist and quicknotes. The homepage of the
          application also has some API integrations that shows top four tech
          news about what's happening in the country currently. <br />
          <br />
          The project will also constitute the concepts of react router and
          redux in coming days.
        </div>

      <div className="abtMeFooter">
        <div className="socials">
          <ul className="socials">
            <li>
              <a href="#" title="github">
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a href="#" title="instagram">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" title="linkedin">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
    </>
  );
}

export default AboutMe;
