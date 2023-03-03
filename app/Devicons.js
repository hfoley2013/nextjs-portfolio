
const devicons = [
  {
    "name": "Python",
    "class": "devicon-python-plain colored",
  },
  {
    "name": "JavaScript",
    "class": "devicon-javascript-plain colored",
  },
  {
    "name": "Node.js",
    "class": "devicon-nodejs-plain colored",
  },
  {
    "name": "Next.js",
    "class": "devicon-nextjs-plain colored",
  },
  {
    "name": "React",
    "class": "devicon-react-plain colored",
  },
  {
    "name": "Django",
    "class": "devicon-django-plain colored",
  },
  {
    "name": "MongoDB",
    "class": "devicon-mongodb-plain colored",
  },
  {
    "name": "PostgreSQL",
    "class": "devicon-postgresql-plain colored",
  },
  {
    "name": "SQLite",
    "class": "devicon-sqlite-plain colored",
  },
  {
    "name": "Docker",
    "class": "devicon-docker-plain colored",
  }
];

export default function Devicons() {
  return (
    <div className="flex items-center justify-center h-4/5">
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 sm:gap-6">
        {devicons.map((devicon) => (
          <div key={devicon.name} className="px-2 justify-center text-6xl sm:text-4xl">
            <i className={devicon.class}>
              <div className="flex flex-col items-center justify-center">
                <p className="text-gray-300 text-center text-xl mt-0 sm:text-sm">{devicon.name}</p>
              </div>
            </i>
          </div>
        ))}
      </div>
    </div>
  );
}
