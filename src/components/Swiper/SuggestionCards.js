import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./swiperStyle.css";
import { EffectCards } from "swiper/modules";
import CancelIcon from "@mui/icons-material/Cancel";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import { Data } from "../../db.js";
import { AiFillHeart } from "react-icons/ai";
// import { RxCross2 } from "react-icons/rx";
import CloseIcon from "@mui/icons-material/Close";
export const SuggestionCards = () => {
  const [direction, setDirection] = useState(false);
  const prevIndexRef = useRef(0);
  const [cards, setCards] = useState(Data);
  const handleSwipe = (swiper) => {
    const currentIndex = swiper.activeIndex;
    const direction = currentIndex > prevIndexRef.current ? "right" : "left";
    setDirection(direction);
    console.log(
      `Swiped ${direction} from slide index ${prevIndexRef.current} to ${currentIndex}`
    );

    // Update the previous index for the next swipe
    prevIndexRef.current = currentIndex;
    if (direction === "left") {
      // If swiped to the left, remove the first card
      setCards((prevCards) => prevCards.slice(1));
      console.log("cardsdfdfdfdf", cards);
    } else if (direction === "right") {
      // If swiped to the right, add a new card
      //       const newCard = cards.length + 1;
      //       setCards((prevCards) => [...prevCards, newCard]);
      // console.log("newCard", newCard);
      // Reset the active index to avoid issues with Swiper's internal state
      //   swiper.slideTo(0);
    }
    // You can use this information to update your state or perform other actions
  };

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        onSlideChange={(swiper) => handleSwipe(swiper)}
      >
        {cards?.map((el, index) => (
          <SwiperSlide
            style={{ display: "flex", flexDirection: "column" }}
            key={index}
          >
            <img src={el.image} width={"100%"} height={"100%"} />
            <div className="swiperIconContainer">
              <div className="iconBorder cancelIconBorder">
                <CloseIcon className="cancelIcon" />
              </div>
              <div className="iconBorder rightIconBorder">
                <AiFillHeart className="rightIcon" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

// import React, { useState, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-cards";
// import "./swiperStyle.css";
// import { EffectCards } from "swiper/modules";

// export const SuggestionCards = () => {
// const [cards, setCards] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]); // Initial cards
// const prevIndexRef = useRef(0);

// const handleSwipe = (swiper) => {
//   const currentIndex = swiper.activeIndex;
//   const direction = currentIndex > prevIndexRef.current ? "right" : "left";

//   console.log(
//     `Swiped ${direction} from slide index ${prevIndexRef.current} to ${currentIndex}`
//   );

//   // Update the previous index for the next swipe
//   prevIndexRef.current = currentIndex;

//   if (direction === "left") {
//     // If swiped to the left, remove the first card
//     setCards((prevCards) => prevCards.slice(1));
//   } else if (direction === "right") {
//     // If swiped to the right, add a new card
//     const newCard = cards.length + 1;
//     setCards((prevCards) => [...prevCards, newCard]);

//     // Reset the active index to avoid issues with Swiper's internal state
//     swiper.slideTo(0);
//   }

// You can use this information to update your state or perform other actions
// };

//   return (
//     <>
//       <Swiper
//         effect={"cards"}
//         grabCursor={true}
//         modules={[EffectCards]}
//         className="mySwiper"
//         onClick={() => console.log("EffectCards", EffectCards)}
//         onSlideChange={(swiper) => handleSwipe(swiper)}
//         key={cards.join(",")} // Ensure re-render when cards array changes
//       >
//         {cards.map((card) => (
//           <SwiperSlide key={card}>Slide {card}</SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// };
