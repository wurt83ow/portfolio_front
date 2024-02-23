import React from "react";

function BigCard({ card }) {
  return (
    <div className="row">
      <div className="col-md porfolio_card">
        <div className="portfolio_image">
          <img src={card.src} alt={card.alt} />
        </div>
        <div className="portfolio_link">
          <a href={card.href}>{card.hrefText}</a>
        </div>
      </div>
    </div>
  );
}

export default BigCard;
