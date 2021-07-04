import React from "react";
import "../HomePage/styles.css";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
                <label for="query">
                  <span className="elementTitle">Location</span>
                </label>
                <input
                  type="text"
                  id="query"
                  className="_loc"
                  placeholder="Anywhere"
                />
              </div>

              <div className="location dates">
                <div className="checking">
                  <label for="checkIn">
                    <span
                      className="elementTitle"
                      style={{ transform: "translate(-11px, 0px)" }}
                    >
                      check In
                    </span>
                  </label>
                  <input type="date" id="check" className="checkIn" />
                </div>
                <div className="checking">
                  <label for="checkIn">
                    <span
                      className="elementTitle"
                      style={{
                        width: "72px",
                        transform: "translate(5px, 0px)",
                      }}
                    >
                      Check Out
                    </span>
                  </label>
                  <input type="date" id="check" className="checkOut" />
                </div>
              </div>

              <div className="location dates">
                <div className="checking adults">
                  <label for="adults">
                    <span
                      className="elementTitle"
                      style={{ transform: "translate(-17px, 0px)" }}
                    >
                      Adults
                    </span>
                  </label>

                  <select name="adults" id="adults">
                    <option value="1">1</option>
                    <option selected="" value="2">
                      2
                    </option>
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
                  <label for="childs">
                    <span
                      className="elementTitle"
                      style={{ transform: "translate(0px, 0px)" }}
                    >
                      Children
                    </span>
                  </label>

                  <select name="adults" id="childs">
                    <option selected="" value="0">
                      0
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>
                <div className="search">
                  <button type="submit" className="searchButton">
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
