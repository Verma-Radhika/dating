import React from "react";
import { animated, interpolate } from "react-spring";
import Carousel from "nuka-carousel";

class DeckCard extends React.Component {
  render() {
    console.log("jhbdfkjbakf");
    const { i, x, y, rot, scale, trans, cards, bind, objs } = this.props;
    const { name, age, distance, text, pics } = objs[i];
    console.log("name", objs[i]);
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
              {pics.map((pic) => (
                <img className="deck_img" src={pic} alt="profilePicture" />
              ))}
            </Carousel>
            <h2 className="h2">{name},</h2>
            <h2 className="h2">{age}</h2>
            <h5 className="h5">{distance}</h5>
            <h5 className="h5">{text}</h5>
          </div>
        </animated.div>
      </animated.div>
    );
  }
}

export default DeckCard;




