import React, { useState } from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../../common/MovieCard";
import { Container, Row, Col, Alert } from "react-bootstrap";
import ReactPaginate from "react-paginate";

/**
 * 경로 2가지
 * nav바에서 클릭해서 온경우 => popularMovie 보여주기
 * keyword를 입력해서 온경우 => keyword와 관련된 영화들을 보여줌
 */

/**
 * 페이지 네이션 만들기
 * page state 만들기
 * 페이지네이션 클릭할때마다 page 바꾸어주기
 * page 값이 바뀔 때 마다 useSearchMovie에 page까지 넣어서 fetch
 */

function MoviePage() {
  const [query] = useSearchParams();
  const [page, setPage] = useState(0);
  const keyword = query.get("q");
  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
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
          필터
        </Col>
        <Col lg={8} xs={12}>
          <Row>
            {data?.results.map((movie) => (
              <Col key={movie} lg={4} xs={12}>
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
