import React from "react"; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Button from '@mui/material/Button';





function NewCard(props){


    return(
    <Grid container spacing={4} className="about">
            
              <Grid item key={props.id} m={0} container direction="column" alignItems="center" style={{backgroundColor: "#292C6D" , marginBottom: "0px"}}>
                <Card
                  sx={{ maxWidth: 300, display: "flex", flexDirection: 'column', alignItems:"center" }}
                  style={{height: "auto", width: "500px", marginBottom: "40px", marginTop:"20px"}}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      size: "10px",
                    }}
                    image={props.img}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {props.name}
                    </Typography>
                    <Typography>
                      {props.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Link color="inherit" href={props.link}>
                    <Button variant = "contained" size="small">
                      live Demo
                      <PlayArrowIcon />
                    </Button>
                    </Link>
                    <Link color="inherit" href={props.source}>
                    <Button variant ="outlined" size="small" >
                      Source Code.
                      <GitHubIcon />
                    </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            
          </Grid>
    )}


export default NewCard;