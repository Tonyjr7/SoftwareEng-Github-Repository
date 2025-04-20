import React from "react";

const ListComponent = ({ items, renderItem }) => {
  if (!items || items.length === 0) {
    return <p>No items found.</p>;
  }

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {renderItem ? renderItem(item) : item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
