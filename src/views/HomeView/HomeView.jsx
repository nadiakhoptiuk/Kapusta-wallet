import Container from 'components/Container/Container'
import s from './HomeView.module.css';

export default function HomePage() {
return (
    <div className={s.homePage}>
        <Container>
            <h1>hello word</h1>
        </Container>
    </div>
);
}