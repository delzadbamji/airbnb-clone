import axios from "axios";

const getListings = () => axios.get("http://127.0.0.1:5000/hostings");

export default { getListings };
