import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Traveling from '../components/Travel/Travel';
import data from '../data/traveling';

const Places = () => (
  <Main>
    <Helmet title="Traveling" />
    <article className="post" id="traveling">
      <header>
        <div className="title">
          <h2><Link to="/traveling">When I have been on the map</Link></h2>
        </div>
      </header>
      {data.map(traveling => (
        <Traveling
          data={traveling}
          key={traveling.continent}
        />
      ))}
    </article>
  </Main>
);

export default Places;



// import React from 'react';
// import { Link } from 'react-router-dom';

// import Main from '../layouts/Main';

// const Index = () => (
//   <Main>
//     <article className="post" id="index">
//       <header>
//         <div className="title">
//           <h2><Link to="/about">About this site</Link></h2>
//         </div>
//       </header>
//       <p> Welcome to my website!</p>
//       <p>Please feel free to read more <Link to="/about">about me</Link>, 
//         or check out my {' '}
//         <Link to="/resume">resume</Link> and side {' '}
//         <Link to="/projects">projects</Link>, {' '}
//         or view <Link to="/stats">fun facts</Link>, {' '}
//         or <Link to="/contact">contact</Link> me. 
//       </p>
//       <p> You can also view my Github <a href="https://github.com/vanthhoang">here</a>.</p>
//     </article>
//   </Main>
// );

// export default Index;
