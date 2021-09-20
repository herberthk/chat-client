import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <div className="heading">
          <h1 >Join Chat!</h1>
        </div>
        
      <div className='bottom'>
        <div>
          <input
            className="joinInput"
            placeholder="Name"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            className="joinInput mt-20"
            placeholder="Room name"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button mt-20" type="submit">
            Start
          </button>
        </Link>
      </div>
      {/* <div className="rooms-list">
        <h1>Created rooms:</h1>
      </div> */}
</div>
        
    </div>
  );
};

export default Join;
