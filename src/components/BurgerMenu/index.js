import React from 'react';
import { slide as Menu } from 'react-burger-menu'

import MenuList from '../MenuList';
import Colors from '../../assets/colors';

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '24px',
    height: '20px',
    left: '36px',
    top: '36px',
  },
  bmMenuWrap: {
    left: '0px',
    top: '0px',
  },
  bmBurgerBars: {
    height: '2px',
    width: '24px',
    background: '#373a47',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenu: {
    background: Colors.grey,
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
    display: 'flex',
    flexDirection: 'column',
  },
  bmOverlay: {
    top: '0px',
    left: '0px',
    background: 'rgba(0, 0, 0, 0.3)',
  }
}


class BurguerMenu extends React.PureComponent {
  render() {
    return (
      <Menu styles={styles}>
        <MenuList sideMenu />
      </Menu>
    );
  }
}


export default BurguerMenu;
