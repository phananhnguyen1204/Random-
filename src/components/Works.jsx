import SectionTitle from "./SectionTitle";
import WorkItem from "./WorkItem";
import works from "../data/works";

function Works() {
  return (
    <div className="py-12">
      <SectionTitle id="works">Recent Works</SectionTitle>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {works.map((work) => (
          <WorkItem
            key={work.title}
            imgUrl={work.imgUrl}
            title={work.title}
            tech={work.tech}
            workUrl={work.workUrl}
          ></WorkItem>
        ))}
      </div>
    </div>
  );
}

export default Works;
