"use client";

import { useState, useEffect, useCallback } from "react";

interface Event {
  eventName: string;
  eventDate: string;
}

interface CountdownProps {
  events: Event[];
}

const CountdownTimer: React.FC<CountdownProps> = ({ events }) => {
  // Memoized function to get the next event
  const getNextEvent = useCallback(() => {
    const now = new Date().getTime();
    const upcomingEvents = events
      .map(event => ({
        ...event,
        timeLeft: new Date(event.eventDate).getTime() - now
      }))
      .filter(event => event.timeLeft > 0)
      .sort((a, b) => a.timeLeft - b.timeLeft);

    return upcomingEvents.length > 0 ? upcomingEvents[0] : null;
  }, [events]);

  const calculateTimeLeft = (eventDate: string) => {
    const eventTime = new Date(eventDate).getTime();
    const now = new Date().getTime();
    const difference = eventTime - now;

    return difference > 0
      ? {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      : { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [nextEvent, setNextEvent] = useState<Event | null>(getNextEvent());
  const [timeLeft, setTimeLeft] = useState(
    nextEvent ? calculateTimeLeft(nextEvent.eventDate) : null
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedEvent = getNextEvent();
      setNextEvent(updatedEvent);
      setTimeLeft(updatedEvent ? calculateTimeLeft(updatedEvent.eventDate) : null);
    }, 1000);

    return () => clearInterval(timer);
  }, [getNextEvent]); // ✅ Fixed missing dependency issue

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 p-6 bg-green-900 text-white rounded-lg shadow-lg text-center">
      {nextEvent ? (
        <>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{nextEvent.eventName} Countdown</h2>
          <div className="flex justify-center space-x-4 text-xl md:text-2xl font-semibold">
            {timeLeft && (
              <>
                <div className="p-4 bg-green-700 rounded-lg shadow">
                  <p className="text-3xl md:text-4xl">{timeLeft.days}</p>
                  <span className="text-sm md:text-base">Days</span>
                </div>
                <div className="p-4 bg-green-700 rounded-lg shadow">
                  <p className="text-3xl md:text-4xl">{timeLeft.hours}</p>
                  <span className="text-sm md:text-base">Hours</span>
                </div>
                <div className="p-4 bg-green-700 rounded-lg shadow">
                  <p className="text-3xl md:text-4xl">{timeLeft.minutes}</p>
                  <span className="text-sm md:text-base">Minutes</span>
                </div>
                <div className="p-4 bg-green-700 rounded-lg shadow">
                  <p className="text-3xl md:text-4xl">{timeLeft.seconds}</p>
                  <span className="text-sm md:text-base">Seconds</span>
                </div>
              </>
            )}
          </div>
        </>
      ) : (
        <h2 className="text-2xl md:text-3xl font-bold">No Upcoming Events</h2>
      )}
    </div>
  );
};

export default CountdownTimer;
