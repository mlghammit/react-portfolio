import React from "react";
import Typewriter from "typewriter-effect";
import AnimatedLetters from "../AnimatedLetters";
import "./Typewritter.scss";

function Type() {
  return (
    <div style={{ marginTop: "90px" }}> {/* Adjust the margin-top value as needed */}
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
    </div>
  );
}

export default Type;
