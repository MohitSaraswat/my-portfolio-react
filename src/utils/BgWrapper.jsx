import React from 'react'

const BgWrapper = (props) => {
  return (
    <React.Fragment>
        <div className="bg"></div>
        <div className="star-field">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        </div>
        <div className="star-field-2">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        </div>
        <div className="star-field-3">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        </div>
        {props.children}
    </React.Fragment>
  )
}

export default BgWrapper