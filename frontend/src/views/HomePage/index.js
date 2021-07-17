import React from "react";
import "../HomePage/styles.css";
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      checkIn: null,
      checkOut: null,
      adults: 1,
      children: 0
    };
  }

  locationOnChange = (e) => {
    this.setState({ location: e.target.value });
  };

  checkInOnChange = (e) => {
    this.setState({ checkIn: e.target.value });
  };

  checkOutOnChange = (e) => {
    this.setState({ checkOut: e.target.value });
  };

  adultsOnChange = (e) => {
    this.setState({ adults: e.target.value });
  };

  childrenOnChange = (e) => {
    this.setState({ children: e.target.value });
  };

  gotoResults = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    // if (
    //   this.state.location !== null &&
    //   this.state.adults >= 1 &&
    //   this.state.checkIn !== null &&
    //   this.state.checkOut !== null
    // ) {
    this.props.history.push({
      pathname: `/results/${this.state.location}`,
      state: { loc: this.state.location }
    });
    // } else {
    //   console.log("some details are incomplete");
    // }
  };

  render() {
    return (
      <>
        <div className="parent">
          <div className="outerchild"></div>
          <div className="child">
            <h1>Find places to stay on Airbnb</h1>
            <p className="header-description">
              Discover entire homes and private rooms perfect for any trip.
            </p>

            <form>
              <div className="location">
                <label htmlFor="query">
                  <span className="elementTitle">Location</span>
                </label>
                <input
                  name="loc"
                  type="text"
                  id="query"
                  className="_loc"
                  placeholder="Anywhere"
                  onChange={(e) => this.locationOnChange(e)}
                />
              </div>

              <div className="location dates">
                <div className="checking">
                  <label htmlFor="check">
                    <span
                      className="elementTitle"
                      style={{ transform: "translate(-78px, -22px)" }}
                    >
                      check In
                    </span>
                  </label>
                  <input
                    name="checkIn"
                    type="date"
                    id="check"
                    className="checkIn"
                    onChange={(e) => this.checkInOnChange(e)}
                  />
                </div>
                <div className="checking">
                  <label htmlFor="check">
                    <span
                      className="elementTitle"
                      style={{
                        width: "72px",
                        transform: "translate(-64px, -22px)"
                      }}
                    >
                      Check Out
                    </span>
                  </label>
                  <input
                    name="checkOut"
                    type="date"
                    id="check"
                    className="checkOut"
                    onChange={(e) => this.checkOutOnChange(e)}
                  />
                </div>
              </div>

              <div className="location dates">
                <div className="checking adults">
                  <label htmlFor="adults" style={{ height: "20px" }}>
                    <span
                      className="elementTitle"
                      style={{ transform: "translate(-17px, 0px)" }}
                    >
                      Adults
                    </span>
                  </label>

                  <select
                    name="adults"
                    id="adults"
                    defaultValue={this.state.adults}
                    onChange={(e) => this.adultsOnChange(e)}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                  </select>
                </div>
                <div className="checking children">
                  <label htmlFor="childs" style={{ height: "20px" }}>
                    <span
                      className="elementTitle"
                      style={{ transform: "translate(0px, 0px)" }}
                    >
                      Children
                    </span>
                  </label>

                  <select
                    name="children"
                    id="childs"
                    defaultValue={this.state.children}
                    onChange={(e) => this.childrenOnChange(e)}
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>
                <div className="search">
                  <button
                    type="submit"
                    className="searchButton"
                    onClick={(e) => this.gotoResults(e)}
                  >
                    Search{" "}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default HomePage;
