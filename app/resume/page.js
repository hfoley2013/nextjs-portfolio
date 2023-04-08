export default function Resume() {
  return(
    <>
      <article className="flex flex-col items-center px-2 py-4 mx-auto rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-gray-200 sm:text-4xl">My Resume</h2>
        <div className="w-full bg-gray-300 rounded-lg sm:w-2/3">
          <embed src="/Resume.pdf#zoom=90" className="w-full h-screen mx-auto"/>
        </div>
      </article>
    </>
    
)}
