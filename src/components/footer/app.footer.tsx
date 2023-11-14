'use client'
import { Box, AppBar, Container } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import React from 'react'
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useHasMounted } from '@/utils/customHook';


const AppFooter = () => {
    const hasMounted = useHasMounted();

    if (!hasMounted) {
        return <></>
    }


    // console.log(process.env.NEXT_PUBLIC_BACKEND_URL)
    return (

        <AppBar position='fixed' sx={{ top: 'auto', bottom: 0, bgcolor: '#f2f2f2' }}>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                <AudioPlayer

                    style={{ boxShadow: 'unset', backgroundColor: '#f2f2f2', width: '90%' }}
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/tracks/hoidanit.mp3`}
                    // onPlay={e => console.log("onPlay")}
                    // other props here
                    // showSkipControls={true}
                    // showFilledVolume={true}

                    // customIcons={{
                    //     play: <PlayArrowIcon />
                    // }}
                    customControlsSection={
                        [

                            RHAP_UI.ADDITIONAL_CONTROLS,
                            RHAP_UI.MAIN_CONTROLS,
                            RHAP_UI.VOLUME_CONTROLS,
                            // <Box sx={{ position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)' }}>
                            //     <p style={{ color: '#ccc' }}>Van Phiet</p>
                            //     <p style={{ color: '#333' }} >FriendShip</p>
                            // </Box>,
                        ]
                    }

                />
                <Box sx={{}}>
                    <p style={{ color: '#ccc', marginBottom: 0 }}>Van Phiet</p>
                    <p style={{ color: '#333' }}>DJ REMIX</p>
                </Box>
            </Container>

        </AppBar >

    );
}

export default AppFooter