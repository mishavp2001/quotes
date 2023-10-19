import React, { useState } from "react";


function Dental(){
  const [name, setName] = useState("");
  const [premium, setPremium] = useState(0);


  return (
    <form className="quote-form">
        Dental
          <label>Enter your ZIP code:
            <input
              type="text" 
              value='95746'
              onChange={(e) => setName(e.target.value)}
            />
          </label>


        </form>
 )
} 

export default Dental;