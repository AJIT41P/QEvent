"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function TagsPage() {
  const [tags, setTags] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("https://qevent-backend.labs.crio.do/tags")
      .then((res) => res.json())
      .then((data) => setTags(data));
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-5 p-10">
      {tags.map((tag) => (
        <button
          key={tag.id}
          onClick={() => router.push(`/events?tag=${tag.name}`)}
          className="bg-gradient-to-r from-orange-400 to-teal-600 text-white px-5 py-3 rounded-full text-lg font-semibold"
        >
          #{tag.name}
        </button>
      ))}
    </div>
  );
}