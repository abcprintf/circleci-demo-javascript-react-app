import React from "react";

const Cards = ({ cards }) => {
  return (
    <div className="card-columns">
      {cards.map((card) => (
        <>
          {card.data.crosspost_parent == null && card.data.media == null ? (
            <div className="card p-3"  key={card.data.id}>
              <img
                src={card.data.url}
                className="card-img-top img-responsive"
                alt=""
                width="400px"
                height="300px"
              />
            </div>
          ) : null}
        </>
      ))}
    </div>
  );
};

export default Cards;
