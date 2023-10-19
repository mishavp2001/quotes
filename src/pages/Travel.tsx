import React, { useState } from "react";


function Travel(){
  const [name, setName] = useState("");

  return (
    <form className="quote-form">
      Country:
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

export default Travel;