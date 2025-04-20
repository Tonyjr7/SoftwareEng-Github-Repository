import React from "react";
import useFetch from "./useFetch";
import ListComponent from "./ListComponent";

const App = () => {
  const { data, isPending, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div>
      <h1>Posts</h1>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && (
        <ListComponent
          items={data}
          renderItem={(item) => (
            <div>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </div>
          )}
        />
      )}
    </div>
  );
};

export default App;
