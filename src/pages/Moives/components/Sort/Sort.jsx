import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Sort({ setSort }) {
  return (
    <DropdownButton
      id="dropdown-basic-button"
      title="Dropdown button"
      variant="danger"
    >
      <Dropdown.Item onClick={() => setSort("popular")}>Popular</Dropdown.Item>
      <Dropdown.Item onClick={() => setSort("popular(DESC)")}>
        Popular(DESC)
      </Dropdown.Item>
    </DropdownButton>
  );
}

export default Sort;
