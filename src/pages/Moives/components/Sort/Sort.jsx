import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Sort({ setSort }) {
  return (
    <DropdownButton id="dropdown-basic-button" title="Sort" variant="danger">
      <Dropdown.Item onClick={() => setSort("popularity.desc")}>
        Popular(DESC)
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setSort("popularity.asc")}>
        Popular(ASC)
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setSort("original_title.desc")}>
        Original Title(DESC)
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setSort("original_title.asc")}>
        Original Title(ASC)
      </Dropdown.Item>
    </DropdownButton>
  );
}

export default Sort;
