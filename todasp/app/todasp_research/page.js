import Map from '../components/todasp_research/Map';
import Header from '../components/todasp_research/Header';
import Statistics from '../components/todasp_research/Statistics';
import Form from '../components/todasp_research/Form';

export default function Research() {
  return (
    <>
        <Header />
        <main>
          <Map />
          <Statistics />
          <Form />
        </main>
    </>
  );
}
