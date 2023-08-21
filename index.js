import React from "react";
import ReactDOM from "react-dom/client";
// import { useState } from "react";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating
//         color="blue"
//         maxRating={10}
//         onSetMovieRating={setMovieRating}
//       />
//       <p> You rated the movie {movieRating} stars</p>
//     </div>
//   );
// }
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Very Bad", "Bad", "Okay", "Good", "Great"]}
    />
    <StarRating
      maxRating={10}
      size={60}
      color="#e0801b"
      className="test"
      defaultRating={3}
    />

    <StarRating /> */}

    {/* <Test /> */}
  </React.StrictMode>
);
