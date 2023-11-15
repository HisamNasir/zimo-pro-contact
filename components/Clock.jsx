import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the current time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Function to format time in HH:mm format
  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  // Function to format date with complete day and month names
  const formatDate = (date) => {
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const day = dayNames[date.getDay()];
    const month = monthNames[date.getMonth()];
    const dayOfMonth = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}, ${dayOfMonth} ${month} ${year}`;
  };

  return (
    <div className=" text-right">
      {/* Display current time in HH:mm format */}
      <div className="flex gap-3">
        <div>{formatTime(currentTime)}</div> <p>london united kingdom</p>
      </div>

      {/* Display current date with complete day and month names */}
      <div className="text-[#BE9F56]">
        {formatDate(currentTime)}
      </div>
    </div>
  );
};

export default Clock;
