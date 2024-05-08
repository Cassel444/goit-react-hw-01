import "./App.css";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";

// import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import userData from "./userData.json";
import friends from "./friends.json";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <hr />

      <FriendList friends={friends} />

      <hr />
    </>
  );
}
export default App;