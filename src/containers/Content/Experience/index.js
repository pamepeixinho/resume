import React from 'react';
import { injectIntl, intlShape } from 'react-intl';

import AnchorsName from '../../../constants';
import Section from '../../../components/Section';
import SummaryBox from '../../../components/SummaryBox';

import messages from './messages';
import globalMessages from '../../../messages';

class Experience extends React.Component {
  render() {
    const { intl } = this.props;

    const sweStartDate = intl.formatDate(new Date(2017, 11), {
      year: 'numeric',
      month: 'long',
    });

    const sweEndDate = intl.formatMessage(messages.now);

    const sweInternStartDate = intl.formatDate(new Date(2016, 5), {
      year: 'numeric',
      month: 'long',
    });

    const sweInternEndDate = intl.formatDate(new Date(2017, 11), {
      year: 'numeric',
      month: 'long',
    });

    return (
      <Section
        id={AnchorsName.experience}
        title={globalMessages.experience}
      >
        <SummaryBox
          title={messages.sweTitle}
          subtitle={messages.quintoAndar}
          description={messages.sweDescription}
          startDate={sweStartDate}
          endDate={sweEndDate}
        />
        <SummaryBox
          title={messages.sweInternTitle}
          subtitle={messages.quintoAndar}
          description={messages.sweInternDescription}
          startDate={sweInternStartDate}
          endDate={sweInternEndDate}
        />
      </Section>
    );
  }
}

Experience.propType = {
  intl: intlShape.isRequired,
};

export default injectIntl(Experience);
