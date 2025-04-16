import "./List.css";

interface ListProps {
  items: string[];
}

function List(props: ListProps) {
  const { items } = props;
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <li key={index} className="list-group-item">
          {index + 1}. {item}
        </li>
      ))}
    </ul>
  );
}

export default List;
