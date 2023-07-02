function Footer() {
  return (
    <div className="rounded-t-lg bg-slate-800 py-5 text-center text-gray-300">
      <a href="#hero" className="block text-xl font-semibold md:text-2xl">
        Shiaf Arfan
      </a>
      <a
        href="mailto:webcifar@gmail.com"
        className="md:text-md text-sm hover:text-indigo-500"
      >
        webcifar@emial.com
      </a>
      <p className="mt-2 text-xs text-gray-500">
        © TechHub-Blog Creative {new Date().getFullYear()}. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
