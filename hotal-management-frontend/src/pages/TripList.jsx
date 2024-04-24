import { useEffect, useState } from "react";
import "../styles/List.scss";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setTripList } from "../redux/state";
import ListingCard from "../components/ListingCard";
import Footer from "../components/Footer"

const TripList = () => {
  const [loading, setLoading] = useState(true);
  const userId = useSelector((state) => state.user.id);
  const tripList = useSelector((state) => state.user.tripList);
  const token = useSelector((state) => state.token);

  const dispatch = useDispatch();

  const getTripList = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/v1/hotal-management/user/${userId}/trips`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON
            "Authorization": `${token}`, // Example: Authorization header for authentication
            // Add other headers as needed
        },
        }
      );

      const data = await response.json();
      console.log("data",data);
      dispatch(setTripList(data));
      setLoading(false);
    } catch (err) {
      console.log("Fetch Trip List failed!", err.message);
    }
  };

  useEffect(() => {
    getTripList();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      <h1 className="title-list">Your Trip List</h1>
      <div className="list">
        {tripList?.map(({ listingid,listing,host, hostid, startDate, endDate, totalPrice, booking=true }) => (
          
          <ListingCard
          
            listingId={listing.id}
            creator={host.id}
            listingPhotoPaths={listing.listingPhotoPaths}
            city={listing.city}
            province={listing.province}
            country={listing.country}
            category={listing.category}
            startDate={startDate}
            endDate={endDate}
            totalPrice={totalPrice}
            booking={booking}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default TripList;
