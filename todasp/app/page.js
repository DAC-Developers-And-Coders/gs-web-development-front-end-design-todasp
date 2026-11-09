import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution';
import Team from './components/Team';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
        <Header />

        <main>
          <Hero />
          <Problem />
          <Solution />
          <Team />
          <Contact />
        </main>

    </>
  );
}
