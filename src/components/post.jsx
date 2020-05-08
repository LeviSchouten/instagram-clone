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
  box-shadow: 5px 5px 5px #d5d5d5;
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
  padding-left: 10px;
`;

const PostComment = styled.p`
`;

const comments = [
  'first comment',
  'second comment',
  'third comment',
  'third comment',
  'third comment'
]

function Post(props) {
  const { username } = props;
  return (
    <PostContainer>
      <PostTitle>{username}</PostTitle>
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
        </PostCommentSection>
      </PostFooter>
    </PostContainer>
  );
}

export default Post;