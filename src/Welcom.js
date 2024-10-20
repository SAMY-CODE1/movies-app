import React, { useEffect, useState } from "react";

function Welcom() {
  const [isonline,setIsonline]=useState(navigator.onLine)
  const handelcheck=()=>{
    setIsonline(navigator.onLine)
  }
   useEffect(()=>{ 
    window.addEventListener('online',handelcheck)
    window.addEventListener('offline',handelcheck)
   },[])
  return (
 
    <div className="welcom">
      {isonline?(<>
      <h1>Welcom to Movies App</h1>
      <h6>here tou fiend fun </h6>
      </>):(<>     <h1>No Connection</h1>
        <h6>Please check your internet connection.</h6> </>)
}
    </div>
  );
}

export default Welcom;
