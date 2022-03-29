import Top100 from '../../components/Top100/Top100';
import Top250 from '../../components/Top250/Top250';
import TopAwaited from '../../components/TopAwaited/TopAwaited';
import './Home.scss';

const Home = () => {
  return (
    <section className='home'>
      <Top250 />
      <Top100 />
      <TopAwaited />
    </section>
  );
};

export default Home;
