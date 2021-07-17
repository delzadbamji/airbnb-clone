import axios from "axios";

const getListings = () => axios.get("http://127.0.0.1:5000/hostings");
const getListingDetails = (location) =>
  axios.get("http://127.0.0.1:5000/homes", { params: { loc: location } });
export default { getListings, getListingDetails };
