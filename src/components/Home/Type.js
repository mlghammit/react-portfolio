import React from "react";
import Typewriter from "typewriter-effect";
import AnimatedLetters from "../AnimatedLetters";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "<span class='sentence-1'>Computer Science Student</span>",
          "<span class='sentence-2'>Western University '26</span>",
          "<span class='sentence-3'>Front End Specialist</span>",
          "<span class='sentence-4'>Government Relations</span>",
          "<span class='sentence-5'>Aspiring Sock Collector</span>"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        html: true, // Allow rendering HTML tags inside Typewriter
      }}
    />
  
  );
}

export default Type;
