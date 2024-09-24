import UserList from "./UserList";


export default function UserContainer() {
  return (
    <div
      style={{
        textAlign: 'center',
        paddingTop: '7rem',
      }}
    >
        <h1>Users</h1>  
        <UserList />
    </div>
  );
}
