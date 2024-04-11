import {Link} from 'react-router-dom';

export function Home() {
  return (
    <div>
      <h1>Welcome to ClonBuster</h1>
      <Link to='/movies'>Movies</Link>
    </div>
  );
}