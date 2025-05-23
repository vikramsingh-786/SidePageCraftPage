import React from 'react';
import QueueItem from './QueueItem';

const QueueList = () => {
  const queueItems = [
    {
      id: 1,
      name: "Repair Kit",
      percentage: 75,
      startTime: "9:32 AM",
      endTime: "Ongoing",
      remaining: 9
    },
    {
      id: 2,
      name: "Pistol Neon",
      percentage: 100,
      startTime: "9:07 AM",
      endTime: "9:17 AM",
      remaining: 0
    }
  ];

  return (
    <div className="mt-4 md:mt-10 flex flex-col md:flex-row flex-wrap justify-center items-center md:gap-6">
      {queueItems.map((item) => (
        <div key={item.id} className="w-full md:w-auto px-2 md:px-0 mb-4 md:mb-0">
          <QueueItem item={item} />
        </div>
      ))}
    </div>
  );
};

export default QueueList;