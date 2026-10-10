import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-kenya-green text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Mtaani Match 🇰🇪
        </Link>
        <div className="space-x-4">
          <Link href="/discover" className="hover:underline">Discover</Link>
          <Link href="/login" className="hover:underline">Login</Link>
          <Link href="/profile" className="hover:underline">Profile</Link>
        </div>
      </div>
    </nav>
  );
}
