import { publications } from "./publications";
import { useState } from "react";
function Publications() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <input
          className="py-2 m-2 text-center  border-2 rounded-lg border-gray-400"
          placeholder="Αναζήτηση"
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      {publications
        .filter((element) => {
          if (query === "") {
            return element;
          } else if (element.name.toLowerCase().includes(query.toLowerCase())) {
            return element;
          }
        })
        .map((element, id) => (
          <a
            key={id}
            href={element.link}
            target="_blank"
            rel="noopener noreferrer"
            className={element.link ? "hover:text-blue-400" : ""}
          >
            <p className="max-w-4xl  text-lg text-left  py-1  ">
              {element.name}
            </p>
          </a>
        ))}
    </div>
  );
}
export default Publications;
