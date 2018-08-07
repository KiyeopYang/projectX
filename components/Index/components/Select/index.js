import React from 'react';
import Text from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import classnames from 'classnames';
import BottomButton from '../../../BottomButton';

const Items = [
  '면역력',
  '피부',
  '모발',
  '피로',
  '우울감',
  '성 건강',
  '노화',
  '수면',
  '시력',
];
const styles = theme => ({
  list: {
    listStyle: 'none',
    width: 320,
    height: 300,
  },
  block: {
    border: '1px solid grey',
    padding: 0,
    height: 'auto',
    cursor: 'pointer',
  },
  selectedBlock: {
    background: theme.palette.primary.light,
  },
  tile: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tileText: {
    fontSize: 20,
  },
  selectedTileText: {
    color: theme.palette.primary.contrastText,
  },
  title: {
    marginTop: 24,
    textAlign: 'center',
  },
});
class Component extends React.Component {
  render() {
    const { classes, selected, handleSelect } = this.props;
    return (
      <React.Fragment>
        <div className={classes.title}>
          <Text variant="display1">건강 기능 식품</Text>
          <Text variant="display1" gutterBottom>성분 정보</Text>
          <Text variant="headline" gutterBottom>어떤 것을 개선하고 싶나요?</Text>
        </div>
        <GridList
          className={classes.list}
          cellHeight="auto"
          cols={3}
          spacing={0}
          style={{ margin: 'auto' }}
         >
          {
            Items.map((o, i) => (
              <GridListTile
                classes={{
                  root: classnames(classes.block, {
                    [classes.selectedBlock]: selected.indexOf(o) > -1,
                  }),
                  tile: classes.tile,
                }}
                key={o}
                onClick={() => handleSelect(o)}
              >
                <Text
                  className={classnames({
                    [classes.selectedTileText]: selected.indexOf(o) > -1,
                  })}
                  variant="title"
                >
                  {o}
                </Text>
              </GridListTile>
            ))
          }
        </GridList>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(Component);
