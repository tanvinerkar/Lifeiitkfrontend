import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Modal,
  CardHeader,
  Avatar,
  CardContent
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    flex: 1,
    position: "absolute",
    margin: "auto",
    width: 300,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1),
    outline: "none"
  },
  cardBody: {
    padding: "0 16px"
  }
}));

const PostModal = props => {
  const classes = useStyles();
  const post = props.post;
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={props.open}
      onClose={props.onClose}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div className={classes.paper}>
        <CardHeader
          avatar={<Avatar src={post.club.image} />}
          title={post.event.title}
          subheader={post.club.name}
        />
        <CardContent style={{ paddingTop: 0 }}>
          <Typography variant="overline">
            <i className="fa fa-calendar-o" />
            &nbsp;{post.event.dateTime}
            <br />
          </Typography>
          <Typography variant="body2" id="simple-modal-description">
            {post.event.description}
          </Typography>
        </CardContent>
      </div>
    </Modal>
  );
};

export default PostModal;
