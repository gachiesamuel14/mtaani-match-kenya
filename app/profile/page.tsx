export default function Profile() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-lg">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow space-y-4">
        <div className="h-32 w-32 bg-gray-200 rounded-full mx-auto flex items-center justify-center text-4xl">👤</div>
        <input placeholder="Name" className="w-full border p-2 rounded" />
        <input type="number" placeholder="Age" className="w-full border p-2 rounded" />
        <select className="w-full border p-2 rounded">
          <option>Select County</option>
          <option>Nairobi</option>
          <option>Mombasa</option>
          <option>Kisumu</option>
          <option>Kiambu</option>
          <option>Nakuru</option>
          <option>Other</option>
        </select>
        <textarea placeholder="Bio (Sheng welcome!)" className="w-full border p-2 rounded" rows={3}></textarea>
        <input placeholder="Tribe (optional)" className="w-full border p-2 rounded" />
        <input placeholder="Religion (optional)" className="w-full border p-2 rounded" />
        <button className="bg-kenya-green text-white w-full py-2 rounded">Save Profile</button>
      </div>
      <p className="mt-4 text-sm text-gray-500">Photo uploads via Supabase Storage / Cloudinary next.</p>
    </div>
  );
}
