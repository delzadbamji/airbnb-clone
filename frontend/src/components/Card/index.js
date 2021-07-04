import React from "react";
import "./styles.css";
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      realEstate: null,
    };
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="image">
            <img src=""></img>
          </div>
          <div className="rating">4.79 (164 reviews)</div>
          <div className="description">
            Entire cottage | Ithaca | Lake Views
          </div>
          <div className="pricetag">$130 / night</div>
        </div>
      </>
    );
  }
}

// this.state.realEstate.map( eachProperty =>
// return(
// <img src={eachProperty.hosting_url} ></img>
// <accc> eachProperty.accomodaion </accc>
// )
// );
export default Card;
