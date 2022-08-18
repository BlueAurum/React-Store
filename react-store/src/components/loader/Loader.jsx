import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
  <ContentLoader 
    speed={2}
    width={350}
    height={500}
    viewBox="0 0 350 500"
    backgroundColor="#d2d1d1"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="7" y="29" rx="15" ry="15" width="339" height="242" /> 
    <rect x="6" y="295" rx="5" ry="5" width="340" height="60" /> 
    <rect x="48" y="379" rx="5" ry="5" width="258" height="37" /> 
    <rect x="1" y="437" rx="10" ry="10" width="347" height="60" /> 
    <circle cx="17" cy="14" r="9" />
  </ContentLoader>
)

export default Loader

