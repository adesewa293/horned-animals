import React from "react";

function Filter({handleBeasts}) {
  return (
    <form className="select-container">
      <label className="horns-label" htmlFor="hornsInput">
        Select beasts by horns
      </label>
      <select name="selectedHorns" id="hornsInput" onChange={handleBeasts}>
        <option value="all">all</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="100">100</option>
      </select>
    </form>
  );
}
export default Filter;
