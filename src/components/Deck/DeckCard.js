import React from "react";
import { animated, interpolate } from "react-spring";
import Carousel from "nuka-carousel";

class DeckCard extends React.Component {
  render() {
    const { i, x, y, rot, scale, trans, cards, bind, objs, data } = this.props;
    const { age, distance, text, pics } = objs[i];
    const { image, name } = data[i];

    // console.log("data in cards", data[i]);
    // console.log("bind", x, y, i);
  console.log("direction" ,rot, scale, trans )

    return (
      <animated.div
        key={i}
        style={{
          transform: interpolate(
            [x, y],
            (x, y) => `translate3d(${x}px,${y}px,0)`
          ),
        }}
      >
        <animated.div
          {...bind(i)}
          style={{
            transform: interpolate([rot, scale], trans),
          }}
        >
          <div className="deck_card">
            <Carousel>
              {/* {pics.map((pic) => ( */}
              <img className="deck_img" src={image} alt="profilePicture" />
              {/* ))} */}
            </Carousel>
            <h2 className="h2">{name},</h2>
            {/* <h2 className="h2">{age}</h2> */}
            {/* <h5 className="h5">{distance}</h5> */}
            {/* <h5 className="h5">{text}</h5> */}
          </div>
        </animated.div>
      </animated.div>
    );
  }
}

export default DeckCard;
