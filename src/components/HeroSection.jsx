function HeroSection() {
  return (
    <div id="hero" className="flex flex-col items-center justify-center py-20">
      <div className="text-center">
        <h1 className="mb-1 font-inter text-2xl font-semibold text-indigo-600 dark:text-indigo-500 md:mb-3 md:text-4xl">
          Hi, This is Phan
        </h1>
        <p className="text-md mb-3 max-w-md text-gray-600 dark:text-gray-300 md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non corrupti
        </p>
        <a
          href="#works"
          className="md:text-md inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700"
        >
          See Works
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
