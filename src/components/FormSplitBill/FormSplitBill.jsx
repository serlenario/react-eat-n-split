import { useState } from 'react';
import Button from '../Button/Button';
import './FormSplitBill.css';

function FormSplitBill({ selectedFriend, onSplitBill }) {
	const [bill, setBill] = useState('');
	const [paidByUser, setPaidByUser] = useState('');
	const paidByFriend = bill ? bill - paidByUser : '';
	const [whoIsPaying, setWhoIsPaying] = useState('user');

	function handleSubmit(e) {
		e.preventDefault();

		if (!bill || !paidByUser) return;

		onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser);
	}

	return (
		<form className='form-split-bill' onSubmit={handleSubmit}>
			<h2>SPLIT A BILL WITH {selectedFriend.name}</h2>

			<label>💰 Bill value</label>
			<input
				type='text'
				value={bill}
				onChange={e => setBill(+e.target.value)}
			/>

			<label>🧍‍♀️ Your expense</label>
			<input
				type='text'
				value={paidByUser}
				onChange={e =>
					setPaidByUser(+e.target.value > bill ? paidByUser : +e.target.value)
				}
			/>

			<label>👫 {selectedFriend.name}'s expense</label>
			<input type='text' disabled value={paidByFriend} />

			<label>🤑 Who is paying the bill</label>
			<select
				value={whoIsPaying}
				onChange={e => setWhoIsPaying(e.target.value)}
			>
				<option value='user'>You</option>
				<option value='friend'>{selectedFriend.name}</option>
			</select>
			<Button>Split bill</Button>
		</form>
	);
}

export default FormSplitBill;
