import Category from "@/components/Category";
import ToolsAndTech from "@/components/ToolsAndTech";

export default function Skills() {
  return (
    <div className="pad-96-80 center column container gap-48">
      <div className="flex column gap-16">
      <div className="category center">
            Skills
        </div>
        <div className="center font-20-gray">
          The skills, tools and technologies I am really good at:
        </div>
      </div>
      <div className="center wrap gap-e">{<ToolsAndTech />}</div>
    </div>
  );
}
