import React from "react";

function HashTech({ work }) {
  return work.map((tech) => (
    <span key={tech} className="px-1 odd:text-red-500 even:text-blue-500">
      #{tech}
    </span>
  ));
}

export default HashTech;
