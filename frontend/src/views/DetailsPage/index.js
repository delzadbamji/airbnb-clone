import React, { Component } from "react";
import "../DetailsPage/styles.css";
import PropTypes, { any } from "prop-types";
import logo from "../../assets/Airbnb_Logo.svg";
import logo1 from "../../assets/homepage.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {homeDetails: {}};
  }

  getData = async (homes) => {
    await this.setState({homeDetails: homes})
  };

  componentDidMount() {
    console.log(this.props.location.state.property)
    this.getData(this.props.location.state.property)
    console.log(this.state.homeDetails)
  }
  
    splitAmenities = () => {
      console.log(this.props.location.state.property.amenities)
      var amenitiesSplit = ""
      var amenities = this.props.location.state.property.amenities
      for (let i = 0; i < amenities.length; i++){
        amenitiesSplit += amenities[i] + " ";
      }
      return amenitiesSplit;
    }
  
  render() {
    

    const location = {
      lat: this.state.homeDetails.latitude,
      lng: this.state.homeDetails.longitude,
      // address: this.state.homeDetails.address.street,\
      address: this.state.homeDetails.neighbourhood
    }
    const src = {
      src: "https://maps.google.com/maps?q=" + location.address + "&t=&z=13&ie=UTF8&iwloc=&output=embed",
      latlong: "https://maps.google.com/maps?q=" + location.lat + "," + location.lng + "&hl=es;z=14&output=embed"
    }
    
    var string_identity_verified = ""
    if (this.state.homeDetails.host_identity_verified === "t"){
      string_identity_verified = "Identity verified"
    }

    var string_superhost = ""
    if (this.state.homeDetails.host_is_superhost === "t"){
      string_superhost = "Superhost"
    }

    // var amenities = this.state.homeDetails.amenities;
    
    
    // var amenitiesAsString = amenities.join(', ');
    // amenities = amenities.slice(0,8)
    // console.log(amenities.length)
    // amenities = amenities.toLowerCase().replace(/[ *_#]/g, '');
    
    return (
      <>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"
        />
        <div>
          <div className = "title">
            <br></br>
            <h3>{this.state.homeDetails.name}</h3>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <h4>{this.state.homeDetails.host_neighbourhood}</h4>
            <br></br>
          </div>
          <div className = "below-title">
            <nav className="nav">
            <p>
              <a href ="#review">{this.state.homeDetails.review_scores_rating} ({this.state.homeDetails.number_of_reviews} reviews)</a> 
              &nbsp; &nbsp; &nbsp; &nbsp;{this.state.homeDetails.host_location}
            </p>
            <h1 className= "col-md-5"></h1>
            <button type="button" className="btn btn-light">Share</button>
            <button type="button" className="btn btn-light">Save</button>
            </nav>
          </div>
        </div>
        {/* <div>
            <nav className = "nav">
                <a className="nav-link disabled" href="#">4.2</a>
                <a className="nav-link disabled" href="#">32 reviews</a>
                <a className="nav-link disabled" href="#">Rochester</a>
                <h1 className= "col-md-7"></h1>
                <button type="button" className="btn btn-light">Share</button>
                <button type="button" className="btn btn-light">Save</button>
            </nav>
        </div> */}

        <div id="carouselExampleIndicators image-carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={this.state.homeDetails.picture_url} alt="First slide"/>
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
              <br></br>
              <br></br>
              <div className="hostinfo">
                <h4>{this.state.homeDetails.name} hosted by {this.state.homeDetails.host_name}</h4>
                <h5>{this.state.homeDetails.accommodates} Guests &nbsp;&nbsp; {this.state.homeDetails.beds} bed &nbsp;&nbsp; {this.state.homeDetails.bathrooms_text}</h5>
                <h5>{this.state.homeDetails.property_type}</h5>
              </div>
          
              {/* <hr className="line"/>
              <div>
                  <img src={logo} className="icon" height="" width=""alt = ""/> <p>{this.state.homeDetails.property_type}</p>
                  <img src="" className="icon" height="" width=""alt = "Icon"/> <p></p>
                  <img src="" className="icon" height="" width=""alt = "Icon"/> <p></p>
                  &nbsp &nbsp <p>Body content</p>
                </div> */}
          
              <hr className="line"/>
          
              <div className="hostinfo">
                <p>{this.state.homeDetails.description}</p>
              </div>
          
              <hr className="line"/>
          
              <div className="hostinfo">
                <h4>What this place offers</h4>
                <p>{this.splitAmenities()}</p>
              </div>
          
              <hr className="line"/>
              <div className="flex-container">
              <div className="calendar">
                
                <table style={{float: "left"}}>
                <h4>Jul 21</h4>
                  <tr>
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>12</td>
                    <td>13</td>
                    <td>14</td>
                    <td>15</td>
                    <td>16</td>
                    <td>17</td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td>19</td>
                    <td>20</td>
                    <td>21</td>
                    <td>22</td>
                    <td>23</td>
                    <td>24</td>
                  </tr>
                  <tr>
                    <td>25</td>
                    <td>26</td>
                    <td>27</td>
                    <td>28</td>
                    <td>29</td>
                    <td>30</td>
                    <td>31</td>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </tr>
                  
                </table>
                <table style={{float: "center"}}>
                <h4>Aug 21</h4>
                  <tr>
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                    <td>13</td>
                    <td>14</td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>16</td>
                    <td>17</td>
                    <td>18</td>
                    <td>19</td>
                    <td>20</td>
                    <td>21</td>
                  </tr>
                  <tr>
                    <td>22</td>
                    <td>23</td>
                    <td>24</td>
                    <td>25</td>
                    <td>26</td>
                    <td>27</td>
                    <td>28</td>
                  </tr>
                  <tr>
                    <td>29</td>
                    <td>30</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
                {/* <p style={{float:"right"}}>Clear dates</p> */}
                <button type="button" className="btn btn-light" style={{float: "right"}}>Clear dates</button>
              </div>
              </div>
              < hr className="line"/>
          
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
          
           
          <div id = "review" className="review">
            <h4>Reviews</h4>
            <p>{this.state.homeDetails.review_scores_rating/20} - {this.state.homeDetails.number_of_reviews} Reviews</p>
            <table>
            <tr >
              <td>Cleanliness &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;{this.state.homeDetails.review_scores_cleanliness/2}</td>
              <td>&nbsp; &nbsp; &nbsp; &nbsp; Accuracy &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{this.state.homeDetails.review_scores_accuracy/2}</td> 
            </tr>
            <tr>
              <td>Communication &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {this.state.homeDetails.review_scores_communication/2}</td>
              <td>&nbsp; &nbsp; &nbsp; &nbsp; Location &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {this.state.homeDetails.review_scores_location/2}</td>
            </tr>
            <tr>
              <td>Check-in &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{this.state.homeDetails.review_scores_checkin/2}</td>
              <td>&nbsp; &nbsp; &nbsp; &nbsp; Value &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{this.state.homeDetails.review_scores_value/2}</td>
            </tr>
            </table>
            </div>

        <div>
          <hr className="bigline"/>
          <br></br>
          <br></br>
          <br></br>
          <h4 className ="map">Where you'll be</h4>
        </div>
        
        <div id="map-container-google-1" class="z-depth-1-half map-container" style={{height: "500px"}}>
        <iframe src={src.latlong} width="100%" height="400" frameborder="0" title={src.src} style={{border:"0"}}></iframe>
        </div>

        <div>
          <div className="hostinfo">
            
            <h3><img src={this.state.homeDetails.host_thumbnail_url}></img> Hosted by {this.state.homeDetails.host_name}</h3>
            <h5>{this.state.homeDetails.number_of_reviews} Reviews &nbsp; {string_identity_verified} &nbsp; {string_superhost}</h5>
            <br></br>
            <p>{this.state.homeDetails.host_about}</p>
            <br></br>
            <h4>During your stay</h4>
            <p>The owners are available {this.state.homeDetails.host_response_time} in case you have any questions or concerns.</p>
          </div>
          <div className="hostinfo">
            <table>
              <tr>
                <th>Response Rate: </th>
                <td>{this.state.homeDetails.host_response_rate}</td>
              </tr>
              <tr>
                <th>Response Time: </th>
                <td>{this.state.homeDetails.host_response_time}</td>
              </tr>
              <tr>
                <th>Verified: </th>
                <td>{this.state.homeDetails.host_verifications}</td>
              </tr>
            </table>
          </div>
        </div>  
        
        
        
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      </>
    );
  }
}

DetailsPage.propTypes = {
  data: PropTypes.object
}
export default DetailsPage;
