import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class Header extends Component {
  state = { activeItem: 'legit-o-meter' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {
    const { activeItem } = this.state

    return (
      <header className="header">
        <Menu pointing secondary>
          <Menu.Item name='legit-o-meter' active={activeItem === 'legit-o-meter'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
      </header>
    )
  }
}


export default Header;
