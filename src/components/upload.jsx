import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { CloudUpload } from "@material-ui/icons";
import {
  makeStyles,
  Card,
  CardMedia,
  Button,
  TextField,
  Box,
  CardContent
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    width: 300
  },
  media: {
    height: 350,
    justifyContent: "center",
    width: "100%",
    padding: 0
  },
  buttons: {
    margin: 10,
    marginTop: 0,
    float: "right"
  }
});

const Upload = () => {
  const classes = useStyles();

  const [file, setFile] = useState("");
  const [previewURL, setPreviewURL] = useState(null);
  const [description, setDescription] = useState("");

  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("user_id", "668d7baf-efd7-410c-8055-e1cebe986bcf");
    formData.append("description", description);

    fetch("/upload", {
      method: "POST",
      body: formData
    })
      .then(data => data.json())
      .then(() => history.push("/"))
      .catch(console.error);
  };

  const handleChange = e => {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    if (!file) return;

    reader.onloadend = () => {
      setFile(file);
      setPreviewURL(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <Box display="flex" flexDirection="row" p={10}>
      <Card className={classes.root}>
        <Button
          color="primary"
          startIcon={previewURL ? "" : <CloudUpload />}
          component="label"
          size="large"
          className={classes.media}
        >
          {previewURL ? (
            <CardMedia
              className={classes.media}
              image={previewURL}
              title="Contemplative Reptile"
            />
          ) : (
            "Upload"
          )}
          <input
            type="file"
            style={{ display: "none" }}
            onChange={handleChange}
          />
        </Button>
        <CardContent>
          <TextField
            id="standard-multiline-static"
            label="description"
            multiline
            rows={2}
            onChange={e => setDescription(e.target.value)}
            style={{ width: "100%" }}
          />
        </CardContent>
        <Button
          color="primary"
          onClick={handleSubmit}
          className={classes.buttons}
        >
          Submit
        </Button>
      </Card>
    </Box>
  );
};

export default Upload;
