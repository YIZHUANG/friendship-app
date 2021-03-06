import React from 'react';
import { Icon } from 'react-native-elements';
import { StyleSheet, View, Platform, Dimensions } from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';
import { HeaderButton, PopUpMenuCard } from './Layout/Layout';

class PopUpMenu extends React.Component {
  closeMenu() {
    this.menu.close();
  }
  onRef = r => {
    this.menu = r;
  };
  renderProfile = () => (
    <HeaderButton>
      <PopUpMenuCard>
        <Menu ref={this.onRef} onBackdropPress={() => this.closeMenu()}>
          <MenuTrigger customStyles={styles.triggerStyles}>
            <Icon name="more-vert" />
          </MenuTrigger>
          <MenuOptions customStyles={styles.optionsStyles}>
            <MenuOption
              value={1}
              onSelect={() => alert('navigate to send message')}
              text="Follow Profile"
            />
            <MenuOption
              value={2}
              onSelect={() => alert('navigate to send message')}
              text="Chat"
            />
            <MenuOption
              onSelect={() => alert('navigate to send message')}
              text="Invite to Group"
            />
            <MenuOption
              onSelect={() => alert('navigate to send message')}
              text="Invite to Happening"
            />
            <MenuOption text="Close" />
            <MenuOption onSelect={this.props.isReportVisible} text="Report" />
          </MenuOptions>
        </Menu>
      </PopUpMenuCard>
    </HeaderButton>
  );

  renderChatroom = () => (
    <Menu ref={this.onRef} onBackdropPress={() => this.closeMenu()}>
      <MenuTrigger customStyles={styles.triggerStyles}>
        <Icon name="more-vert" />
      </MenuTrigger>
      <MenuOptions customStyles={styles.optionsStyles}>
        <MenuOption
          value={1}
          onSelect={() => alert('View prof')}
          text="View Profile"
        />
        <MenuOption
          value={2}
          onSelect={() => alert('navigate to send message')}
          text="Invite to squad"
        />
        <MenuOption
          onSelect={() => alert('navigate to send message')}
          text="Invite to happening"
        />
        <MenuOption
          onSelect={() => alert('navigate to send message')}
          text="Block"
        />
        <MenuOption text="Close" />
        <MenuOption onSelect={this.props.isReportVisible} text="Report" />
      </MenuOptions>
    </Menu>
  );
  render = () =>
    this.props.chat ? this.renderChatroom() : this.renderProfile();
}

const styles = {
  popupText: {
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: 20,
    color: '#ff8a65',
  },
  triggerStyles: {
    triggerWrapper: {
      paddingTop: 10,
      paddingBottom: 10,
      paddingRight: 10,
    },
    triggerTouchable: {
      // underlayColor: '#ff8a65',
      // activeOpacity: 70,
    },
  },
  optionsStyles: {
    optionText: {
      fontSize: 18,
    },
  },
  touchableHighlightProps: {
    activeOpacity: 0.5,
    underlayColor: '4a4a4a',
  },
};
export default PopUpMenu;
