import { IncomesInMonthly } from 'components/IncomesInMonthly';
import s from './ReportView.module.css';
import FinancialReport from 'components/FinancialReport';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { currentPeriodDataSelector } from 'redux/currentPeriod/period-selectors';
import transactionTypes from 'utils/transactionTypes';
import ChartController from 'components/ChartController';

export default function ReportView() {
  const { expenses } = transactionTypes;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedOperation, setSelectedOperation] = useState(expenses);
  const [diagramData, setDiagramData] = useState({});

  const currentPeriodData = useSelector(currentPeriodDataSelector);

  useEffect(() => {
    if (Object.keys(currentPeriodData).length > 0) {
      const currentOperationData =
        currentPeriodData[selectedOperation][`${selectedOperation}Data`];

      const arrayOfDescription = Object.entries(currentOperationData).find(
        item => item[0] === selectedCategory
      );

      if (arrayOfDescription) {
        setDiagramData(arrayOfDescription[1]);
      } else {
        setDiagramData({});
      }
    }
  }, [currentPeriodData, selectedCategory, selectedOperation]);

  // console.log(diagramData);

  return (
    <>
      <div className={s.fon}></div>
      <div className={s.img}></div>
        <div className={s.balance_line}>
          <IncomesInMonthly />
        </div>
        <div className={s.module}>
          <FinancialReport
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedOperation={selectedOperation}
            setSelectedOperation={setSelectedOperation}
          />
        </div>

        {!!Object.keys(diagramData)?.length && (
          <div className={s.module}>
            <ChartController categoryObject={diagramData} />
          </div>
        )}
    </>
  );
}
