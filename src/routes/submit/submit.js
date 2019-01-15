import { Component } from 'preact';
import styles from './styles';

export default class Submit extends Component {
	render() {
		return (
			<div class={styles.submit}>
				<form>
					<div>
						<label>
							<h3>First Name</h3>
							<input type="text" name="firstname" />
						</label>
					</div>

					<div>
						<label>
							<h3>Last Name</h3>
							<input type="text" name="lastname" />
						</label>
					</div>

					<div>
						<label>
							<h3>Talk Title</h3>
							<input type="text" name="title" />
						</label>
					</div>

					<div>
						<label>
							<h3>Description</h3>
							<input type="text" name="description" />
						</label>
					</div>

					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}
