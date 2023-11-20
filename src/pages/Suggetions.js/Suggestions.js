import React, { useState } from "react";
import { Data } from "../../db.js";
import { SuggestionCards } from "../../components/Swiper/SuggestionCards.js";
import "./suggestion.css";
import { Deck } from "../../components/Deck/Deck.js";
export const Suggestions = () => {
  const [data, setDate] = useState(Data);
  console.log("data...", data);
  return (
    // <div id="mainRouter">
<div className="
seuggestionContainer">
<Deck/>
</div>
// </div>
    // <div className="seuggestionContainer">
    //   <SuggestionCards />
    // </div>
  );
};
