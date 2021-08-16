import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { BaseLayout } from '../layouts';
import { useAuth } from '../contexts/firebase/auth.context';

const AccountPage = () => {
	const { id } = useParams();
	const [user, setUser] = useState();
	const { currentUser } = useAuth();

	useEffect(() => {
		setUser(currentUser)

	})

	return (
		<BaseLayout>
			{!!user && (
				<div>
					<p>user.name.firstName</p>
				</div>
			)}
		</BaseLayout>
	)
};

export default AccountPage;