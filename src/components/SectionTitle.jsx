function SectionTitle({ children, id }) {
  return (
    <h1
      id={id && id}
      className="mb-5 text-3xl font-bold text-indigo-600 dark:text-indigo-500"
    >
      {children}
    </h1>
  );
}

export default SectionTitle;
