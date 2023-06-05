import { Hero, About, Explore } from "./HomeSection/";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
    </div>
  );
};

export default Home;
