import css from "./FriendList.module.css";

import FriendListItem from "./FriendListItem/FriendListItem";

const FriendList = ({ friendsData }) => {
  return (
    <ul className={css.section}>
      {friendsData.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
};

export default FriendList;
