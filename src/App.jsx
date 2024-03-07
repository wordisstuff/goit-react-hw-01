import FriendList from "./components/FriendList/FriendList"
import Profile from "./components/Profile/Profile"
import TransactionHistory from "./components/TransactionHistory/TransactionHistory"

import userData from "./data/userData.json"
import friendsData from "./data/friendsData.json"
import TransactionData from "./data/transactionsData.json"

function App() {

  return (
    <>
      <Profile userData={userData} />
      <FriendList friendsData={friendsData} />
      <TransactionHistory items={TransactionData} />
    </>
  )
}

export default App
