import React from 'react';
import Text from '@material-ui/core/Typography';
import { withStyle } from '@material-ui/core/styles';

const styles = {};
class Component extends React.Component {
  render() {
    return (
      <div>abc</div>
    );
  }
}
export default withStyle(styles)(Component);
