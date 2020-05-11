import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons'

const PostTitle = styled.div`
  padding: 20px;
`;

const PostImage = styled.img`
  padding: 0;
  margin: 0;
`;

const PostContainer = styled.div`
  width: 600px;
  border: 1px solid #d5d5d5;
  box-shadow: 2px 2px 5px #d5d5d5;
  margin: 30px;
`;

const PostActions = styled.div`
  color: #808080;
  svg {
    padding-top: 5px;
    padding-left: 10px;
  }
`;

const PostFooter = styled.div`
`;

const PostLikes = styled.p`
  padding-left: 10px;
  font-weight: bold;
`;

const PostCommentSection = styled.div`
`;

const PostComment = styled.p`
  padding-left: 10px;
`;

const PostLink = styled.p`
  font-style: none;
  color: #7a7a7a;
  padding-left: 10px;
`;

const PostInput = styled.input`
  padding: 0;
  margin: 0;
  width: 100%;
  border: none;
  border-top: 1px solid #d5d5d5;
  height: 50px;
  &::placeholder {
    padding: 10px;   
    font-size: 1.4em;
  }
`;

function Post(props) {
  const { username } = props;
  return (
    <PostContainer>
      <PostTitle><strong>{username}</strong></PostTitle>
      <PostImage src="https://picsum.photos/seed/picsum/600/600"></PostImage>
      <PostFooter>
        <PostActions>
          <FontAwesomeIcon icon={faHeart} size="2x"/>
          <FontAwesomeIcon icon={faComment} size="2x"/>
        </PostActions>
        <PostLikes>433 Likes</PostLikes>
        <PostCommentSection>
          <PostComment><strong>johndoe</strong> Love the picture!</PostComment>
          <PostComment><strong>janedoe</strong> obsessed!!</PostComment>
          <PostLink><i>All 13 comments</i></PostLink>
          <PostInput placeholder="Place a comment..."></PostInput>
        </PostCommentSection>
      </PostFooter>
    </PostContainer>
  );
}

export default Post;