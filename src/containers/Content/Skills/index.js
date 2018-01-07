import React from 'react';

import AnchorsName from '../../../constants';
import Section from '../../../components/Section';
import globalMessages from '../../../messages';

class Skills extends React.Component {
  render() {
    return (
      <Section title={globalMessages.skills} id={AnchorsName.skills}>
        <p> teste </p>
      </Section>
    );
  }
}

export default Skills;