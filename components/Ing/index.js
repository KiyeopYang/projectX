import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Text from '@material-ui/core/Typography'

const Ingredients = [
  {
    name: {
      kr: '오메가-3',
      en: 'Omega-3',
    },
    property: ['면역력', '우울감', '혈액 순환'],
    desc: {
      default: 'N-3 지방산은 대중적으로 ω−3 지방산, 오메가-3 지방산으로 알려져 있으며, 오메가-3 지방산, ω−3 지방산 또는 N-3 지방산은 탄소 사슬의 끝에서 세 번째 탄소에서부터 이중 결합이 시작되는 필수 불포화 지방산이다. 불포화 지방산은 인체내에서 합성되지 않지만 대사활동에 필수적인 분자들이다. 필수 지방산의 두 가지 종류 중의 하나가 오메가-3 지방산이다. ',
    },
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
    width: 500,
    margin: 'auto',
  },
});
class Component extends React.Component {
  render() {
    const { classes, selected } = this.props;
   
    return (
      <div className={classes.layout}>
        <Text>오메가-3</Text>
        <Text>Omega-3</Text>
        <div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Component);
