import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { useDispatch } from "react-redux";
import { startSelectedAnime } from "../store/select/thunks";
//import { useNavigate } from "react-router";
//import { Link } from "react-router-dom";
export const Modelocard = ({title,images,episodes,mal_id}) => {
    
    const dispatch = useDispatch();

    //const navigate = useNavigate();

    const onclik = (event) => {
        
        console.log(title,episodes);
        dispatch(startSelectedAnime({title,images,episodes}))
        //navigate(`/anime/${mal_id}`);

    }
  
    return (
    <>
        <Card
        //component={Link}    
        //to={`/anime/${title}`}
        onClick={onclik}
        sx={{
            maxWidth:150,
            maxHeight:250,
            m:"5px 5px",
        }}>
            <CardActionArea>
                <CardMedia
                    sx={{
                        objectFit:'fill',
                        minWidth:"148px"
                    }}
                    component="img"
                    height="200"
                    width="100%"
                    image={images.jpg.image_url}
                />
                <CardContent sx={{
                    height:"100vh",
                    padding:0,
                    //backgroundColor:"green"

                }}>
                    <Typography >
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </>
  )
}