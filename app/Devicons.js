
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
    "name": "TypeScript",
    "class": "devicon-typescript-plain colored",
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
    "class": "devicon-django-plain",
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
  },
  {
    "name": "AWS",
    "class": "devicon-amazonwebservices-original colored",
  }
];

export default function Devicons() {
  return (
    <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 sm:gap-6">
      {devicons.map((devicon) => (
        <div key={devicon.name} className="flex flex-col items-center justify-center px-2 text-4xl sm:text-6xl">
          <div className="flex flex-col items-center justify-center">
            <i className={devicon.class} style={devicon.name === "Next.js" || devicon.name === "Django" ? {color: "#F8F8F8"} : {}}></i>
            <div className="justify-center">
              <p className="mx-2 mt-0 text-sm text-center text-gray-300 sm:text-xl">{devicon.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
