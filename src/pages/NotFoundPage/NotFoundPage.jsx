import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <ContainerS onClick={() => navigate("/")}>
      <img
        src="https://files.oaiusercontent.com/file-RfAdF94ycttXsW3YSAVTwqRD?se=2024-04-06T14%3A00%3A24Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Ddbb219e7-217b-46a7-8f0a-e6af3e7f7c18.webp&sig=jwhKClR8SKe8inX2tQp0Bw3LPVI4TfRxtmu0mdtwlFU%3D"
        alt="404"
      />
    </ContainerS>
  );
}

export default NotFoundPage;

const ContainerS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  & > img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
