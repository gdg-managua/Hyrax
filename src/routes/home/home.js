import Meetup from '../meetup/Meetup';
import style from './style';

const Home = () => (
	<div class={style.home}>
		<h1>Tell us your idea</h1>
		<Meetup />
	</div>
);

export default Home;
