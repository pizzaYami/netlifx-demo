import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NotFoundPage.style.css";
function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 Not Found</h1>
      <p className={styles.subtitle}>요청하신 페이지를 찾을 수 없습니다.</p>
      <button className={styles.homeButton} onClick={() => navigate("/")}>
        홈으로 돌아가기
      </button>
    </div>
  );
}

export default NotFoundPage;
