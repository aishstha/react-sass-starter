import React from "react";
// import { ReactComponent as CircularChevronDown } from 'public/images/Happy.svg';

const App = () => (
  <React.Fragment>
    <div className="page-wrap">
      <div className="side-bar">
        <img src="images/Logo.svg" alt="Butterfly" className="logo" />
      </div>
      <div className="app-content">
        <div className="progress-bar"></div>
        <div className="content">
          <div className="page-header">
            <div>
              <div className="emoji">
                <img src="images/Happy.svg" alt="emoji" />
              </div>
              <div className="feedback">
                <p>Awesome! Thank you for your Feedback.</p>
                <small>
                  Your answers will <strong>always remain anonymous</strong> and
                  will be viewed by the following managers:
                </small>
              </div>
            </div>

            <h4 className="title">Demo.inc</h4>
          </div>

          <div className="edit-page-header">
            <p className="edit-page-header__title">Did you make a mistake</p>
            <div className="edit-page-header__emoji">
              <img src="images/Happy.svg" alt="Edit" className="emo" />
              <img src="images/Happy.svg" alt="Edit" className="emo" />
              <img src="images/Happy.svg" alt="Edit" className="emo" />
              <img src="images/Happy.svg" alt="Edit" className="emo" />
              <img src="images/Happy.svg" alt="Edit" className="emo"/>
            </div>
          </div>

          <h3 className="question">Do you agree with following</h3>
          <div className="page-body">
            <div className="card">
              <span className="card__page-number"> 1 of 5</span>
              <h4 className="card__page-title">I am satisfied with my roles</h4>
              <div className="card__rating">
                <div className="rate"></div>
                <div className="level">Disagree</div>
              </div>
              <div className="card__comment">
                <p className="card__comment__add-comment">Add comment</p>
                <textarea className="card__comment__text-field"></textarea>
              </div>
            </div>
          </div>
          <div className="page-footer"></div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default App;
