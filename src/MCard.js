import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import React from "react";
  import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
  import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
  import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
  import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
  import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
  import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
  import { deepOrange, deepPurple } from "@mui/material/colors";
  const MCard = () => {
    return (
      <Box width="600px">
        <Card>
          <CardMedia
            component="img"
            height="180"
            width="20"
            image="https://source.unsplash.com/random"
            alt="unsplash image"
          />
          <CardContent>
            <Typography gutterBottom varient="h5" component="div">
              <Avatar sx={{ bgcolor: deepOrange[500] }}><AccountCircleRoundedIcon></AccountCircleRoundedIcon></Avatar>
              SAMUDRALA NEHA
            </Typography>
            <Typography gutterBottom varient="h5" component="div">
              WELCOME TO MY PROJECT
            </Typography>
            <Typography variant="body2" color="text.secondary">
            This is auto tutorial UI page made by KMIT students. Data of description is stored in Asia-Southeast1 Server 
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <ThumbUpOutlinedIcon />
            </Button>
            <Button size="small">
              <BookmarkBorderOutlinedIcon />
            </Button>
            <Button size="small">
              <CommentOutlinedIcon />
            </Button>
            <Button size="small">
              <ShareOutlinedIcon></ShareOutlinedIcon>
            </Button>
            <Button size="small">
              <MoreVertOutlinedIcon />
            </Button>
          </CardActions>
        </Card>
      </Box>
    );
  };
  
  export default MCard;