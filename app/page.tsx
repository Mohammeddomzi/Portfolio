"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-gray-950 via-black to-black flex flex-col justify-center items-center p-4 sm:p-8 pb-20">
      <div className="flex flex-col justify-center items-center gap-6 sm:gap-10 flex-grow text-center w-full">
        <div className="flex flex-col justify-center items-center min-h-48 sm:min-h-64 w-full">
          <div className="max-w-5xl mx-auto text-center px-4 lg:px-8">
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-5xl font-extrabold text-cyan-50 leading-tight">
              Hi! My name is{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 text-transparent bg-clip-text">
                Mohammed Alammar
              </span>{" "}
              and I am a{" "}
              <span className="whitespace-nowrap">software engineer.</span>
            </h1>
            <p className="mt-3 sm:mt-4 md:mt-5 text-base sm:text-lg md:text-xl lg:text-xl text-cyan-50 px-2 lg:px-4">
              A software engineering student at King Fahd University of
              Petroleum and Minerals (KFUPM), I am passionate about building
              innovative solutions and leveraging technology to solve complex
              problems. Based in Saudi Arabia, I am committed to contributing to
              the advancement of the technology industry through continuous
              learning and impactful projects.
            </p>
          </div>
        </div>

        <div className="w-full px-4 lg:px-8">
          <div className="flex justify-center items-center text-cyan-50 font-medium mb-3 sm:mb-4 md:mb-5">
            <p className="text-lg sm:text-xl md:text-2xl">
              Technologies & Tools I Work With:
            </p>
          </div>
          <div className="flex justify-center items-center text-cyan-50 font-medium w-full">
            <ul className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-7 max-w-5xl w-full">
              <li className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-2.5 text-sm sm:text-base md:text-lg">
                <Image
                  src="/imgs/TS.ico"
                  alt="TypeScript"
                  width={24}
                  height={24}
                  className="sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                />
                <span className="hidden sm:inline">TypeScript</span>
                <span className="sm:hidden">TS</span>
              </li>
              <li className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-2.5 text-sm sm:text-base md:text-lg">
                <Image
                  src="/imgs/JS.ico"
                  alt="JavaScript"
                  width={24}
                  height={24}
                  className="sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                />
                <span className="hidden sm:inline">JavaScript</span>
                <span className="sm:hidden">JS</span>
              </li>
              <li className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-2.5 text-sm sm:text-base md:text-lg">
                <Image
                  src="/imgs/React.ico"
                  alt="React"
                  width={24}
                  height={24}
                  className="sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                />
                <span>React</span>
              </li>
              <li className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-2.5 text-sm sm:text-base md:text-lg">
                <Image
                  src="/imgs/Next.ico"
                  alt="Next.js"
                  width={24}
                  height={24}
                  className="sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                />
                <span className="hidden sm:inline">Next.js</span>
                <span className="sm:hidden">Next</span>
              </li>
              <li className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-2.5 text-sm sm:text-base md:text-lg">
                <Image
                  src="/imgs/Firebase.ico"
                  alt="Firebase"
                  width={24}
                  height={24}
                  className="sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                />
                <span>Firebase</span>
              </li>
              <li className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-2.5 text-sm sm:text-base md:text-lg">
                <Image
                  src="/imgs/python.svg"
                  alt="Python"
                  width={24}
                  height={24}
                  className="sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                />
                <span>Python</span>
              </li>
              <li className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-2.5 text-sm sm:text-base md:text-lg">
                <Image
                  src="/imgs/nodejs.svg"
                  alt="Node.js"
                  width={24}
                  height={24}
                  className="sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                />
                <span className="hidden sm:inline">Node.js</span>
                <span className="sm:hidden">Node</span>
              </li>
              <li className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-2.5 text-sm sm:text-base md:text-lg">
                <Image
                  src="/imgs/google-cloud.svg"
                  alt="Google Cloud"
                  width={24}
                  height={24}
                  className="sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                />
                <span className="hidden md:inline">Google Cloud</span>
                <span className="md:hidden">GCP</span>
              </li>
              <li className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-2.5 text-sm sm:text-base md:text-lg">
                <Image
                  src="/imgs/docker.svg"
                  alt="Docker"
                  width={24}
                  height={24}
                  className="sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                />
                <span>Docker</span>
              </li>
              <li className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-2.5 text-sm sm:text-base md:text-lg">
                <Image
                  src="/imgs/git.svg"
                  alt="Git"
                  width={24}
                  height={24}
                  className="sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                />
                <span>Git</span>
              </li>
              <li className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-2.5 text-sm sm:text-base md:text-lg">
                <Image
                  src="/imgs/github_light.svg"
                  alt="GitHub"
                  width={24}
                  height={24}
                  className="sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                />
                <span>GitHub</span>
              </li>
              <li className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-2.5 text-sm sm:text-base md:text-lg">
                <Image
                  src="/imgs/kubernetes.svg"
                  alt="Kubernetes"
                  width={24}
                  height={24}
                  className="sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                />
                <span className="hidden sm:inline">Kubernetes</span>
                <span className="sm:hidden">K8s</span>
              </li>
              <li className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-2.5 text-sm sm:text-base md:text-lg">
                <Image
                  src="/imgs/terraform.svg"
                  alt="Terraform"
                  width={24}
                  height={24}
                  className="sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                />
                <span>Terraform</span>
              </li>
              <li className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-2.5 text-sm sm:text-base md:text-lg">
                <Image
                  src="/imgs/c.svg"
                  alt="C"
                  width={24}
                  height={24}
                  className="sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                />
                <span>C</span>
              </li>
              <li className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-2.5 text-sm sm:text-base md:text-lg">
                <Image
                  src="/imgs/csharp.svg"
                  alt="C#"
                  width={24}
                  height={24}
                  className="sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                />
                <span>C#</span>
              </li>
              <li className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-2.5 text-sm sm:text-base md:text-lg">
                <Image
                  src="/imgs/dart.svg"
                  alt="Dart"
                  width={24}
                  height={24}
                  className="sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                />
                <span>Dart</span>
              </li>
              <li className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-2.5 text-sm sm:text-base md:text-lg">
                <Image
                  src="/imgs/mongodb-icon-light.svg"
                  alt="MongoDB"
                  width={24}
                  height={24}
                  className="sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                />
                <span className="hidden sm:inline">MongoDB</span>
                <span className="sm:hidden">Mongo</span>
              </li>
              <li className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-2.5 text-sm sm:text-base md:text-lg">
                <Image
                  src="/imgs/supabase.svg"
                  alt="Supabase"
                  width={24}
                  height={24}
                  className="sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                />
                <span>Supabase</span>
              </li>
              <li className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-2.5 text-sm sm:text-base md:text-lg">
                <Image
                  src="/imgs/figma.svg"
                  alt="Figma"
                  width={24}
                  height={24}
                  className="sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                />
                <span>Figma</span>
              </li>
              <li className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-2.5 text-sm sm:text-base md:text-lg">
                <Image
                  src="/imgs/notion.svg"
                  alt="Notion"
                  width={24}
                  height={24}
                  className="sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                />
                <span>Notion</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-xs text-center text-white mb-10 mt-4">
        Copyright © 2024 Mohammed Alammar
      </div>
    </div>
  );
}
