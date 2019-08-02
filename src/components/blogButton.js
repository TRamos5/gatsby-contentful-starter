import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import PropTypes from 'prop-types';

const styles = {
  button: {
      color: 'primary',
      marginLeft: '2%',
  },
};

class BlogButton extends React.Component {

  render() {
    const { classes } = this.props;
    return (
        <Button className={classes.button} href="/blogposts" variant="outlined">CHECKOUT MY BLOG</Button>
    );
  }
}

BlogButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BlogButton);