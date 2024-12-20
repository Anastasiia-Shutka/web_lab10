import React, { useState } from 'react';
import Card from './card';

const Prev = () => {
  const [showMore, setShowMore] = useState(false);

  const cardsData = [
    {
      id: 1,
      imgSrc: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSg82n4Szxg5gGwFNhoQgiyKueABcCzj3nvcqQtgJJ5xLNRRvaC",
      title: "Rose",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      imgSrc: "https://www.floretboutique.com.au/wp-content/uploads/2024/02/tulips.jpg",
      title: "Tulips",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      imgSrc: "https://m.media-amazon.com/images/I/61fdf8tNlsL._AC_UF894,1000_QL80_.jpg",
      title: "Carnations",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const additionalContent = (
    <div className='flowerFacts'>
      <h2>Facts about flowers</h2>
      <p>1. The world’s smallest flower is the watermeal, which measures just 0.1mm across<br></br>
        2. The world’s largest flower is the Rafflesia arnoldii, which can grow up to 3 feet across.</p>
    </div>
  );

  return (
    <div className="prev">
      <div className="prev_cards">
      {cardsData.map((card, id) => (
          <Card 
            key={id} 
            imgSrc={card.imgSrc} 
            title={card.title} 
            description={card.description}
            id={`${card.id}`}
          />
        ))}
      </div>

      <button className="prev_btn" id="prev_btn" onClick={() => setShowMore(prev => !prev)}>
        {showMore ? 'View Less' : 'View More'}
      </button>

      {showMore && additionalContent}
    </div>
  );
};

export default Prev;
