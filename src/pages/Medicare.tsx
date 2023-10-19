import React, { useState } from "react";


function Medicare(){
  const [name, setName] = useState("");
  const [premium, setPremium] = useState(0);


  return (
    <form className="quote-form">
        Medicare
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

export default Medicare;