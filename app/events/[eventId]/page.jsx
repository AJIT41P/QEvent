export default async function EventDetailsPage({
    params,
  }) {
    const response = await fetch(
      `https://qevent-backend.labs.crio.do/events/${params.eventId}`,
      {
        cache: "no-store",
      }
    );
  
    const event = await response.json();
  
    return (
      <div className="max-w-5xl mx-auto p-10">
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-[500px] object-cover rounded-lg"
        />
  
        <div className="mt-8">
          <h1 className="text-5xl font-bold mb-4">
            {event.name}
          </h1>
  
          <p className="text-xl mb-2">
            Artist: {event.artist}
          </p>
  
          <p className="text-xl mb-2">
            Location: {event.location}
          </p>
  
          <p className="text-xl mb-2">
            Date: {new Date(event.date).toDateString()}
          </p>
  
          <p className="text-xl mb-2">
            Time: {event.time}
          </p>
  
          <p className="text-xl mb-6">
            Price: {event.price > 0 ? `$${event.price}` : "FREE"}
          </p>
  
          <div className="flex gap-3 flex-wrap mb-6">
            {event.tags?.map((tag) => (
              <span
                key={tag}
                className="bg-gradient-to-r from-orange-400 to-teal-600 text-white px-4 py-2 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
  
          <p className="text-lg leading-8">
            {event.description}
          </p>
        </div>
      </div>
    );
  }