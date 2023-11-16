

import MainSlider from "@/components/main/main.slider";
import Container from "@mui/material/Container/Container";
import { sendRequestJS } from '../utils/old.api';
import { sendRequest } from "@/utils/api";
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from "next-auth/next"

// import { useSession, signIn, signOut } from "next-auth/react"
const HomePage = async () => {

  // Session Sever
  const session = await getServerSession(authOptions);
  console.log('Session sever', session);

  const chill = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: 'http://localhost:8000/api/v1/tracks/top',
    method: 'POST',
    body: {
      category: 'CHILL',
      limit: 10
    }
  })



  const party = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: 'http://localhost:8000/api/v1/tracks/top',
    method: 'POST',
    body: {
      category: 'PARTY',
      limit: 10
    }
  })

  const workouts = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: 'http://localhost:8000/api/v1/tracks/top',
    method: 'POST',
    body: {
      category: 'WORKOUT',
      limit: 10
    }
  })
  return <Container>
    <MainSlider title={'Top Chill'} data={chill?.data ?? []} />
    <MainSlider title={'Top Party'} data={party?.data ?? []} />
    <MainSlider title={'Top Workout'} data={workouts?.data ?? []} />

  </Container>
}
export default HomePage;