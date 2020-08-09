import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Os Equi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Os Equi</p>
      <p>An altruistic web studio.</p>
      <p>If it's greater than you, we are in.</p>
      <p>
        We've accumulated experience in delivering the message. We put that
        expertise to serve mankind. Now it's your turn. Come up with ideas that
        matter, and we'll invest alongside.
      </p>

      <button>I've got an idea</button>

      <p>Projects:</p>
      <ul>
        <li>A Design System for all. --> Open source</li>
        <li>A take on React best practices. --> Open source</li>
        <li>
          Rapid prototyping with Google Material UI and React --> Open source
        </li>
        <li>Responsive images for React --> Open source</li>
        <li>inu.ro, a photographer's portfolio --> Open source</li>
        <li>A take on WordPress best practices. --> Open source</li>
        <li>
          Log Lolla, a WordPress theme to capture knowledge. --> Open source,
          featured in WordPress Theme Store
        </li>
        <li>
          Gust, a postmodern dictionary. --> Open source, featured on Brutalist
          Websites
        </li>
        <li>
          Yet Another Color Scheme Designer + Color Theory --> Open source
        </li>
        <li>
          Gravity point. Find the centre of gravity of a webpage --> Open source
        </li>
      </ul>

      <p>Articles:</p>
      <ul>
        <li>Ontology, taxonomy, choreography.</li>
        <li>Bauhaus to emoji: A call for a new typography.</li>
        <li>Consistently eventual.</li>
        <li>The journey of a blog post in 2020.</li>
        <li>Rethinking The Web, The Internet, And Our Roles Within.</li>
        <li>Fonts for open source projects.</li>
        <li>Devices as designers.</li>
        <li>Delivering the message.</li>
      </ul>

      <p>
        We do consulting, mentoring and tutoring on React and Design Systems.
        <button>Hire us</button>
      </p>

      <p>News:</p>
      <ul>
        <li>Energy-saving design for Os Equi.</li>
      </ul>

      <p>Resources:</p>
      <ul>
        <li>Google Tech writing course ...</li>
      </ul>
    </>
  );
};

export default Home;
