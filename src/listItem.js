export default function ListItem({ items, error, activeIndex }) {
  items = items ? items.slice(0, 5) : [];
  return (
    <div>
      <ul>
        {items &&
          items.length > 0 &&
          items.map((item, index) => {
            return (
              <li
                key={index}
                style={
                  index == activeIndex ? { "background-color": "red" } : {}
                }
              >
                {item.name}
              </li>
            );
          })}
      </ul>

      {error && error}
    </div>
  );
}
