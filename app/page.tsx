import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-gray-800 via-gray-900 to-black flex flex-col justify-between items-center p-8">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 flex-grow">
        <div className="flex-1">
          <h1 className="text-5xl font-extrabold text-cyan-50 text-center lg:text-left">
            Hi! My name is{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 text-transparent bg-clip-text">
              Mohammed Alammar
            </span>{" "}
            and I am a software engineer.
          </h1>
        </div>
        <div className="flex-1 lg:flex lg:justify-end lg:items-center text-cyan-50 font-medium">
          <ul className="flex flex-wrap items-center space-x-4">
            <li className="flex items-center space-x-2">
              <Image
                src="/imgs/TS.ico"
                alt="TypeScript"
                width={32}
                height={32}
              />
              <span>TypeScript</span>
            </li>
            <li className="flex items-center space-x-2">
              <Image
                src="/imgs/JS.ico"
                alt="JavaScript"
                width={32}
                height={32}
              />
              <span>JavaScript</span>
            </li>
            <li className="flex items-center space-x-2">
              <Image src="/imgs/React.ico" alt="React" width={32} height={32} />
              <span>React</span>
            </li>
            <li className="flex items-center space-x-2">
              <Image
                src="/imgs/Next.ico"
                alt="Next.js"
                width={32}
                height={32}
              />
              <span>Next.js</span>
            </li>
            <li className="flex items-center space-x-2">
              <Image
                src="/imgs/Firebase.ico"
                alt="Firebase"
                width={32}
                height={32}
              />
              <span>Firebase</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-xs text-center text-white mb-10">
        Copyright © 2024 Mohammed Alammar
      </div>
    </div>
  );
}
