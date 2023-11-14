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
import { useRouter } from "next/navigation";


function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;

    return (
        <Button variant='contained'
            color="inherit"
            sx={{
                position: 'absolute',
                right: 0,
                top: '30%',
                zIndex: 2,
                minWidth: 30,
                width: 35,
                border: '1px solid #e5e5e5',
                // transform: 'translateY(-50%)',
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
        <Button variant="contained"
            color="inherit"
            sx={{
                position: 'absolute',
                left: 0,
                top: '30%',
                zIndex: 2,
                minWidth: 30,
                width: 35,
                // color: '#f50',
                border: '1px solid #e5e5e5',
                // transform: 'translateY(-50%)',
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

interface Iprops {
    data: ITrackTop[],
    title: string,
}

const MainSlider = (props: Iprops) => {
    // console.log('Check data', props.data)
    // const linkImg = env.proccess.NEXT_PUBLIC_BACKEND_URL;
    const { data, title } = props;

    const route = useRouter();

    var settings: Settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

    };
    return <Box sx={{
        margin: '10px 50px',
        '.track': {
            // textAlign: 'center',
            padding: '0 10px',
            'img': {
                height: '200px'
            },
            '.card-footer': {
                height: '70px',
                width: '90%',
                margin: 'auto',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
                'h4': {
                    margin: '0'
                },
                'h5': {
                    margin: '0'
                }
            }
        }
    }}>
        <h2> {title}</h2>
        <Slider  {...settings}>

            {data.map((track, index) => {
                return <div className="track" key={track._id}>
                    <div style={{ textAlign: 'center' }}> <img style={{ width: '90%', margin: 'auto' }} src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${track.imgUrl}`} alt="" /></div>
                    <div className="card-footer">
                        <h4 style={{ cursor: 'pointer' }} onClick={() => {
                            route.push(`/track/${track._id}?audio=${track.trackUrl}`)
                        }}>{track.title}</h4>
                        <h5> {`${track.category.toLowerCase()} ${index + 1}`}</h5>
                    </div>
                </div>
            })}


        </Slider>
        <Divider style={{ margin: '30px 0' }} />
    </Box>
}
export default MainSlider;