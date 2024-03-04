import React, { useState } from "react";


function Medicare(){
  const [name, setName] = useState("");
  const [premium, setPremium] = useState(0);


  return (
    <iframe src="https://www.planenroll.com/?purl=uxFUtqio" className="iframe-page" />
 )
} 

export default Medicare;