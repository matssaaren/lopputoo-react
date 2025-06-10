import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="home-home">
        <div className="home-header">
          <img
            alt="FillI152"
            src="/external/filli152-1yvp-200h.png"
            className="home-fill"
          />
          <div className="home-actions">
            <div className="home-overflow">
              <img
                alt="morevertI152"
                src="/external/moreverti152-r5ar.svg"
                className="home-morevert"
              />
            </div>
          </div>
          <span className="home-text10 AndroidH6">Cybernetics</span>
        </div>
        <img
          alt="Image1764"
          src="/external/image1764-sqeo.svg"
          className="home-image"
        />
        <div className="home-text11">
          <span className="home-text12 AndroidSubtitle2">
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
        <button className="home-button-large">
          <div className="home-frame">
            <span className="home-text20 AndroidButton">Learn More</span>
          </div>
        </button>
        <div className="home-bottom-navigation">
          <div className="home-segment1">
            <img
              alt="Icon1I193"
              src="/external/icon1i193-ron.svg"
              className="home-icon1"
            />
            <span className="home-text21 AndroidCaption">Home</span>
          </div>
          <div className="home-segment2">
            <img
              alt="Icon2I193"
              src="/external/icon2i193-6s89r.svg"
              className="home-icon2"
            />
            <span className="home-text22 AndroidCaption">Info</span>
          </div>
          <div className="home-segment3">
            <img
              alt="Icon3I193"
              src="/external/icon3i193-6wmo.svg"
              className="home-icon3"
            />
            <span className="home-text23 AndroidCaption">Gallery</span>
          </div>
          <div className="home-segment4">
            <img
              alt="Icon4I193"
              src="/external/icon4i193-e9j9.svg"
              className="home-icon4"
            />
            <span className="home-text24 AndroidCaption">Contact</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
