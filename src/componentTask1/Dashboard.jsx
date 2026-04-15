const UserProfile = ({ username, age, isAdmin}) => {
  return (
    <div>
      <h1>User: {username}</h1>
      <h2>Age: {age}</h2>
      {isAdmin && <h3>Admin</h3>}
    </div>
  );
};

export default function Dashboard() {
  return (
    <div>
      <UserProfile username="Ironman" age={20} isAdmin={true} />
      <UserProfile username="Batman" age={25} isAdmin={false} /> 
      <UserProfile username="Spiderman" age={22} isAdmin={true} />
    </div>
  );
}