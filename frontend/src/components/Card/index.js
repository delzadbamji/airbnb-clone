import React from "react";
import "./styles.css";
import axios from "axios";
import API from "../../Services/API";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  calculateRatings = () => {
    let stars = this.props.property.review_scores_rating / 20;
    return stars;
  };

  capitalizeName = () => {
    return (
      this.props.property.neighbourhood.charAt(0).toUpperCase() +
      this.props.property.neighbourhood.slice(1)
    );
  };

  render() {
    return (
      <>
        <div className="container" onClick = {this.props.onClick}>
          <div>
            <img
              alt="Property Pic"
              className="image"
              src={this.props.property.picture_url}
            ></img>

            <div className="propertyName">
              <span className="propName">{this.props.property.name}</span>
            </div>
            <div className="NeighbourhoodName">
              <span className="area">Location: {this.capitalizeName()}</span>
            </div>

            <div className="rating">
              <span className="ratings">
                <i
                  className="fa fa-star"
                  style={{ color: "rgb(255, 56, 92)" }}
                  aria-hidden="true"
                ></i>
                {` ${this.calculateRatings()}`}
              </span>
              <span> ({this.props.property.number_of_reviews} </span>
              reviews)
            </div>

            <div>
              <span className="details">
                {this.props.property.accommodates} guests ·{" "}
              </span>

              <span className="details">
                {" "}
                {this.props.property.bedrooms
                  ? `${this.props.property.bedrooms} bedroom  ·  `
                  : `Studio  · `}
              </span>

              <span className="details">{this.props.property.beds} bed </span>

              {this.props.property.bathrooms_text && (
                <span className="details">{`  ·  ${this.props.property.bathrooms_text}`}</span>
              )}
            </div>
            <div className="pricetag">
              <span className="price">{this.props.property.price}</span>
              <span className="price-text"> / night</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Card;
