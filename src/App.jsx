import Profile from "./components/Profile/Profile"
import userData from "./userData.json"


function App() {

  return (
    <>
      <Profile userData={userData} />
    </>
  )
}

export default App
