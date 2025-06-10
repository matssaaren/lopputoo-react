import React from 'react'

import { Helmet } from 'react-helmet'

import './galery.css'

const Galery = (props) => {
  return (
    <div className="galery-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="galery-galery">
        <div className="galery-header">
          <img
            alt="FillI111"
            src="/external/filli111-h2qp-200h.png"
            className="galery-fill"
          />
          <div className="galery-actions">
            <div className="galery-overflow">
              <img
                alt="morevertI111"
                src="/external/moreverti111-j7zs.svg"
                className="galery-morevert"
              />
            </div>
          </div>
          <span className="galery-text10 AndroidH6">Cybernetics</span>
        </div>
        <div className="galery-text11">
          <span className="galery-text12 AndroidH6">
            Collection of diffrent cybernetics
          </span>
        </div>
        <div className="galery-divider">
          <img
            alt="RectangleI116"
            src="/external/rectanglei116-0vsl-200h.png"
            className="galery-rectangle"
          />
        </div>
        <div className="galery-card-small1">
          <div className="galery-frame10">
            <img
              alt="Image1164"
              src="/external/image1164-i12b.svg"
              className="galery-image1"
            />
            <div className="galery-frame11">
              <div className="galery-frame12">
                <span className="galery-text13 AndroidH6">Title</span>
                <span className="galery-text14 AndroidBody2">
                  Supporting or descriptive text for the card goes here.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="galery-card-small2">
          <div className="galery-frame13">
            <img
              alt="Image1166"
              src="/external/image1166-72ne.svg"
              className="galery-image2"
            />
            <div className="galery-frame14">
              <div className="galery-frame15">
                <span className="galery-text15 AndroidH6">Title</span>
                <span className="galery-text16 AndroidBody2">
                  Supporting or descriptive text for the card goes here.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="galery-card-small3">
          <div className="galery-frame16">
            <img
              alt="Image1167"
              src="/external/image1167-2nb.svg"
              className="galery-image3"
            />
            <div className="galery-frame17">
              <div className="galery-frame18">
                <span className="galery-text17 AndroidH6">Title</span>
                <span className="galery-text18 AndroidBody2">
                  Supporting or descriptive text for the card goes here.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="galery-card-small4">
          <div className="galery-frame19">
            <img
              alt="Image1168"
              src="/external/image1168-3qcc.svg"
              className="galery-image4"
            />
            <div className="galery-frame20">
              <div className="galery-frame21">
                <span className="galery-text19 AndroidH6">Title</span>
                <span className="galery-text20 AndroidBody2">
                  Supporting or descriptive text for the card goes here.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="galery-bottom-navigation">
          <div className="galery-segment1">
            <img
              alt="Icon1I423"
              src="/external/icon1i423-n2rj.svg"
              className="galery-icon1"
            />
            <span className="galery-text21 AndroidCaption">Home</span>
          </div>
          <div className="galery-segment2">
            <img
              alt="Icon2I423"
              src="/external/icon2i423-o0iu.svg"
              className="galery-icon2"
            />
            <span className="galery-text22 AndroidCaption">Info</span>
          </div>
          <div className="galery-segment3">
            <img
              alt="Icon3I423"
              src="/external/icon3i423-4mv5.svg"
              className="galery-icon3"
            />
            <span className="galery-text23 AndroidCaption">Gallery</span>
          </div>
          <div className="galery-segment4">
            <img
              alt="Icon4I423"
              src="/external/icon4i423-f9a.svg"
              className="galery-icon4"
            />
            <span className="galery-text24 AndroidCaption">Contact</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Galery
