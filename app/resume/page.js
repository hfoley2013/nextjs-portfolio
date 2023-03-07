export default function Resume() {
  return(
    <>
      <article className="mx-auto flex flex-col items-center p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl text-gray-200 font-bold mb-4">My Resume</h2>
        <div className="bg-gray-300 rounded-lg p-4">
          <embed src="/Resume.pdf" width={500} height={700} className="mx-auto" />
        </div>
      </article>
    </>
    
)}
