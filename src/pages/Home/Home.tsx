import { type ReactElement } from 'react';
import { tr } from '../../i18n/config';

function Home(): ReactElement {
  return (
    <div>
      <h1>{tr('home.title')}</h1>
      <p>{tr('home.description')}</p>
    </div>
  );
}

export default Home;