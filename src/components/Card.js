import React from "react"; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';






function NewCard(props){


    return(
    <Grid container spacing={4}>
            
              <Grid item key={props.id} m={2} container direction="column" alignItems="center" style={{backgroundColor: "#292C6D" , marginBottom: "0px"}}>
                <Card
                  sx={{ maxWidth: 400, display: 'flex', flexDirection: 'column', alignItems:"center" }}
                  style={{height: "auto", width: "600px", marginBottom:"10px", marginTop:"10px"}}
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
                    Live preview
                    </Link>
                    <Link color="inherit" href={props.source}>
                    Source Code
                    </Link>
                    <GitHubIcon />
                  </CardActions>
                </Card>
              </Grid>
            
          </Grid>
    )}


export default NewCard;