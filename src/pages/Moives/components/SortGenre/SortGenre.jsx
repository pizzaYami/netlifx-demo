import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useGenreListQuery } from "../../../../hooks/useGenreList";

function SortGenre({ setGenre }) {
  const { data } = useGenreListQuery();

  return (
    <DropdownButton
      id="dropdown-basic-button"
      title="SortGenre"
      variant="danger"
    >
      {data?.genres.map((genre) => (
        <Dropdown.Item key={genre.id} onClick={() => setGenre(genre.id)}>
          {genre.name}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

export default SortGenre;
