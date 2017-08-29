import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'legit-o-meter' }
    this.toggleExperience = props.toggleExperience.bind(this);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {
    const { activeItem } = this.state
    const otherExperience = this.props.isTeacher ? "Student" : "Admin"

    return (
      <header className="header">
        <Menu pointing secondary>
          <Link to="/">
            <Menu.Item name='Mission Fake News' active={activeItem === 'legit-o-meter'} onClick={this.handleItemClick} />
          </Link>
          <Menu.Menu position='right'>
            <Menu.Item name={`Switch to ${otherExperience} mode`} onClick={this.toggleExperience} />
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
      </header>
    )
  }
}


export default Header;
