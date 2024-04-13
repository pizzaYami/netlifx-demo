import React from "react";
import { useDetailMovieQuery } from "../../hooks/useDetailMovie";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Alert, Badge } from "react-bootstrap";
import "./MovieDetailPage.style.css";
import starIcon from "../../assets/icon/icon-star.svg";
import humanIcon from "../../assets/icon/icon-humans.svg";
import { useReviewMovie } from "../../hooks/useReviewMovie";

function MovieDetailPage() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useDetailMovieQuery({ id });
  const { data: review } = useReviewMovie({ id });
  console.log(review);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  function formatNumber(value) {
    return value.toLocaleString("en-US");
  }

  return (
    <Container>
      <Row>
        <Col lg={6} md={6} sm={12} className="poster">
          <img
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${data.backdrop_path}`}
            alt="poster"
          />
        </Col>
        <Col lg={6} md={6} sm={12}>
          <div className="genres">
            {data?.genres.map((id) => (
              <h5 key={id.name}>
                <Badge bg="danger">{id.name}</Badge>
              </h5>
            ))}
          </div>

          <h1>{data?.original_title}</h1>
          <h3 className="tagline">{data?.tagline}</h3>

          <div className="KPIBox">
            <div>
              <img src={starIcon} alt="star" />
              {data?.vote_average}
            </div>
            <div>
              <img src={humanIcon} alt="human" />
              {data?.popularity}
            </div>
            <div>{data?.adult} 성인등급</div>
          </div>

          <div className="overview">{data?.overview}</div>

          <div className="badgeWrap">
            <div>
              <Badge>Budget</Badge>${formatNumber(data?.revenue)}
            </div>
            <div>
              <Badge>Revenue</Badge>${formatNumber(data?.revenue)}
            </div>
            <div>
              <Badge>Release Date</Badge>
              {data?.release_date}
            </div>
            <div>
              <Badge>Runtime</Badge>
              {data?.runtime}분
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <h2 className="reviewTitle">Reviews</h2>
        {review?.results.map((review) => {
          return (
            <div key={review.author} className="review">
              <h4>{review.author}</h4>
              <p>{review.content}</p>
              <button>더보기</button>
            </div>
          );
        })}
      </Row>
    </Container>
  );
}

export default MovieDetailPage;
