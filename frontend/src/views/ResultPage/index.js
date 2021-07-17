import React from "react";
import API from "../../Services/API";
import Card from "../../components/Card/index";
import "./style.css";

class ResultPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: []
    };
  }

  getData = async (homes) => {
    await this.setState({ listings: homes });
  };

  getAllListings = async () => {
    API.getListings().then((res) => {
      const listings = res.data.hostings;
      this.getData(listings);
    });
  };

  componentDidMount() {
    if (this.props.location.state.loc) {
      let location = this.props.location.state.loc;

      API.getListingDetails(location)
        .then((res) => {
          const homes = res.data.homes;
          this.getData(homes);
        })
        .catch(console.log("error in fetching data"));
    } else {
      this.getAllListings();
    }
  }
  render() {
    return (
      <div className="cardList">
        {this.state.listings.map((property) => {
          return <Card key={property.id} property={property} />;
        })}
      </div>
    );
  }
}
export default ResultPage;
