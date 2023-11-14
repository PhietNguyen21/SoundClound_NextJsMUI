'use client'
import { useSearchParams } from "next/navigation";
import WaveStrack from "@/components/track/wave.track";
const DetailsStackPage = ({ params }: { params: { slug: string } }) => {
    // console.log(props)

    const searchParams = useSearchParams();
    const search = searchParams.get('audio');
    console.log(search)
    return <div>
        <WaveStrack />
    </div>
}

export default DetailsStackPage;