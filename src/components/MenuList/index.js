import React from 'react';
import styled from 'styled-components';
import Scrollchor from 'react-scrollchor';
import { FormattedMessage } from 'react-intl';

import Colors from '../../assets/colors';
import AnchorsName from '../../constants';
import MenuLinks from './Links';

const Anchor = styled(Scrollchor)`
  padding: 8px;
  text-decoration: none;
  color: ${(props) => props['data-side-menu'] ? Colors.lightGrey : Colors.grey};
  font-weight: 300;
  &:hover {
    color: #2B3034;
    text-decoration: underline;
  }
`;

const Wrapper = styled.div`
  display: inline-block;
`;

class MenuList extends React.PureComponent {

  goTo = (anchorName) => `#${anchorName}`

  render() {
    return (
      MenuLinks.map((link) =>
        <Wrapper key={link.key} onClick={this.props.onClick}>
          <Anchor
            to={this.goTo(AnchorsName[link.key])}
            {...this.props}>
            <FormattedMessage {...link.message} />
          </Anchor>
        </Wrapper>
      )
    );
  }
}

export default MenuList;
