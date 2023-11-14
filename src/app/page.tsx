

import MainSlider from "@/components/main/main.slider";
import Container from "@mui/material/Container/Container";
import { sendRequestJS } from '../utils/old.api';
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

  const res = await sendRequestJS({
    url: 'http://localhost:8000/api/v1/tracks/top',
    method: 'POST',
    body: {
      category: 'CHILL',
      limit: 1
    }
  })
  console.log(res)

  return <Container>
    <MainSlider />
  </Container>
}
export default HomePage;