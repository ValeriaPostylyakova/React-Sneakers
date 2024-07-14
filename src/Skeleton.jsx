import React from "react";
import ContentLoader from "react-content-loader";

export const Skeleton = () => {
  return (
    <ContentLoader 
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="6" y="-1" rx="10" ry="10" width="149" height="66" /> 
    <rect x="8" y="75" rx="3" ry="3" width="150" height="15" /> 
    <rect x="9" y="98" rx="3" ry="3" width="91" height="15" /> 
    <rect x="9" y="131" rx="8" ry="8" width="80" height="24" /> 
    <rect x="121" y="125" rx="8" ry="8" width="32" height="32" /> 
    <rect x="208" y="-1" rx="10" ry="10" width="150" height="66" /> 
    <rect x="213" y="75" rx="3" ry="3" width="143" height="15" /> 
    <rect x="215" y="97" rx="3" ry="3" width="91" height="15" /> 
    <rect x="215" y="129" rx="8" ry="8" width="80" height="24" /> 
    <rect x="321" y="124" rx="8" ry="8" width="32" height="32" />
  </ContentLoader>
  )
}