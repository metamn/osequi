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

      <p>Approach:</p>
      <ul>
        <li>
          We stand on the shoulders of giants. At this moment that's Facebook's
          React and Amazon's Web Services (AWS).
        </li>
        <li>
          Concerns? React is open source. Millions for free. For us. AWS is the
          low cost infrastructure service.
        </li>
        <li>
          More concerns? Yes, they might be evil in business now. Tomorrow
          technology will triumph them all. Information, like us, wants to be
          free.
        </li>
      </ul>

      <p>Sustainability:</p>
      <ul>
        <li>We are working on, and invest in altruistic projects first.</li>
        <li>
          When needed we take commercial projects, for profit, and convert the
          learnings in future Os Equi projects.
        </li>
      </ul>

      <p>Projects:</p>
      <ol>
        <li>A Design System for all. --> Open source</li>
      </ol>

      <p>News:</p>
      <ol>
        <li>Energy-saving design for Os Equi. --> Open source</li>
      </ol>
    </>
  );
};

export default Home;
