import React from "react";
import {
  Card,
  CardHeader,
  makeStyles,
  Avatar,
  Typography,
  CardMedia,
  CardActions,
  CardContent,
  IconButton
} from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

const useStyles = makeStyles({
  root: {
    width: 500,
    margin: 50,
    boxShadow: "2px 2px 10px #9a9a9a"
  },
  media: {
    width: "100%",
    height: 500
  },
  icon: {
    fontSize: "1.3em"
  }
});

const Post = ({ user }) => {
  const classes = useStyles();

  const { url, description, name } = user;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar>{name.charAt(0).toUpperCase()}</Avatar>}
        title={<Typography>{name}</Typography>}
      ></CardHeader>
      <CardMedia className={classes.media} image={url}></CardMedia>
      <CardActions>
        <IconButton>
          <FavoriteBorderIcon className={classes.icon} />
        </IconButton>
        <IconButton>
          <ChatBubbleOutlineIcon className={classes.icon} />
        </IconButton>
      </CardActions>
      <CardContent>
        <Typography paragraph>{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
