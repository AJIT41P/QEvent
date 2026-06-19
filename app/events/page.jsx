"use client";

export const dynamic = "force-dynamic";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import EventCard from "@/components/EventCard";

function EventsContent() {
  const [events, setEvents] = useState([]);
  const searchParams = useSearchParams();

  const artist = searchParams.get("artist");
  const tag = searchParams.get("tag");

  useEffect(() => {
    fetch("https://qevent-backend.labs.crio.do/events")
      .then((res) => res.json())
      .then((data) => {
        let filtered = data;

        if (artist) {
          filtered = filtered.filter((event) =>
            event.artist?.toLowerCase().includes(artist.toLowerCase())
          );
        }

        if (tag) {
          filtered = filtered.filter((event) =>
            event.tags?.includes(tag)
          );
        }

        setEvents(filtered);
      });
  }, [artist, tag]);

  return (
    <div className="flex flex-wrap justify-center gap-6 p-10">
      {events.map((event) => (
        <EventCard
          key={event.id || event._id}
          eventData={event}
        />
      ))}
    </div>
  );
}

export default function EventsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EventsContent />
    </Suspense>
  );
}