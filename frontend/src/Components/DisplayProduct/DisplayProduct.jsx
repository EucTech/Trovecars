import React, { useRef, useState } from "react";
import "./DisplayProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck as solidCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck as regularCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const DisplayProduct = (props) => {
  const { product } = props;

  // image state
  const [mainImage, setmainImage] = useState(Object.values(product.images)[0]);
  // show more
  const [showMore, setShowMore] = useState(false);

  const subImageRef = useRef("null");

  const changeMainImage = (image, e) => {
    setmainImage(image);
    const clickedImage = e.target;
    clickedImage.classList.add("sub-image-active");
    subImageRef.current.querySelectorAll(".sub-image").forEach((element) => {
      if (element !== clickedImage) {
        element.classList.remove("sub-image-active");
      }
    });
  };

  return (
    <div className="displayproduct">
      <div className="displayproduct-left">
        <div className="header">
          <h1>{product.title}</h1>
          <div className="displayproduct-header-info">
            <p>{product.year}</p>
            <FontAwesomeIcon className="dot-icon" icon={faCircleDot} />
            <p>{product.type}</p>
            <FontAwesomeIcon className="dot-icon" icon={faCircleDot} />
            <p>{product.fuel_type}</p>
          </div>
        </div>
        <div className="displayproduct-left-images">
          <div className="displayproduct-main-image">
            <div
              className="main-image"
              style={{ backgroundImage: `url(${mainImage})` }}
            ></div>
          </div>
          <div className="displayproduct-images">
            {Object.values(product.images).map((image, index) => (
              <div
                key={index}
                ref={subImageRef}
                className={`sub-image ${
                  mainImage === image ? "sub-image-active" : ""
                }`}
                style={{ backgroundImage: `url(${image})` }}
                onClick={(e) => changeMainImage(image, e)}
              ></div>
            ))}
          </div>
        </div>

        <div className="displayproduct-right sm-screen-display-right">
          <h2>&#x20a6;{product.price}</h2>
          <div className="displayproduct-right-all-info">
            <div>
              <p>Make:</p>
              <p>{product.make}</p>
            </div>
            <div>
              <p>Model:</p>
              <p>{product.model}</p>
            </div>
            <div>
              <p>Drive Type:</p>
              <p>{product.drive_type}</p>
            </div>
            <div>
              <p>Transmission:</p>
              <p>{product.transmission}</p>
            </div>
            <div>
              <p>Condition:</p>
              <p>{product.condition}</p>
            </div>
            <div>
              <p>Engine Size:</p>
              <p>{product.engine_size}</p>
            </div>
            <div>
              <p>Doors:</p>
              <p>{product.doors}</p>
            </div>
            <div>
              <p>Cylinders:</p>
              <p>{product.cylinders}</p>
            </div>
            <div>
              <p>Color:</p>
              <p>{product.color}</p>
            </div>
            <div>
              <p>Fuel Type:</p>
              <p>{product.fuel_type}</p>
            </div>
            <div>
              <p>Vin:</p>
              <p>{product.vin}</p>
            </div>
          </div>
          <div className="contact-info">
            <p className="btn btn1">
              <span>
                <FontAwesomeIcon className="ww" icon={faWhatsapp} />
              </span>
              <a href={`tel:${product.whatsapp_number}`}>Chat via WhatsApp</a>
            </p>
            <a className="btn btn2" href={`mailto:${product.email}`}>
              Send message
            </a>
            <p className="btn btn3">Buy Now</p>
          </div>
        </div>

        <div className="displayproduct-left-description">
          <h2>Description</h2>
          <div className="text">
            {showMore
              ? product.description
              : `${product.description.substring(0, 350)}...`}
            <h5
              className="show-more-less"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show less" : "Show more"}
            </h5>
          </div>
        </div>
        <div className="features">
          <h1>Safety Features</h1>
          <div className="features-items">
            {Object.entries(product.safety_features).map(
              ([feature, enabled], index) =>
                enabled && (
                  <div className="feature" key={index}>
                    <p>
                      <span>
                        <FontAwesomeIcon icon={solidCircleCheck} />
                      </span>
                      {feature}
                    </p>
                  </div>
                )
            )}
          </div>
        </div>

        <div className="display-video">
          <video controls>
            <source src={product.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="features">
          <h1>All Features</h1>
          <div className="features-items">
            {Object.entries(product.all_features).map(
              ([feature, enabled], index) =>
                enabled && (
                  <div className="feature" key={index}>
                    <p>
                      <span>
                        <FontAwesomeIcon icon={regularCircleCheck} />
                      </span>
                      {feature}
                    </p>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
      <div className="displayproduct-right large-screen-display-right">
        <h1>{product.title}</h1>
        <div className="displayproduct-right-info">
          <p>{product.year}</p>
          <FontAwesomeIcon className="dot-icon" icon={faCircleDot} />
          <p>{product.type}</p>
          <FontAwesomeIcon className="dot-icon" icon={faCircleDot} />
          <p>{product.fuel_type}</p>
        </div>
        <h2>&#x20a6;{product.price}</h2>
        <div className="displayproduct-right-all-info">
          <div>
            <p>Make:</p>
            <p>{product.make}</p>
          </div>
          <div>
            <p>Model:</p>
            <p>{product.model}</p>
          </div>
          <div>
            <p>Drive Type:</p>
            <p>{product.drive_type}</p>
          </div>
          <div>
            <p>Transmission:</p>
            <p>{product.transmission}</p>
          </div>
          <div>
            <p>Condition:</p>
            <p>{product.condition}</p>
          </div>
          <div>
            <p>Engine Size:</p>
            <p>{product.engine_size}</p>
          </div>
          <div>
            <p>Doors:</p>
            <p>{product.doors}</p>
          </div>
          <div>
            <p>Cylinders:</p>
            <p>{product.cylinders}</p>
          </div>
          <div>
            <p>Color:</p>
            <p>{product.color}</p>
          </div>
          <div>
            <p>Fuel Type:</p>
            <p>{product.fuel_type}</p>
          </div>
          <div>
            <p>Vin:</p>
            <p>{product.vin}</p>
          </div>
        </div>
        <div className="contact-info">
          <p className="btn btn1">
            <span>
              <FontAwesomeIcon className="ww" icon={faWhatsapp} />
            </span>
            <a href={`tel:${product.whatsapp_number}`}>Chat via WhatsApp</a>
          </p>
          <a className="btn btn2" href={`mailto:${product.email}`}>
            Send message
          </a>
          <p className="btn btn3">Buy Now</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayProduct;
