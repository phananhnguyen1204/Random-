function ServiceItem({ title, icon, description }) {
  return (
    <div className="transform rounded-md bg-slate-300 p-5 transition hover:-translate-y-2 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700">
      <div className="mb-3 h-6 w-6 text-gray-800 dark:text-gray-300">
        {icon}
      </div>
      <h1 className="mb-1 text-lg font-semibold text-gray-700 dark:text-gray-200">
        {title}
      </h1>
      <p className="text-md text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}

export default ServiceItem;
