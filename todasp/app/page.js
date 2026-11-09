import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution';

export default function Home() {
  return (
    <>
        <Header />

        <main>
          <Hero />
          <Problem />
          <Solution />
        </main>

    </>
  );
}
