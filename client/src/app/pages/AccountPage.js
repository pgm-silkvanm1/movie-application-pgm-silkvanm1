import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useFirestore } from "../contexts/firebase/firestore.context";
import { BaseLayout } from '../layouts';
import { useAuth } from '../contexts/firebase/auth.context';

const AccountPage = () => {
  const { id } = useParams();
  const [ user, setUser ] = useState();
  const {currentUser,signOut} = useAuth();

  useEffect(() => {
    setUser(currentUser);
   
  });

  return (
    <BaseLayout>

      {!!user && 
      <div>
        <p>user.name.firstName</p>
        <img>user.internet.displayName</img>
      </div> 
      }
    </BaseLayout>
  );
};

export default AccountPage;

//user.internet.displayName (avatar)
//user.name.firstName 