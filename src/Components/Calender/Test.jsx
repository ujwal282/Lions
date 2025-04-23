import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Test = () => {
  const events = {
    "2025-04-19": {
      title: "First Cabinet Meeting (Cabinet Officers Installation)",
      location: "Dhulikhel, Kavre",
      time: "12:00 pm - 1:00 pm",
    },
    // "2025-04-21": {
    //     title: "Chicken party",
    //     location: "new Baneshowr",
    //     time: "12:00 pm - 1:00 pm",
    //   },
    //   "2025-04-24": {
    //     title: "charity",
    //     location: "new Baneshowr",
    //     time: "12:00 pm - 1:00 pm",
    //   }
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const getEventForDate = (date) => {
    const dateString = date.toISOString().split("T")[0];
    return events[dateString];
  };

  return (
    <div className="bg-[#4185c1] p-4 h-lvh">
     <h1 className="text-center text-4xl text-black font-bold">Event Calender</h1>
    <div className=" flex   items-center gap-20 justify-center bg-[#4185c1] p-4">
      <DayPicker className="bg-white p-4 rounded-xl"
        selected={selectedDate}
        onDayClick={handleDateSelect}
        modifiers={{
          event: (date) => events[date.toISOString().split("T")[0]],
        }}
        modifiersStyles={{
          event: { backgroundColor: "red", borderRadius: "50%"},
        }}
      />

      {selectedDate && (
        <div className="bg-white rounded-xl shadow-md mt-6 p-6 w-full max-w-xl space-y-4">
          {getEventForDate(selectedDate) ? (
            <>
            {/* <h1 className="text-center text-4xl">Event Calender</h1> */}
              <div className="flex gap-4 items-center">
                <div className="bg-yellow-400 text-black font-bold px-3 py-1 rounded">
                  Event Title
                </div>
                <div className="bg-gray-200 px-4 py-2 rounded flex-1">
                  {getEventForDate(selectedDate).title}
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="bg-blue-600 text-white font-bold px-4 py-1 rounded">
                  Location
                </div>
                <div className="bg-gray-200 px-4 py-2 rounded flex-1">
                  {getEventForDate(selectedDate).location}
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="bg-orange-600 text-white font-bold px-6 py-1 rounded">
                  Time
                </div>
                <div className="bg-gray-200 px-4 py-2 rounded flex-1">
                  {getEventForDate(selectedDate).time}
                </div>
              </div>
            </>
          ) : (
            <h4 className="text-red-500 text-center font-semibold">
              No Event on this Date
            </h4>
          )}
        </div>
      )}
    </div>
    </div>
  );
};

export default Test;
