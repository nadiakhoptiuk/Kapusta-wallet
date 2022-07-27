import { IncomesInMonthly } from 'components/IncomesInMonthly' 
import Container from 'components/Container/Container'
import s from './ReportView.module.css'

export default function ReportView() {
    return (
        <Container >
        <div className={s.balance_line}>
            <IncomesInMonthly  />
            </div>
        </Container>
    )
}