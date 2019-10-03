import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import FileIcon from '@material-ui/icons/InsertDriveFile';
import Delete from '@material-ui/icons/Delete';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, blue } from '@material-ui/core/colors';
import Download from '@material-ui/icons/GetApp';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { maxHeight } from '@material-ui/system';
import axios from 'axios'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 300,
  },
  media: {
    height: 0,
    paddingTop: '30.25%', // 16:9
  }, 
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: blue[500],
  },
}));

const API_URL = 'http://localhost:8080/file';
export default function FileCard(props) {
  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  function deleteFile(){
    if ((window.confirm('Are you sure you wish to delete this item?')) == true ){
    const url = API_URL + '/deleteFile';
    const fileData = { id:props.fileId,
                      fileName:props.fileName,
                      fileType:props.fileType,
                      fileSize:props.fileSize,
                      senderId:props.senderId,
                      receiverId:props.receiverId,
                      ownerId:props.ownerId,
                      fileURI:props.fileURI};
      axios.post(url,fileData )
            .then(res => {
      alert(res.data.message);
})
  }
}


  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.fileName}
        subheader={props.createdDate}
      />
      <CardMedia
        className={classes.media}
        image="/src/Images/susimage.jpg"
        title="Paella dish"
      />
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <Delete onClick={deleteFile}/>
        </IconButton>
        <IconButton aria-label="download">
          <Download/>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>{console.log(props)}
          <Typography>File Id: {props.fileId}</Typography>
          <Typography>File Size: {props.fileSize}</Typography>
          <Typography>File Type: {props.fileType}</Typography>
          <Typography>File Owner Id: {props.ownerId}</Typography>
          <Typography>File Link: {props.fileLink}</Typography>
          <Typography>File Date: {props.fileDate}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}