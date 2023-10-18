import React, { useState } from "react";
import { Data } from "../../db.js";
import { SuggestionCards } from "../../components/Swiper/SuggestionCards.js";
import "./suggestion.css";
export const Suggestions = () => {
  const [data, setDate] = useState(Data);
  console.log("data...", data);
  return (
    <div className="seuggestionContainer">
      <SuggestionCards />
    </div>
  );
};
