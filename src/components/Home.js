import "./Home.css";

function Home() {
  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Parallax Star Background</title>

        <link rel="stylesheet" href="./Home.css" />
      </head>
      <body>
        <section class="wrapper">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="title">
            <span>Jeremiah Pete</span>
            <br />
            <p>The size 18 shoe software developer</p>
          </div>
        </section>
      </body>
    </html>
  );
}

export default Home;
