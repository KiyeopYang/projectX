import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Router from 'next/router';
import Select from './components/Select';
import BottomButton from '../BottomButton';

const styles = theme => ({
  
});
class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      view: 'select',
    };
  }
  handleBlockSelect = (o) => {
    const { selected } = this.state;
    if (selected.indexOf(o) > -1) {
      this.setState({
        selected: selected.filter(oo => oo !== o),
      });
    } else {
      this.setState({
        selected: selected.concat(o),
      });
    }
  }
  render() {
    const { selected } = this.state;
    return (
      <div>
        <Select
          selected={selected}
          handleSelect={this.handleBlockSelect}
        />
        <BottomButton
          color={selected.length ? "primary" : "secondary"}
          onClick={() => (
            Router.push({
              pathname: '/list',
              query: { selected },
            })
          )}
        >
          {selected.length ? "선택 완료" : "넘어가기"}
        </BottomButton>
      </div>
    );
  }
}
export default withStyles(styles)(Component);
