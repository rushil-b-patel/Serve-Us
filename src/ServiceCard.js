import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ServiceCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia 
          component="img"
          height="140"
          image={props.image}
          alt={props.ServiceName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.ServiceName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.Description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <Link style={{ textDecoration: 'none', color:'blue'}} to='/Form'>
          Apply
        </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
