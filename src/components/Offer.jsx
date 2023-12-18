import React from 'react'
import "../styles/offer.css"

function Offer({src,link,index}) {
  return (
   <a href={link}><img src={src} alt={`${index} Offer`} /></a>
  )
}

export default Offer
