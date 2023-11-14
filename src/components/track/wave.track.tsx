'use client'
import { useHasMounted } from '@/utils/customHook'
import WaveSurfer from 'wavesurfer.js'
import { useEffect } from 'react';

const WaveStrack = () => {
    useEffect(() => {
        const element = document.getElementById('track');
        if (element) {
            const wavesurfer = WaveSurfer.create({
                container: element,
                waveColor: 'rgb(200, 0, 200)',
                progressColor: 'rgb(100, 0, 100)',
                url: '/tracks/friendShip.mp3',
            })

            wavesurfer.on('click', () => {
                wavesurfer.play()
            })
        }

    }, [])




    return <div id='track'>

    </div>

}


export default WaveStrack;