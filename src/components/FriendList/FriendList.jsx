import FriendItem from '../FriendItem/FriendItem';

function FriendList({ friends, onSelection, selectedFriend }) {
	return (
		<ul>
			{friends.map(friend => {
				return (
					<FriendItem
						friend={friend}
						key={friend.id}
						onSelection={onSelection}
						selectedFriend={selectedFriend}
					/>
				);
			})}
		</ul>
	);
}

export default FriendList;
