import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="125" cy="125" r="125" /> 
    <rect x="1" y="247" rx="5" ry="5" width="248" height="41" /> 
    <rect x="0" y="299" rx="5" ry="5" width="249" height="68" /> 
    <rect x="-1" y="380" rx="5" ry="5" width="131" height="47" /> 
    <rect x="152" y="380" rx="5" ry="5" width="96" height="45" />
  </ContentLoader>
)

export default Skeleton