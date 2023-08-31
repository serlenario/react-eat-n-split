import { useState } from 'react';
import FriendList from '../FriendList/FriendList';
import FormAddFriend from '../FormAddFriend/FormAddFriend';
import FormSplitBill from '../FormSplitBill/FormSplitBill';
import './App.css';
import Button from '../Button/Button';

const initialFriends = [
	{
		id: 118836,
		name: 'Clark',
		image: 'https://i.pravatar.cc/48?u=118836',
		balance: -7,
	},
	{
		id: 933372,
		name: 'Sarah',
		image: 'https://i.pravatar.cc/48?u=933372',
		balance: 20,
	},
	{
		id: 499476,
		name: 'Anthony',
		image: 'https://i.pravatar.cc/48?u=499476',
		balance: 0,
	},
];

function App() {
	const [friends, setFriends] = useState(initialFriends);
	const [showAddFriend, setShowAddFriend] = useState(false);
	const [selectedFriend, setSelectedFriend] = useState(null);

	function handleShowAddFriend() {
		setShowAddFriend(show => !show);
	}

	function handleAddFriend(friend) {
		setFriends(friends => [...friends, friend]);
		setShowAddFriend(false);
	}

	function handleSelection(friend) {
		setSelectedFriend(cur => (cur?.id === friend.id ? null : friend));
		setShowAddFriend(false);
	}

	function handleSplitBill(value) {
		setFriends(friends =>
			friends.map(friend =>
				friend.id === selectedFriend.id
					? { ...friend, balance: friend.balance + value }
					: friend
			)
		);

		setSelectedFriend(null);
	}

	return (
		<div className='app'>
			<div className='sidebar'>
				<FriendList
					friends={friends}
					onSelection={handleSelection}
					selectedFriend={selectedFriend}
				/>
				{showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

				<Button onClick={handleShowAddFriend}>
					{showAddFriend ? 'Close' : 'Add friend'}
				</Button>
			</div>

			{selectedFriend && (
				<FormSplitBill
					selectedFriend={selectedFriend}
					onSplitBill={handleSplitBill}
				/>
			)}
		</div>
	);
}

export default App;
