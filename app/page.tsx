import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-5xl font-bold text-kenya-green mb-4">
        Karibu to Mtaani Match
      </h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Location-based dating for Kenyans. Find and connect with people nearby in your county, town, or even campus. Nairobi, Mombasa, Kisumu, Kiambu – wherever you are.
      </p>
      <div className="flex justify-center gap-4 mb-12">
        <Link href="/discover" className="bg-kenya-red text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700">
          Start Matching
        </Link>
        <Link href="/login" className="bg-kenya-green text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-800">
          Sign Up / Login
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-bold mb-2">📍 Nearby Matching</h3>
          <p>Uses GPS to show people close to you. Filter by distance, county, or town.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-bold mb-2">🇰🇪 Made for Kenya</h3>
          <p>Filters for tribe, religion, lifestyle, student/professional/church modes. Sheng vibes welcome. M-Pesa payments coming.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-bold mb-2">💬 Real Chat</h3>
          <p>Match, chat in real-time, share photos safely. Report and block tools included.</p>
        </div>
      </div>

      <div className="mt-16 bg-kenya-gold/20 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">How it works</h2>
        <ol className="text-left max-w-md mx-auto space-y-2">
          <li>1. Create your profile with photos, bio, interests, county.</li>
          <li>2. Allow location access.</li>
          <li>3. Swipe on nearby people or browse by filters.</li>
          <li>4. Match and start chatting.</li>
        </ol>
      </div>
    </div>
  );
}
