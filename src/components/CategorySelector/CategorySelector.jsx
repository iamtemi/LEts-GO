import { useState } from "react";
import "./CategorySelector.scss";
import { Link } from "react-router-dom";

export default function CategorySelector({ images, buttonText }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImgClick = (index) => {
    setSelectedImageIndex(selectedImageIndex === index ? null : index);
  };

  return (
    <div className="category">
      {images && images.length > 0 ? (
        images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Category Image"
            className={`category__image ${
              selectedImageIndex === index ? "category__image--selected" : ""
            }`}
            onClick={() => handleImgClick(index)}
          />
        ))
      ) : (
        <p>No images available</p>
      )}
      <Link className="button">{buttonText}</Link>
    </div>
  );
}
