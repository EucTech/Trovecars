import React, { useEffect, useState } from "react";
import "./Items.css";
import "../Global_css.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";


const Items = (props) => {
  const [itemTitle, setTitle] = useState("");

  useEffect(() => {
    setTitle(props.title);
  }, [props.title]);

  const shortTitle = () => {
    if (itemTitle) {
      let value = itemTitle.slice(0, 28);
      return value + (itemTitle.length > 28 ? "..." : "");
    }
    return "";
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <Link to={`/product/${props.id}`} onClick={scrollToTop}>
      <div className="items" >
        <div className="items-img-section">
          <div
            className="items-image"
            style={{ backgroundImage: `url(${props.images})` }}
          ></div>
          <div className="items-numberof-images">
            <FontAwesomeIcon className="image-icon" icon={faImages} />
            <p>{props.numberOfImages}</p>
          </div>
        </div>
        <div className="items-info">
          <h4 className="items-title-short">{shortTitle()}</h4>
          <h4 className="items-title">{props.title}</h4>
          <h3>&#x20a6;{props.price}</h3>
          <hr />
          <div className="items-yr-ty-tran">
            <Button className="item-btn">{props.year}</Button>
            <h5>{props.transmission}</h5>
            <h5 className="fuel-type">{props.fuel_type}</h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Items;
