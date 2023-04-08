export default function Loading() {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-white">
    <div className="flex items-center justify-center">
      <svg className="w-10 h-10 mr-3 text-gray-500 animate-spin" viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2 12c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12-12-5.373-12-12"
        />
      </svg>
      <span className="text-xl font-semibold text-gray-500">Loading...</span>
    </div>
  </div>
  );
};
