import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [location, setLocation] = useState({ city: '', country: '' });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Extract city and country from timezone
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const [city, country] = extractLocation(timeZone);
    setLocation({ city, country });

    return () => clearInterval(intervalId);
  }, []);

  const extractLocation = (timeZone) => {
    const [city, country] = timeZone.split('/').slice(-2);
    return [city || timeZone, country || ''];
  };

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

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
      <div className="flex gap-3">
        <div>{formatTime(currentTime)}</div>
        <p>{location.city}</p>
        <p>{location.country}</p>
      </div>

      <div className="text-[#BE9F56]">
        {formatDate(currentTime)}
      </div>
    </div>
  );
};

export default Clock;
