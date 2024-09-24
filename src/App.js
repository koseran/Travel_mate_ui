import NavBar from "./NavBar";
import TripList from "./TripList";
import TripFilter from "./TripFilter";

function App() {
    return (
        <div>
            <NavBar/>
            <div className="container mx-auto p-4">
                <div className="flex flex-col lg:flex-row gap-4">
                    {/* Φίλτρα */}
                    <div className="w-full lg:w-1/4 bg-gray-200 p-4">
                        <TripFilter/>
                    </div>
                    <TripList/>
                </div>
            </div>
        </div>
    );
}

export default App;
