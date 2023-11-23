import uuidv4 from "uuidv4";

let names = [
    {
        props: "React",
    },
    {
        props: "Next.js",
    },
    {
        props: "Typescript",
    },
    {
        props: "Nest.js",
    },
    {
        props: "PostgreSQL",
    },
    {
        props: "Tailwindcss",
    },
    {
        props: "Figma",
    },
    {
        props: "Cypress",
    },
    {
        props: "Storybook",
    },
    {
        props: "Git",
    },
]

const Creater = ({props}) => {
    return (
        <div className="category flex">
            {props}
        </div>
    )
}

export default function Category() {
    return (
      <>
        {names.map((el) => {
          let key = uuidv4();
          return <Creater key={key} props={el.props}/>;
        })}
      </>
    );
  }