import { IncomesInMonthly } from 'components/IncomesInMonthly';
import Container from 'components/Container/Container';
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

      arrayOfDescription && setDiagramData(arrayOfDescription[1]);
    }
  }, [currentPeriodData, selectedCategory, selectedOperation]);

  return (
    <Container>
      <div className={s.balance_line}>
        <IncomesInMonthly />
      </div>

      <FinancialReport
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedOperation={selectedOperation}
        setSelectedOperation={setSelectedOperation}
      />
      <ChartController categoryObject={diagramData} />
    </Container>
  );
}
