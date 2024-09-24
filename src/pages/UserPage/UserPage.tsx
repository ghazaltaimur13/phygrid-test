import UserContainer from '../../components/User/UserContainer';
import { Helmet } from 'react-helmet-async';

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title>Test | Users</title>
      </Helmet>
      <UserContainer />
    </>
  );
}
