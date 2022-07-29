import Chart from '../Chart/Chart';

const ChartController = () => {
  const data = [12, 10, 13, 15, 17, 32];
  const labels = ['meat', 'apple', 'eggs', 'meat', 'apple', 'eggs'];
  return (
    <>
      <Chart data={data} labels={labels} />
    </>
  );
};
export default ChartController;
