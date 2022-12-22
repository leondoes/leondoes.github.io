import React, { useEffect } from "react";

import { PageContainer, ContentContainer } from "./styled";
import NavBar from "../../components/navbar";
import { Link } from "react-router-dom";

const PageLayout = ({ children, ...props }) => {
  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

  return (
    <PageContainer {...props}>
      <NavBar />
      <Link to="/aboutme">about-me</Link>
      <ContentContainer>{children}</ContentContainer>
    </PageContainer>
  );
};

export default PageLayout;
