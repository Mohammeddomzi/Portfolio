"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-gray-800 via-gray-900 to-black flex flex-col justify-center items-center p-8">
      <div className="flex flex-col justify-center items-center gap-10 flex-grow text-center lg:text-left">
        <div className="flex flex-col justify-center items-center min-h-64">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-extrabold text-cyan-50">
              Hi! My name is{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 text-transparent bg-clip-text">
                Mohammed Alammar
              </span>{" "}
              and I am a software engineer.
            </h1>
            <p className="mt-4 text-2xl text-cyan-100">
              I'm a 22-year-old software engineering student at KFUPM,
              passionate about coding and technology. Born and raised in Saudi
              Arabia, I'm eager to apply my skills and contribute to the tech
              industry.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center text-cyan-50 font-medium">
          <ul className="flex flex-wrap justify-center items-center space-x-4">
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
