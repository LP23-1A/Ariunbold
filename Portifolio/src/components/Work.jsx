import Projects from "./Projects";

export default function Work() {
  return (
    <div className="pad-96-80 gap-48 flex column container">
      <div className="gap-16 flex column">
        <div className="category center">Work</div>
        <div className="center font-20-gray">
          Some of the noteworthy projects I have built:
        </div>
      </div>
      <Projects/>
      <Projects/>
      <Projects/>
    </div>
  );
}
