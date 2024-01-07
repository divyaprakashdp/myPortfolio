import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiSelenium, SiTestcafe } from "react-icons/si";

export default function Skills() {
  const techStack = [
    {
      id: 1,
      icon: <FaHtml5 size={80} className="text-red-500" />,
      title: "HTML",
      style: "shadow-red-900",
    },
    {
      id: 2,
      icon: <FaCss3Alt size={80} className="text-blue-500" />,
      title: "CSS",
      style: "shadow-blue-900",
    },
    {
      id: 3,
      icon: <RiJavascriptFill size={80} className="text-yellow-500" />,
      title: "JS",
      style: "shadow-yellow-900",
    },
    {
      id: 4,
      icon: <FaReact size={80} className="text-blue-500" />,
      title: "REACT",
      style: "shadow-blue-800",
    },
    {
      id: 5,
      icon: <FaJava size={80} className="text-orange-500" />,
      title: "JAVA",
      style: "shadow-orange-800",
    },
    {
      id: 6,
      icon: <SiSelenium size={80} className="text-green-500" />,
      title: "Selenium",
      style: "shadow-green-800",
    },
    {
      id: 7,
      icon: <SiTestcafe size={80} className="text-[#3093b8]" />,
      title: "TestCafe",
      style: "shadow-[#3093b8]",
    },
    {
      id: 8,
      icon: <FaGitAlt size={80} className="text-orange-600" />,
      title: "git",
      style: "shadow-orange-700",
    },
  ];

  const techStackDiv = techStack.map(({ id, icon, title, style }) => (
    <div
      key={id}
      className={`py-2 shadow-md text-center justify-center hover:scale-110 duration-500 rounded-xl hover:rounded-lg ${style}`}
    >
      <div className="w-20 mx-auto ">{icon}</div>
      <p className="mt-2">{title}</p>
    </div>
  ));
  return (
    <div
      id="Skills"
      className="h-screen w-full text-xl uppercase bg-gradient-to-b from-gray-800 via-gray-700 to-gray-500 text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-lime-200 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 py-8 px-12">
          {techStackDiv}
        </div>
      </div>
    </div>
  );
}
