import React from 'react';

const Card= ({
  cardTitle,
  cardDescription,
  imageURL,
  moreURL,
}: {
  cardTitle: string
  cardDescription: string
  imageURL: string
  moreURL: string
}): React.ReactElement => {
  return (
    <div className="p-2 flex inline-flex">
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure><img src={imageURL} alt="Card" /></figure>
        <div className="card-body">
          <h2 className="card-title">{cardTitle}</h2>
          <p>{cardDescription}</p>
          <div className="card-actions justify-end">
            <button onClick={(e) => {
              e.preventDefault();
              window.location.href=moreURL;
            }} className="btn btn-outline btn-error">See More</button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Card;
