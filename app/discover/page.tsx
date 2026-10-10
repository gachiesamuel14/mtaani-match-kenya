"use client";

import { useState } from "react";

const mockUsers = [
  { id: 1, name: "Amina", age: 24, county: "Nairobi", bio: "Love nyama choma and hiking Ngong Hills", distance: "2 km", tribe: "Kikuyu" },
  { id: 2, name: "Brian", age: 27, county: "Kiambu", bio: "Software engineer, church on Sundays", distance: "5 km", tribe: "Luo" },
  { id: 3, name: "Fatuma", age: 22, county: "Mombasa", bio: "Student, loves the beach and Swahili culture", distance: "150 km", tribe: "Swahili" },
];

export default function Discover() {
  const [index, setIndex] = useState(0);
  const user = mockUsers[index];

  const next = () => setIndex((i) => (i + 1) % mockUsers.length);

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <h1 className="text-3xl font-bold text-center mb-6">Discover Nearby</h1>
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="h-64 bg-gradient-to-br from-kenya-green to-kenya-red flex items-center justify-center text-white text-6xl">
          👤
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold">{user.name}, {user.age}</h2>
          <p className="text-gray-600">{user.county} • {user.distance} away</p>
          <p className="mt-2">{user.bio}</p>
          <p className="mt-1 text-sm text-kenya-green">Tribe: {user.tribe}</p>
        </div>
        <div className="flex justify-around p-4 border-t">
          <button onClick={next} className="bg-gray-200 px-6 py-2 rounded-full">Pass</button>
          <button onClick={next} className="bg-kenya-red text-white px-6 py-2 rounded-full">Like ❤️</button>
        </div>
      </div>
      <p className="text-center mt-4 text-sm text-gray-500">GPS location would calculate real distances here.</p>
    </div>
  );
}
