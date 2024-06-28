import { useState } from "react";
import "./CategorySelector.scss";
import { Link } from "react-router-dom";

export default function CategorySelector({ images, buttonText, buttonLink }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImgClick = (index) => {
    setSelectedImageIndex(selectedImageIndex === index ? null : index);
  };

  return (
    <div className="category">
      <div className="category__container">
        {images && images.length > 0 ? (
          images.map((image, index) => (
            <div
              key={index}
              className={`category__card ${
                selectedImageIndex === index ? "category__card--selected" : ""
              }`}
            >
              <img
                src={image.image}
                alt="Category Image"
                className="category__image"
                onClick={() => handleImgClick(index)}
              />
              <p>{image.description}</p>
            </div>
          ))
        ) : (
          <p>No images available</p>
        )}
      </div>
      <Link to={buttonLink} className="button">
        {buttonText}
      </Link>
    </div>
  );
}
