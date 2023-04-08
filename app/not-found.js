import Link from 'next/link';

export default function NotFound() {
  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-8 text-5xl font-bold">404 - Page Not Found</h1>
      <p className="mb-4 text-xl">The page you requested could not be found.</p>
      <Link href="/">
        <a className="text-xl underline hover:text-gray-500">Return to Home Page</a>
      </Link>
    </div>
  );
}
