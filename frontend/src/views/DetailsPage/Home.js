import React, { Component } from "react";
import "../DetailsPage/styles.css";
import PropTypes, { any } from "prop-types";
import logo from "../../assets/Airbnb_Logo.svg";
import logo1 from "../../assets/homepage.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
// import GoogleMapReact from 'google-map-react';
// import AnyReactComponent from 'react';
// import LocationPin from "react";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  

  render() {
    const location = {
      lat: 40,
      lng: 21,
      // address: this.props.data.address.street,\
      address: "Faridabad, Haryana"
    }
    const src = {
      src: "https://maps.google.com/maps?q=" + location.address + "&t=&z=13&ie=UTF8&iwloc=&output=embed"
    }
    return (
      <>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"
        />
        <div>
          <div className = "title">
            {/* <h1>div for property name, 'superhost/not', location, review link, share save button  {this.props.data.name} </h1> */}
            <h3>{this.props.data.name}</h3>
            <h4>{this.props.data.host.host_neighbourhood}</h4>
            <br></br>
          </div>
          <div className = "below-title">
            <h4>
              <a href ="#review">{this.props.data.review_scores.review_scores_rating.$numberInt} ({this.props.data.number_of_reviews.$numberInt} reviews)</a> 
              &nbsp; &nbsp; &nbsp; &nbsp;{this.props.data.host.host_location}
            </h4>
          </div>
        </div>

        <div>
            <nav className="nav">
                <a className="nav-link disabled" href="">Tiny Tranquility near City Activity</a>
            </nav>
        </div>
        <div>
            <nav className = "nav">
                <a className="nav-link disabled" href="#">4.2</a>
                <a className="nav-link disabled" href="#">32 reviews</a>
                <a className="nav-link disabled" href="#">Rochester</a>
                <h1 className= "col-md-7"></h1>
                <button type="button" className="btn btn-light">Share</button>
                <button type="button" className="btn btn-light">Save</button>
            </nav>
        </div>

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel"  style={{ height: "700px", width: "1500px", padding: "100px", margin: "auto"}}>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={logo1} alt="First slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={logo} alt="Second slide"/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

          <div className="flex-container attribute">
            <div className="left-element">
              <div>
                Listing info!
              </div>
          
              <hr className="line"/>
              <div>
                <p>Attributes of House</p>
                {/* <!-- for attribute in attributes: --> */}
                  <img src="" height="" width=""alt = "Icon"/> <p>Heading</p>
                  &nbsp &nbsp <p>Body content</p>
                </div>
          
              <hr className="line"/>
          
              <div>
                <p>Summary of house</p>
                <p>Some random stuff</p>
              </div>
          
              <hr className="line"/>
          
              <div>
                <p>Places for sleeping</p>
              </div>
          
              <hr className="line"/>
          
              <div>
                <p>What this place offers</p>
              </div>
          
              <hr className="line"/>
              
                  <div>
                    <p>Schedule</p>
                  </div>
              < hr className="line"/>
            </div>
          
            <div className="right-element">
              <div className="checkinbox">
                <form>
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
                        <input type="date" id="check" className="checkIn" />
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
                        <input type="date" id="check" className="checkOut" />
                      </div>
                    </div>

                    <div className="location dates">
                      <div className="checking adults">
                        <label htmlFor="adults" style={{ height: "20px" }}>
                          <span
                            className="elementTitle"
                            style={{ transform: "translate(-17px, 0px)" }}
                          >
                            Guests
                          </span>
                        </label>

                        <select name="adults" id="adults">
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
                      <div className="search">
                        <button type="submit" className="searchButton">
                          Check Availability{" "}
                        </button>
                      </div>
                    </div>
                  </form>
              </div>
            </div>
          </div>
          
          <div id = "review" className="review">
            <h3>Reviews</h3>
            <table className="review-table">
            <tr >
              <td>Cleanliness</td>
              <td>Accuracy</td> 
            </tr>
            <tr>
              <td>Communication</td>
              <td>Location</td>
            </tr>
            <tr>
              <td>Check-in</td>
              <td>Value</td>
            </tr>
            </table>

            <table className="review-table">
            <tr >
              <th>Reviewer 1</th>
              <td>Review 1</td> 
            </tr>
            <tr>
              <th>Reviewer 2</th>
              <td>Review 2</td>
            </tr>
            <tr>
              <th>Reviewer 3</th>
              <td>Review 3</td>
            </tr>
            </table>
            </div>

        <div>
          <hr className="line"/>
          <br></br>
          <br></br>
          <br></br>
          <h3 style={{textAlign: "left", marginLeft: "100px"}}>Where you'll be</h3>
        </div>
        <div id="map-container-google-1" class="z-depth-1-half map-container" style={{height: "500px"}}>
        <iframe src={src.src} width="100%" height="400" frameborder="0" title={src.src} style={{border:"0"}}></iframe>')
        </div>
          
          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      </>
    );
  }
}

Home.propTypes = {
  data: PropTypes.object
}
export default Home;
