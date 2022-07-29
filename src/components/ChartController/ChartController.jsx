import Chart from '../Chart/Chart';
import { objectEntriesComparatorDesc } from '../../utils/comparators';

const ChartController = ({ categoryObject }) => {
  const arr = Object.entries(categoryObject);
  console.log(arr.shift());
  const sortArr = arr.sort(objectEntriesComparatorDesc);

  const labels = sortArr.map(el => el[0]);
  const data = sortArr.map(el => el[1]);

  return (
    <>
      <Chart data={data} labels={labels} />
    </>
  );
};
export default ChartController;
