import React from 'react'

import { Helmet } from 'react-helmet'

import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="contact-contact">
        <div className="contact-header">
          <img
            alt="FillI111"
            src="/external/filli111-j5t-200h.png"
            className="contact-fill"
          />
          <div className="contact-actions">
            <div className="contact-overflow">
              <img
                alt="morevertI111"
                src="/external/moreverti111-78i8.svg"
                className="contact-morevert"
              />
            </div>
          </div>
          <span className="contact-text10 AndroidH6">Cybernetics</span>
        </div>
        <div className="contact-text11">
          <span className="contact-text12 AndroidH6">
            Website creator + Refrences
          </span>
        </div>
        <div className="contact-divider1">
          <img
            alt="RectangleI122"
            src="/external/rectanglei122-k47j-200h.png"
            className="contact-rectangle1"
          />
        </div>
        <div className="contact-card-large">
          <div className="contact-image">
            <img
              alt="BaseI122"
              src="/external/basei122-d9af-400w.png"
              className="contact-base"
            />
            <img
              alt="VectorI122"
              src="/external/vectori122-15f.svg"
              className="contact-vector"
            />
          </div>
          <div className="contact-frame10">
            <span className="contact-text13 AndroidH6">Title</span>
            <span className="contact-text14 AndroidBody2">Subtitle</span>
          </div>
          <div className="contact-frame11">
            <span className="contact-text15 AndroidBody2">
              Supporting or descriptive text for the card goes here like a pro.
            </span>
          </div>
          <div className="contact-frame12">
            <button className="contact-button-small1">
              <div className="contact-frame13">
                <span className="contact-text16 AndroidButton">Button</span>
              </div>
              <div className="contact-min-width641"></div>
            </button>
            <button className="contact-button-small2">
              <div className="contact-frame14">
                <span className="contact-text17 AndroidButton">Button</span>
              </div>
              <div className="contact-min-width642"></div>
            </button>
          </div>
        </div>
        <div className="contact-list-two-line">
          <div className="contact-frame15">
            <div className="contact-text18">
              <span className="contact-text19 AndroidBody1">Title</span>
              <span className="contact-text20 AndroidBody2">Subtitle</span>
            </div>
          </div>
          <div className="contact-divider2">
            <img
              alt="RectangleI122"
              src="/external/rectanglei122-yjt-200h.png"
              className="contact-rectangle2"
            />
          </div>
        </div>
        <div className="contact-card-small1">
          <div className="contact-frame16">
            <div className="contact-frame17">
              <span className="contact-text21 AndroidH6">Title</span>
              <span className="contact-text22 AndroidBody2">
                Supporting or descriptive text for the card goes here.
              </span>
            </div>
          </div>
        </div>
        <div className="contact-card-small2">
          <div className="contact-frame18">
            <div className="contact-frame19">
              <span className="contact-text23 AndroidH6">Title</span>
              <span className="contact-text24 AndroidBody2">
                Supporting or descriptive text for the card goes here.
              </span>
            </div>
          </div>
        </div>
        <div className="contact-bottom-navigation">
          <div className="contact-segment1">
            <img
              alt="Icon1I425"
              src="/external/icon1i425-39zj.svg"
              className="contact-icon1"
            />
            <span className="contact-text25 AndroidCaption">Home</span>
          </div>
          <div className="contact-segment2">
            <img
              alt="Icon2I425"
              src="/external/icon2i425-fsm.svg"
              className="contact-icon2"
            />
            <span className="contact-text26 AndroidCaption">Info</span>
          </div>
          <div className="contact-segment3">
            <img
              alt="Icon3I425"
              src="/external/icon3i425-yr68.svg"
              className="contact-icon3"
            />
            <span className="contact-text27 AndroidCaption">Gallery</span>
          </div>
          <div className="contact-segment4">
            <img
              alt="Icon4I425"
              src="/external/icon4i425-61eg.svg"
              className="contact-icon4"
            />
            <span className="contact-text28 AndroidCaption">Contact</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
