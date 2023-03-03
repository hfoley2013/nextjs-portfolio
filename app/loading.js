export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-white">
    <div className="flex items-center justify-center">
      <svg className="animate-spin mr-3 h-10 w-10 text-gray-500" viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2 12c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12-12-5.373-12-12"
        />
      </svg>
      <span className="text-gray-500 text-xl font-semibold">Loading...</span>
    </div>
  </div>
  );
};
