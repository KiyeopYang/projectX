import React from 'react';
import Text from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
  buttonWrapper: {
    margin: 'auto',
    width: '100%',
    maxWidth: 500,
  },
  button: {
    borderRadius: 0,
    height: 50,
    fontSize: 24,
  },
};
class Component extends React.Component {
  render() {
    const { classes, children, ...rest } = this.props;
    return (
      <div className={classes.buttonWrapper}>
          <Button
            className={classes.button}
            variant="raised"
            fullWidth
            {...rest}
          >
            {children}
          </Button>
        </div>
    );
  }
}
export default withStyles(styles)(Component);
