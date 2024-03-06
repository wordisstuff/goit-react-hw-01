import css from "./FriendList.module.css"


const FriendListItem = ({ friendsData }) => {

    return (
        friendsData.map(({ avatar, name, isOnline, id }) => {
            return <li className={css.item} key={id}>
                <img className={css.avatar} src={avatar} alt={name} />
                <p className={css.name}>{name}</p>
                <p className={isOnline ? `${css.onlineStyle}` : `${css.offlineStyle}`}>{isOnline}</p>
            </li>
        })
    )
}

export default FriendListItem