import React from "react";
import API from "../../Services/index";
import Card from "../../components/Card/index";
import "./style.css";

class ResultPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: []
    };
  }

  getData = async (l) => {
    await this.setState({ listings: l });
  };

  componentDidMount() {
    API.getListings().then((res) => {
      const listings = res.data.hostings;
      this.getData(listings);
    });
  }
  render() {
    return (
      <div className="cardList">
        {this.state.listings.map((property) => {
          return <Card key={property._id} property={property} />;
        })}
      </div>
    );
  }
}
export default ResultPage;
