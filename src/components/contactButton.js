import React from 'react'
import ContactForm from './contactForm.js'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

const styles = {
  list: {
    width: 250,
  },
  contactForm: {
    width: 'auto',
  },
  button: {
    color: 'primary'
  }
};

class ContactButton extends React.Component {
  state = {
    top: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const contactForm = (
      <div className={classes.contactForm}>
        <ContactForm />
      </div>
    );

    return (
      <div>
        <Button className={classes.button} onClick={this.toggleDrawer('top', true)} variant="outlined">This Button Opens Email Slider</Button>
        <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('top', true)}
            onKeyDown={this.toggleDrawer('top', true)}
          >
            {contactForm}
          </div>
        </Drawer>
      </div>
    );
  }
}

ContactButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactButton);