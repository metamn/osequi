import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Os Equi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Os Equi</p>
      <ul>
        <li>An altruistic web studio.</li>
        <li>If it's greater than you, we are in.</li>
        <li>
          We've accumulated decades of experience in delivering messages. Now we
          put that expertise in the service of the human mankind.
        </li>
        <li>
          It's your turn. Come up with things that matter, and we'll invest
          alongside.
        </li>
      </ul>

      <ul>
        <li>
          We stand on the shoulders of giants. At this moment that's Facebook's
          React and Amazon's Web Services.
        </li>
        <li>Concerns? They are both open source. Millions for free. For us.</li>
        <li>
          More concerns? Yes, they are evil in business now. Tomorrow technology
          will triumph them all. Information wants to be free.
        </li>
      </ul>
    </>
  );
};

export default Home;
