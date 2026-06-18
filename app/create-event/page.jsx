"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function CreateEventPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== "loading" && !session) {
      router.push("/events");
    }
  }, [session, status, router]);

  if (!session) {
    return null;
  }

  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold">
        Create Event
      </h1>
    </div>
  );
}