'use client'
import { useHasMounted, useWavesurfer } from '@/utils/customHook'
import WaveSurfer, { WaveSurferOptions } from 'wavesurfer.js'
import { useEffect, useMemo, useRef, useCallback, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Box, Container, Grid, Button, Paper, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PlayArrow, PauseCircle, Pause } from '@mui/icons-material';
import './wave.scss';
const WaveStrack = () => {

    const [time, setTime] = useState<string>('0:00');
    const [duration, setDuration] = useState<string>('0:00');

    const containerRef = useRef<HTMLDivElement>(null);
    const timeRef = useRef<HTMLDivElement>(null);
    const durationRef = useRef<HTMLDivElement>(null);
    const hoverRef = useRef<HTMLDivElement>(null)


    const searchParams = useSearchParams();

    const fileName = searchParams.get('audio');

    const [isPlaying, setIsPlaying] = useState<boolean>(false)

    const Item = styled(Paper)(({ theme }) => ({

    }));


    // Arr comment 
    const arrComments = [
        {
            id: 1,
            avatar: "http://localhost:8000/images/chill1.png",
            moment: 10,
            user: "username 1",
            content: "just a comment1"
        },
        {
            id: 2,
            avatar: "http://localhost:8000/images/chill1.png",
            moment: 30,
            user: "username 2",
            content: "just a comment3"
        },
        {
            id: 3,
            avatar: "http://localhost:8000/images/chill1.png",
            moment: 50,
            user: "username 3",
            content: "just a comment3"
        },
    ]


    const calcPostion = (moment: number) => {
        let percent = (moment / 199) * 100;
        return percent;
    }


    const optionMemo = useMemo((): Omit<WaveSurferOptions, 'container'> => {

        let gradient, progressGradient;

        if (typeof document !== 'undefined') {
            const canvas = document.createElement('canvas');

            const ctx = canvas.getContext('2d')!;

            gradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 1.35)
            gradient.addColorStop(0, '#656666') // Top color
            gradient.addColorStop((canvas.height * 0.7) / canvas.height, '#656666') // Top color
            gradient.addColorStop((canvas.height * 0.7 + 1) / canvas.height, '#ffffff') // White line
            gradient.addColorStop((canvas.height * 0.7 + 2) / canvas.height, '#ffffff') // White line
            gradient.addColorStop((canvas.height * 0.7 + 3) / canvas.height, '#B1B1B1') // Bottom color
            gradient.addColorStop(1, '#B1B1B1') // Bottom color

            // Define the progress gradient
            progressGradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 1.35)
            progressGradient.addColorStop(0, '#EE772F') // Top color
            progressGradient.addColorStop((canvas.height * 0.7) / canvas.height, '#EB4926') // Top color
            progressGradient.addColorStop((canvas.height * 0.7 + 1) / canvas.height, '#ffffff') // White line
            progressGradient.addColorStop((canvas.height * 0.7 + 2) / canvas.height, '#ffffff') // White line
            progressGradient.addColorStop((canvas.height * 0.7 + 3) / canvas.height, '#F6B094') // Bottom color
            progressGradient.addColorStop(1, '#F6B094') // Bottom color
        }

        return {
            waveColor: gradient,
            progressColor: progressGradient,
            url: `/api?audio=${fileName}`,
            height: 100,
            barWidth: 3,
            barRadius: 2,
        }
    }, []);

    const wavesurfer = useWavesurfer(containerRef, optionMemo);

    useEffect(() => {
        if (!wavesurfer) return

        setIsPlaying(false)

        const subscriptions = [
            wavesurfer.on('play', () => setIsPlaying(true)),
            wavesurfer.on('pause', () => setIsPlaying(false)),

        ]
        wavesurfer.on('click', () => {
            wavesurfer.play()
        })

        // Current time & duration
        const formatTime = (seconds: number) => {
            const minutes = Math.floor(seconds / 60)
            const secondsRemainder = Math.round(seconds) % 60
            const paddedSeconds = `0${secondsRemainder}`.slice(-2)
            return `${minutes}:${paddedSeconds}`
        }

        wavesurfer.on('decode', (duration: number) => {
            setDuration(formatTime(duration))
        })
        wavesurfer.on('timeupdate', (currentTime: number) => {
            setTime(formatTime(currentTime))
        })


        // Hover effect
        if (containerRef.current) {

            containerRef.current.addEventListener('pointermove', (e) => (hoverRef.current!.style.width = `${e.offsetX}px`))
        }
        return () => {
            subscriptions.forEach((unsub) => unsub())
        }
    }, [wavesurfer]);



    const onPlayClick = useCallback(() => {
        if (wavesurfer) {
            wavesurfer.isPlaying() ? wavesurfer.pause() : wavesurfer.play()
        }
    }, [wavesurfer])


    return <Box sx={{ margin: '100px 0' }}>
        <Container sx={{
            background: "linear-gradient(135deg, rgb(106, 112, 67) 0%, rgb(11, 15, 20) 100%)"
        }} >
            <Grid sx={{ paddingBottom: '40px' }} container spacing={6} >
                <Grid item xs={8}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <button style={{ cursor: 'pointer', backgroundColor: '#f60', width: '50px', height: '50px', borderRadius: '100%', border: 'none' }} onClick={onPlayClick} >
                            {isPlaying ? <Pause fontSize='large' sx={{ color: 'white' }} /> : <PlayArrow fontSize='large' sx={{ color: 'white' }} />}
                        </button>
                        <div style={{ marginLeft: '10px' }}>
                            <p style={{ padding: '10px 5px', backgroundColor: 'black', color: 'white' }}>DJ REMIX</p>
                            <p style={{ padding: '10px 5px', backgroundColor: 'black', color: 'white' }}>VP</p>
                        </div>
                    </Box>


                    <div ref={containerRef} className='waveform'>

                        <div className='time' ref={timeRef}>{time}</div>
                        <div className='duration' ref={durationRef} >{duration}</div>
                        <div className='hover' ref={hoverRef}></div>
                        <div className="overlay"
                            style={{
                                position: "absolute",
                                height: "30px",
                                width: "100%",
                                bottom: "0",
                                backdropFilter: 'brightness(0.7)',
                                zIndex: 10,
                            }}
                        >
                            <div className='comments' style={{ width: '100%', position: 'relative' }}>
                                {arrComments.map(item => {
                                    return <Tooltip title={`${item.user} | ${item.content}`} arrow>
                                        <img
                                            onPointerMove={(e) => {
                                                hoverRef.current!.style.width = `${calcPostion(item.moment)}%`
                                            }}
                                            className={"" + item.id} key={item.id} style={{ width: '25px', height: '25px', position: 'absolute', top: 0, left: `${calcPostion(item.moment)}%` }}
                                            src={item.avatar} alt='img' />
                                    </Tooltip>

                                })}
                            </div>

                        </div>


                    </div>

                </Grid>

                <Grid item xs={4}>
                    <Box sx={{ bgcolor: 'black', height: 200, width: 200, color: 'white' }}>IMG</Box>
                </Grid>
            </Grid>


        </Container>
    </Box >


}


export default WaveStrack;