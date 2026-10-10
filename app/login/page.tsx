export default function Login() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-md">
      <h1 className="text-3xl font-bold text-center mb-6">Login / Sign Up</h1>
      <form className="bg-white p-6 rounded-lg shadow space-y-4">
        <input type="email" placeholder="Email" className="w-full border p-3 rounded" />
        <input type="password" placeholder="Password" className="w-full border p-3 rounded" />
        <button type="button" className="w-full bg-kenya-green text-white py-3 rounded font-semibold">
          Continue
        </button>
        <p className="text-center text-sm">Or continue with Google (coming soon with Supabase)</p>
      </form>
      <p className="text-center mt-4 text-sm text-gray-600">
        Full auth, profile setup, photo uploads, and M-Pesa will be integrated next.
      </p>
    </div>
  );
}
