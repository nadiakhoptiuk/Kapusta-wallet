import Chart from '../Chart/Chart';
import { objectEntriesComparatorDesc } from '../../utils/comparators';

const ChartController = ({ categoryObject }) => {
  const arr = Object.entries(categoryObject);
  const sortArr = arr.sort(objectEntriesComparatorDesc);
  const labels = sortArr.map(el => el[0]);
  const data = sortArr.map(el => el[1]);
  const maxData = Math.max(...data) * 1.2;

  return (
    <>
      {sortArr.length !== 0 ? (
        <Chart data={data} labels={labels} maxData={maxData} />
      ) : null}
    </>
  );
};
export default ChartController;
