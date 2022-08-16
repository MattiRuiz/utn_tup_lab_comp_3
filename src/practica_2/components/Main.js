import Body from "./Body";

const Main = ({ pageBody, links }) => {
  const variosLinks = Object.values(links).map((link) => (
    <li>
      <a href={link}>{link}</a>
    </li>
  ));
  return (
    <div>
      <Body pageBody={pageBody} />
      <nav>
        <ul>{variosLinks}</ul>
      </nav>
      <p>Que linda esta quedando esta página!</p>
    </div>
  );
};

export default Main;
