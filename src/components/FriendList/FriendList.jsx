import FriendListItem from "./FriendListItem"
import css from "./FriendList.module.css"

const FriendList = ({ friendsData }) => {
    return (
        <ul className={css.section}>
            <FriendListItem friendsData={friendsData} />
        </ul>
    )
}

export default FriendList