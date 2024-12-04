import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosSearch } from "react-icons/io";

const FilterSidebar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedEventType, setSelectedEventType] = useState({
    online: false,
    offline: false,
    all: false
  });
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [days, setDays] = useState(0);  // State for number of days
  const [price, setPrice] = useState({
    free: false,
    paid: false,
    all: false
  });
  const [rangeValue, setRangeValue] = useState(0); // Range slider value

  // Handle event checkbox changes
  const handleEventChange = (event) => {
    setSelectedEventType((prev) => ({
      ...prev,
      [event.target.name]: event.target.checked,
    }));
  };

  // Handle location checkbox changes
  const handleLocationChange = (country) => {
    setSelectedLocation((prev) =>
      prev.includes(country)
        ? prev.filter(item => item !== country)
        : [...prev, country]
    );
  };

  // Handle price checkbox changes
  const handlePriceChange = (event) => {
    setPrice((prev) => ({
      ...prev,
      [event.target.name]: event.target.checked,
    }));
  };

  // Handle range slider change
  const handleRangeChange = (e) => {
    setRangeValue(e.target.value);
    setDays(e.target.value); // Update days based on slider
  };

  // Clear filters function
  const clearFilters = () => {
    setStartDate(new Date());
    setEndDate(new Date());
    setSelectedEventType({
      online: false,
      offline: false,
      all: false
    });
    setSelectedLocation([]);
    setDays(0);
    setPrice({
      free: false,
      paid: false,
      all: false
    });
    setRangeValue(0); // Reset the range slider
  };

  return (
    <div className="w-72 bg-white border rounded-lg p-4 shadow-md relative mt-4">
      <h2 className="text-lg font-semibold mb-4">Narrow down your search</h2>

      {/* Calendar Section */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Calendar</label>
        <div className="mt-2">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            inline // This displays the calendar inline.
          />
        </div>
      </div>

      {/* Date Range Section */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Date Range</label>
        <div className="flex items-center gap-2">
          <span>Coming in</span>
          <input
            // type="number"
            min="0"
            value={days}
            onChange={(e) => {
              if (isNaN(e.target.value)) return;
              setDays(e.target.value)
            }}
            className="w-16 border rounded-lg p-2 text-center bg-[#E9ECE7] "  // Added appearance-none
          // placeholder="0"
          />
          <span>Days</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={rangeValue}
          onChange={handleRangeChange}
          className="w-full mt-2  accent-main focus:accent-main hover:accent-white-800 hover:bg-white"
        />
      </div>


      {/* Virtual Event Section */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Virtual Event</label>
        <div>
          <label className="flex items-center gap-2 mb-1">
            <input
              type="checkbox"
              name="online"
              checked={selectedEventType.online}
              onChange={handleEventChange}
              className="border rounded"
            />
            Online
          </label>
          <label className="flex items-center gap-2 mb-1">
            <input
              type="checkbox"
              name="offline"
              checked={selectedEventType.offline}
              onChange={handleEventChange}
              className="border rounded "
            />
            Offline
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="all"
              checked={selectedEventType.all}
              onChange={handleEventChange}
              className="border rounded"
            />
            All
          </label>
        </div>
      </div>

      {/* Location Section */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Location</label>
        <div className="flex items-center border rounded-lg relative">
          <IoIosSearch className="text-gray-400 absolute mx-2 border- left-0" />
          <input

            type="text"
            placeholder="Search for a country"
            className="w-full border rounded-lg p-2"
          />
        </div>
        <div className="mt-2 space-y-1">
          {["Egypt", "Germany", "USA", "UK", "UAE"].map((country) => (
            <label className="flex items-center gap-2" key={country}>
              <input
                type="checkbox"
                checked={selectedLocation.includes(country)}
                onChange={() => handleLocationChange(country)}
                className="border rounded"
              />
              {country}
            </label>
          ))}
        </div>
      </div>

      {/* Price Section */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Price</label>
        <div>
          <label className="flex items-center gap-2 mb-1">
            <input
              type="checkbox"
              name="free"
              checked={price.free}
              onChange={handlePriceChange}
              className="border rounded"
            />
            Free
          </label>
          <label className="flex items-center gap-2 mb-1">
            <input
              type="checkbox"
              name="paid"
              checked={price.paid}
              onChange={handlePriceChange}
              className="border rounded"
            />
            Paid
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="all"
              checked={price.all}
              onChange={handlePriceChange}
              className="border rounded"
            />
            All
          </label>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-between">
        <button
          onClick={clearFilters}
          className="text-sm text-green-600 underline"
        >
          Clear Filter
        </button>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
          Apply
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
