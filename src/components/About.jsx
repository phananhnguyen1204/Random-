import SectionTitle from "./SectionTitle";

function About() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 py-20 md:flex-row md:gap-20">
      <div className="w-full md:w-6/12">
        <SectionTitle>About Me</SectionTitle>
        <p className="text-md  text-gray-600 dark:text-gray-300 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          aperiam corporis dignissimos explicabo illo rerum voluptate, ex
          molestias quibusdam illum dolor qui eum architecto ad nam ab?
          Laudantium, laborum delectus.
        </p>
        <a
          href="mailto:phananh12042003@gmail.com"
          className="text-md  dark: mt-3 block text-gray-700 underline hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-500 md:text-lg"
        >
          phananh12042003@gmail
        </a>
      </div>
      <img
        src="https://github.com/ShaifArfan/react-tailwind-portfolio/blob/main/src/images/hero.jpg?raw=true"
        alt=""
        className="w-full md:w-6/12"
      ></img>
    </div>
  );
}

export default About;
