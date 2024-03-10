import css from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={css.item} key={id}>
      <img className={css.avatar} src={avatar} alt={name} />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.offlineStyle, { [css.onlineStyle]: isOnline })}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};

export default FriendListItem;
