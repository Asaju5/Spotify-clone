import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from '../components/Header/Header'
import Collection from "../components/Home/Collection";
import HomeHero from "../components/Home/HomeHero";
import HomeNav from "../components/Home/HomeNav";



export default function Home() {
  return (
    <div>
      <Head>
        <title>Simeon Portfolio</title>

      </Head>

      <div className='h-screen relative'>
        <Header />
        <HomeHero />
        <HomeNav />
        <Collection />
        <Footer />
      </div>
    </div>
  );
}
