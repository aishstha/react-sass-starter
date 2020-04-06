import React from "react";
// import { ReactComponent as Butterfly } from "../assets/icons/Butterfly.svg";
import { ReactComponent as Four } from "../assets/icons/Four.svg";
// import { ReactComponent as Five } from "../assets/icons/Five.svg";

import { Five } from "../assets/images";

const MoodSelection = () => (
  <React.Fragment>
    <div className='wrapper background-light'>
      <div className='wrapper__content'>
        <div className='wrapper__content__header'>
          <div className='wrapper__content__header__logo'>
            {/* <Butterfly /> */}
            <span className='title'>react-sass-starter</span>
          </div>
          <p>Your Team's Happiness Manager</p>
        </div>
        <div className='wrapper__content__body'>
          <div className='wrapper__content__body__title'>
            <strong>DEMO INC.</strong>
            would like to know:
          </div>
          <h4 className='wrapper__content__body__question'>
            How is your week going?
          </h4>
          <div className='wrapper__content__body__moods'>
            <a href='#'>
              <Four />
            </a>
            <a href='#'>
              <img src={Five} alt='' />
            </a>
            <a href='#'>
              <Four />
            </a>
            <a href='#'>
              <Four />
            </a>
            <a href='#'>
              <Four />
            </a>
            {/*
            <a href="#">
              <img src="https://assets.butterfly.ai/email-images/mood-1.v2.png" className="wrapper__content__body__moods__icon"/>
            </a>
            <a href="#">
              <img src="https://assets.butterfly.ai/email-images/mood-1.v2.png" className="wrapper__content__body__moods__icon"/>
            </a>
            <a href="#">
              <img src="https://assets.butterfly.ai/email-images/mood-1.v2.png" className="wrapper__content__body__moods__icon"/>
            </a> */}
          </div>
          <p>Your answer will always remain anonymous</p>
        </div>
        <div className='wrapper__content__footer'></div>
      </div>
    </div>
  </React.Fragment>
);

export default MoodSelection;
