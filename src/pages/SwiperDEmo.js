import React from 'react'

export const SwiperDEmo = () => {
  return (
    <body>
      <div className="demo-nav">
        <button className="active" data-url="demo-tinder.html">
          Tinder
        </button>
        <button data-url="demo-recommendations.html">Recommendations</button>
      </div>
      <iframe src="demo-tinder.html" frameborder="0"></iframe>
      <iframe src="demo-tinder.html" frameborder="0"></iframe>
    </body>
  );
}


// Extra page .. 