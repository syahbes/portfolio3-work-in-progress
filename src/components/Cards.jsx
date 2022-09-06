import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Cards = (props) => {
  return (
    <Card  
    elevation={5}
    sx={{ maxWidth: 345 ,
      '&:hover': {
        boxShadow: 6 ,
      }
    }}>
      <CardActionArea
      onClick={() => window.open(props.url)}
      >
        <CardMedia
          component="img"
          height="140"
          image={props.cover}
          alt={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary" variant="outlined"
          onClick={() => window.open(props.src)}
      >
          Source
        </Button>
        <Button size="small" color="primary"  variant="contained"
        onClick={() => window.open(props.url)}
        >
          Live Demo
        </Button>
      </CardActions>
    </Card>
  );
}

export default Cards