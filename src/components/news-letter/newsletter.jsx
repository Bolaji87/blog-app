import React from "react";

import "./newsletter.css";
function NewsLetter() {
  return (
    <div className="news-letter">
      <div className="news">
        <h1>
          Get our stories delivered From <span>us to your inbox weekly.</span>
        </h1>
        <div>
          <input type="email" placeholder="Your Email" />
          <button>
            <a href="#">Get started</a>
          </button>
        </div>
        <p>
          Get a response tomorrow if you submit by 9pm today. If we received
          after
          <br />
          <span id="line-break">9pm will get a reponse the following day.</span>
        </p>
      </div>
    </div>
  );
}

export default NewsLetter;
