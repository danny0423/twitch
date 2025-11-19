import { type ReactElement } from 'react';
import { tr } from '../../i18n/config';

function About(): ReactElement {
  return (
    <div>
      <h1>{tr('about.title')}</h1>
      <p>{tr('about.description')}</p>
    </div>
  );
}

export default About;