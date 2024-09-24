import React, {useEffect, useState} from 'react';
import TripCard from './TripCard';
import axiosInstance from "./axiosInstance";

export default function TripList() {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        // Fetch trips from the Spring Boot backend
        console.log("Setting up fetch for trips...");
        axiosInstance.get("/trips")
            .then((response) => setTrips(response.data))
            .catch((error) => console.error("Error fetching trips:", error));
    }, []);

    return (
        <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {trips.length > 0 ? (
                    trips.map((trip) => (
                        <TripCard key={trip.id} trip={trip}/>
                    ))
                ) : (
                    <p className="text-center text-gray-500">Loading trips...</p>
                )}
            </div>
        </div>
    );
}
