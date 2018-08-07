import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Chip from '@material-ui/core/Chip';
import Text from '@material-ui/core/Typography'
import Router from 'next/router';
import BottomButton from '../BottomButton';

const Ingredients = [
  {
    name: {
      kr: '오메가-3',
      en: 'Omega-3',
    },
    property: ['면역력', '우울감', '혈액 순환'],
  },
  {
    name: {
      kr: '비타민-D',
      en: 'Vitamin-D',
    },
    property: ['면역력', '우울감'],
  },
  {
    name: {
      kr: '아연',
      en: 'Zinc',
    },
    property: ['면역력', '피부', '성 건강'],
  },
  {
    name: {
      kr: '셀레늄',
      en: 'Selenium',
    },
    property: ['면역력', '성 건강', '노화', '피부', '혈액 순환'],
  },
  {
    name: {
      kr: '불포화 지방',
      en: 'Unsaturated Fat',
    },
    property: ['면역력', '혈액 순환'],
  },
  {
    name: {
      kr: '엽록소',
      en: 'Chlorophyll',
    },
    property: ['면역력', '피부', '노화'],
  },
  {
    name: {
      kr: '베타카로틴',
      en: 'B-Carotene',
    },
    property: ['면역력', '노화', '혈액 순환'],
  },
  {
    name: {
      kr: '단백질',
      en: 'Protein',
    },
    property: ['면역력'],
  },
];
const styles = theme => ({
  chip: {
    height: 24,
  },
  listItem: {
    display: 'block'
  },
  list: {
    paddingTop: 0,
    paddingBottom: 0,
    width: '100%',
    maxWidth: 500,
    margin: 'auto',
  },
});
class Component extends React.Component {
  render() {
    const { classes, selected } = this.props;
    const Items = [];
    Ingredients.map((o) => {
      const chips = [];
      let NumOfSelected = 0;
      const pro = o.property.map(oo => oo);
      if (selected) {
        let sel = selected;
        if (!Array.isArray(selected)) {
          sel = [selected];
        }
        sel.forEach((oo) => {
          const idx = pro.indexOf(oo);
          if (idx > -1) {
            chips.push(
              <Chip
                className={classes.chip}
                key={o+oo}
                label={oo}
                color="primary"
              />
            );
            NumOfSelected += 1;
            pro.splice(idx, 1);
          }
        });
      }
      pro.forEach((oo) => {
        if(chips.indexOf(oo) < 0) {
          chips.push(
            <Chip
              className={classes.chip}
              key={oo}
              label={oo}
            />
          );
        }
      });
      Items.push({
        Ele: (
          <ListItem
            button
            className={classes.listItem}
            key={o.name.en}
            onClick={() => Router.push({
              pathname: '/ing',
              query: { selected, ing: o.name.kr },
            })}
          >
            <div>
              <Text variant="subheading" gutterBottom>
                {`${o.name.kr} ${o.name.en}`}
              </Text>
            </div>
            <div>
              {chips}
            </div>
          </ListItem>
        ),
        NumOfSelected,
      });
    });
    Items.sort((a, b) => a.NumOfSelected - b.NumOfSelected < 0);
    return (
      <div className={classes.layout}>
        <List className={classes.list}>
          {Items.map(o => o.Ele)}
        </List>
        <BottomButton
          color="secondary"
          onClick={() => (
            Router.push({
              pathname: '/',
            })
          )}
        >
          뒤로가기
        </BottomButton>
      </div>
    );
  }
}
export default withStyles(styles)(Component);
