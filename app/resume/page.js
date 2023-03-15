export default function Resume() {
  return(
    <>
      <article className="mx-auto flex flex-col items-center p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl sm:text-4xl text-gray-200 font-bold mb-4">My Resume</h2>
        <div className="bg-gray-300 rounded-lg w-2/3 p-2">
          <embed src="/Resume.pdf" scale="90" className="mx-auto w-full h-screen"/>
        </div>
      </article>
    </>
    
)}
