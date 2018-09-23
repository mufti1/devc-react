import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

    
const BlogList = props => {
    return (
<Card style={styles.card}>
<CardContent>
  <Typography style={styles.title} color="textSecondary">
   {props.author}
  </Typography>
  <Typography variant="headline" component="h2">
   {props.title}
  </Typography>
  <Typography style={styles.pos} color="textSecondary">
    {props.date}
  </Typography>
  <Typography component="p">
   {props.content}
  </Typography>
</CardContent>
<CardActions>
  <Button size="small">This page build with Vue JS</Button>
</CardActions>
</Card>
    )
}

const styles = {
    card: {
      minWidth: 275,
      backgroundColor: "#ecf0f1",
      marginBottom: 20
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      marginBottom: 16,
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  };
export default BlogList