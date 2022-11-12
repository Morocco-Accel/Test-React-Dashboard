import React from "react";

export function SearchInput() {
  return (
    <div className="INPUT_CON">
      <input
        className="INPUT_P"
        type="text"
        placeholder="Les mots clé, les dates..."
      />
      <i className="fas fa-search"></i>
    </div>
  );
}
