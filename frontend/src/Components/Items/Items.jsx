import React, { useEffect, useState } from "react";
import "./Items.css";
import "../Global_css.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@material-tailwind/react";
// import car_image1 from "../Assets/ferrari_3.jpg";
// import car_image2 from "../Assets/ferrari_1.jpg";
// import car_image3 from "../Assets/ferrari_2.jpg";

const Items = (props) => {

    const [itemTitle, setTitle] = useState("");

    useEffect(() => {
        setTitle(props.title);
    }, [props.title]);

    const shortTitle = () => {
        if (itemTitle)
        {
            let value = itemTitle.slice(0, 28);
            return value + (itemTitle.length > 28 ? "..." : "");
        }
        return ""
    }

  return (
    <div className="items">
      <div className="items-img-section">
        <div className="items-image" style={{ backgroundImage: `url(${props.images})` }}></div>
        <div className="items-numberof-images">
          <FontAwesomeIcon className="image-icon" icon={faImages} />
          <p>{props.numberOfImages}</p>
        </div>
      </div>
      <div className="items-info">
        <h4>{shortTitle()}</h4>
        <h3>&#x20a6;{props.price}</h3>
        <hr />
        <div className="items-yr-ty-tran">
          <Button className="item-btn" >{props.year}</Button>
          <h5>{props.transmission}</h5>
          <h5>{props.fuel_type}</h5>
        </div>
      </div>
    </div>
  );
};

export default Items;
