

import MainSlider from "@/components/main/main.slider";
import Container from "@mui/material/Container/Container";
import { sendRequestJS } from '../utils/old.api';
import { sendRequest } from "@/utils/api";
const HomePage = async () => {
  // const res = await fetch('http://localhost:8000/api/v1/tracks/top', {
  //   method: 'POST',
  //   headers: {
  //     'Content-type': 'application/json',
  //     // 'Authorization': `Bearer ${token}`, // notice the Bearer before your token
  //   },
  //   body: JSON.stringify({
  //     category: 'CHILL',
  //     limit: 10
  //   })
  // })
  // const d = await res.json();
  // console.log(d);

  const chill = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: 'http://localhost:8000/api/v1/tracks/top',
    method: 'POST',
    body: {
      category: 'CHILL',
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

  const party = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: 'http://localhost:8000/api/v1/tracks/top',
    method: 'POST',
    body: {
      category: 'PARTY',
      limit: 10
    }
  })


  return <Container>
    <MainSlider title={'Top Chill'} data={chill?.data ?? []} />
    <MainSlider title={'Top Workout'} data={workouts?.data ?? []} />
    <MainSlider title={'Top Party'} data={party?.data ?? []} />
  </Container>
}
export default HomePage;