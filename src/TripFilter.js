import React from 'react';

const TripFilter = () => {
    return (
        <div className="p-4 max-w-full">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>

            {/* Date Range */}
            <div className="mb-4">
                <label className="block mb-2 font-semibold">Dates (From - To):</label>
                <div className="flex flex-col sm:flex-row gap-4">
                    <input
                        type="date"
                        id="start-date"
                        className="w-full sm:w-1/2 border border-gray-300 rounded p-2"
                        placeholder="From"
                    />
                    <input
                        type="date"
                        id="end-date"
                        className="w-full sm:w-1/2 border border-gray-300 rounded p-2"
                        placeholder="To"
                    />
                </div>
            </div>

            {/* Country Selector */}
            <div className="mb-4">
                <label htmlFor="country" className="block mb-2 font-semibold">Country:</label>
                <select
                    id="country"
                    className="w-full border border-gray-300 rounded p-2 bg-white"
                >
                    <option value="greece">
                        🇬🇷 Greece
                    </option>
                    <option value="italy">
                        🇮🇹 Italy
                    </option>
                    <option value="spain">
                        🇪🇸 Spain
                    </option>
                    <option value="usa">
                        🇺🇸 USA
                    </option>
                    <option value="germany">
                        🇩🇪 Germany
                    </option>
                    {/* Add more country options here */}
                </select>
            </div>

            {/* Gender Selector */}
            <div className="mb-4">
                <label htmlFor="gender" className="block mb-2 font-semibold">Gender:</label>
                <select
                    id="gender"
                    className="w-full border border-gray-300 rounded p-2 bg-white"
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>

            {/* Trip Type Selector */}
            <div className="mb-4">
                <label htmlFor="trip-type" className="block mb-2 font-semibold">Trip Type:</label>
                <select
                    id="trip-type"
                    className="w-full border border-gray-300 rounded p-2 bg-white"
                >
                    <option value="couple">Couple</option>
                    <option value="solo">Solo</option>
                    <option value="group">Group</option>
                    <option value="family">Family</option>
                </select>
            </div>

            {/* Price Range */}
            <div className="mb-4">
                <label htmlFor="price" className="block mb-2 font-semibold">Price Range:</label>
                <input type="range" id="price" className="w-full" />
            </div>
        </div>
    );
};

export default TripFilter;
