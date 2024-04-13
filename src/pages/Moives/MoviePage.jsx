import React, { useState } from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../../common/MovieCard";
import { Container, Row, Col, Alert } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import Sort from "./components/Sort/Sort";
import SortGenre from "./components/SortGenre/SortGenre";

function MoviePage() {
  const [query] = useSearchParams();
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("popular");
  const [genre, setGenre] = useState();
  console.log(genre);

  const keyword = query.get("q");
  const { data, isLoading, isError, error } = useSearchMovieQuery({
    sort,
    page,
    keyword,
    genre,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          <Sort setSort={setSort} />
          <SortGenre setGenre={setGenre} />
        </Col>
        <Col lg={8} xs={12}>
          <Row>
            {data?.results.map((movie) => (
              <Col key={movie.id} lg={4} xs={12}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={data?.total_pages}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page - 1}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default MoviePage;
