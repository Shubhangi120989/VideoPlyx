import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type,video}) => {
  const title=video.title.replace(/ /g, "-");

  return (
    

    <Link to={`/video/${title}`} style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src={video.thumbnail}
        />
        <Details type={type}>
          <ChannelImage
            type={type}
            src={video.owner.avatar}
          />
          <Texts>
            <Title>{video.title}</Title>
            <ChannelName>{video.owner.username}</ChannelName>
            <Info>{video.views} views • {Math.round(video.ageInDays)} days ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
