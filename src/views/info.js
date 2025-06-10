import React from 'react'

import { Helmet } from 'react-helmet'

import './info.css'

const Info = (props) => {
  return (
    <div className="info-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="info-info">
        <div className="info-header">
          <img
            alt="FillI111"
            src="/external/filli111-cs3f-200h.png"
            className="info-fill"
          />
          <div className="info-actions">
            <div className="info-overflow">
              <img
                alt="morevertI111"
                src="/external/moreverti111-a4u9.svg"
                className="info-morevert"
              />
            </div>
          </div>
          <span className="info-text10 AndroidH6">Cybernetics</span>
        </div>
        <div className="info-text11">
          <span className="info-text12 AndroidH6">
            Info about real cybernetics
          </span>
        </div>
        <div className="info-text13">
          <span className="info-text14 AndroidSubtitle2">
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
            <br></br>
            <br></br>
            <span>
              Lorem Ipsum has been the industry&apos;s standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </span>
            <br></br>
            <br></br>
            <span>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </span>
          </span>
        </div>
        <img
          alt="Video1122"
          src="/external/video1122-oec.svg"
          className="info-video"
        />
        <button className="info-button-large">
          <div className="info-frame">
            <span className="info-text22 AndroidButton">Gallery</span>
          </div>
        </button>
        <div className="info-bottom-navigation">
          <div className="info-segment1">
            <img
              alt="Icon1I422"
              src="/external/icon1i422-9ln.svg"
              className="info-icon1"
            />
            <span className="info-text23 AndroidCaption">Home</span>
          </div>
          <div className="info-segment2">
            <img
              alt="Icon2I422"
              src="/external/icon2i422-sbqm.svg"
              className="info-icon2"
            />
            <span className="info-text24 AndroidCaption">Info</span>
          </div>
          <div className="info-segment3">
            <img
              alt="Icon3I422"
              src="/external/icon3i422-ng0v.svg"
              className="info-icon3"
            />
            <span className="info-text25 AndroidCaption">Gallery</span>
          </div>
          <div className="info-segment4">
            <img
              alt="Icon4I422"
              src="/external/icon4i422-5sjb.svg"
              className="info-icon4"
            />
            <span className="info-text26 AndroidCaption">Contact</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
