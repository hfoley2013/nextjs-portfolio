
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
    <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 sm:gap-6">
      {devicons.map((devicon) => (
        <div key={devicon.name} className="flex flex-col justify-center items-center px-2 text-4xl sm:text-6xl">
          <div className="flex flex-col justify-center items-center">
            <i className={devicon.class}></i>
            <div className="justify-center">
              <p className="text-gray-300 text-center text-sm mt-0 sm:text-xl mx-2">{devicon.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
