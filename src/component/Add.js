import axios from "axios";
import React, { useEffect, useState } from "react";
import Reasultcard from "./Reasultcard";

function Add() {
  const [inputvalue, setInputvalue] = useState("");
  const [data, setData] = useState({});
  const [dataresp, setDataresp] = useState("");
  useEffect(() => {
    if (inputvalue) {
      axios
        .get(`https://www.omdbapi.com/?s=${inputvalue}}&apikey=839f7fc6`)
        .then((resp) => {
          setData(resp.data.Search);
          console.log(resp.data);

          setDataresp(resp.data.Response);
        });
    }
  }, [inputvalue]);

  return (
    <div className="add-page">
      <div className="add-cont">
        <input
          onChange={(e) => setInputvalue(e.target.value)}
          placeholder="searsh for a movie ..."
          value={inputvalue}></input>
        <ul className="movies-result">
          {dataresp === "True" &&
            data.map((ele) => (
              <li key={ele.imdbID}>
                <div className="ele">
                <Reasultcard movie={ele}/>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Add;
