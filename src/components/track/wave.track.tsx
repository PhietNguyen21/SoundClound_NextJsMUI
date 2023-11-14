'use client'
import { useHasMounted } from '@/utils/customHook'
import WaveSurfer from 'wavesurfer.js'
import { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';

const WaveStrack = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const searchParams = useSearchParams();
    const fileName = searchParams.get('audio');
    useEffect(() => {

        if (containerRef.current) {
            const wavesurfer = WaveSurfer.create({
                container: containerRef.current,
                waveColor: 'rgb(200, 0, 200)',
                progressColor: 'rgb(100, 0, 100)',
                url: `/api?audio=${fileName}`,
            })

            wavesurfer.on('click', () => {
                wavesurfer.play()
            })
        }

    }, [])

    return <div ref={containerRef}>

    </div>

}


export default WaveStrack;