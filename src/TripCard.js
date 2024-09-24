export default function TripCard({trip}) {
    return (
        <div className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg">
            <img src={trip.imgUrl} alt={trip.title} className="w-full h-48 object-cover"/>
            <div className="p-4">
                <h3 className="text-lg font-semibold">{trip.title}</h3>
                <p className="text-gray-600">{trip.description}</p>
                <p className="mt-2 font-bold text-blue-500">€{trip.budget}</p>
                <br/>
                <p className="mt-2 font-bold text-blue-500">{trip.userCreatedName}</p>
            </div>
        </div>
    );
}
