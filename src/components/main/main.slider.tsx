'use client'
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, Divider } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;

    return (
        <Button variant='outlined'

            sx={{
                position: 'absolute',
                right: 0,
                top: '50%',
                zIndex: 2,
                minWidth: 30,
                width: 35,
                color: '#f50',
                border: '1px solid #e5e5e5',
                transform: 'translateY(-50%)',
                '&:hover': {
                    border: '1px solid #f50',
                    '> .chevNext': {
                        color: '#f50'
                    }
                }
            }
            }
            onClick={onClick}
        >
            <ChevronRightIcon className="chevNext" sx={{ color: '#333' }} />
        </Button>
    );
}

function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
        <Button variant="outlined"
            sx={{
                position: 'absolute',
                left: 0,
                top: '50%',
                zIndex: 2,
                minWidth: 30,
                width: 35,
                color: '#f50',
                border: '1px solid #e5e5e5',
                transform: 'translateY(-50%)',
                '&:hover': {
                    border: '1px solid #f50',

                    '> .chevPrev': {
                        color: '#f50'
                    }
                }
            }}
            onClick={onClick}
        >
            <ChevronLeftIcon className="chevPrev" sx={{ color: '#333' }} />
        </Button>
    );
}


const CardItem = () => {
    return <Card sx={{ maxWidth: 345, mr: '20px' }}>
        <CardActionArea>
            <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
}
const MainSlider = () => {

    var settings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

    };
    return <Box sx={{
        margin: '0 50px',
        '.card': {

            padding: '0 10px',

            'h3': {
                border: '1px solid #f50',
                padding: '10px',
                height: '200px'
            }
        }
    }}>
        <h2> List Tracks</h2>
        <Slider  {...settings}>
            <div className="card">
                <h3>Track 1</h3>
            </div>
            <div className="card">
                <h3>Track 2</h3>
            </div>
            <div className="card">
                <h3>Track 3</h3>
            </div>
            <div className="card">
                <h3>Track 4</h3>
            </div>
            <div className="card">
                <h3>Track 5</h3>
            </div>
            <div className="card">
                <h3>Track 6</h3>
            </div>
            <div className="card">
                <h3>Track 7</h3>
            </div>


        </Slider>

        <h2>List Tracks</h2>
        <Slider  {...settings}>
            <div className="card">
                <h3>Track 1</h3>
            </div>
            <div className="card">
                <h3>Track 2</h3>
            </div>
            <div className="card">
                <h3>Track 3</h3>
            </div>
            <div className="card">
                <h3>Track 4</h3>
            </div>
            <div className="card">
                <h3>Track 5</h3>
            </div>
            <div className="card">
                <h3>Track 6</h3>
            </div>
            <div className="card">
                <h3>Track 7</h3>
            </div>


        </Slider>
        <Divider />
    </Box>
}
export default MainSlider;