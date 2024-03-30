import { useState } from "react";

const profileEmpty = "./profile_empty.webp";

export function TwitterFollowCard({
  name = "unknown",
  username = "unknown",
  img = profileEmpty,
  initialIsFollowing,
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? "Siguiendo" : "Seguir";

  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <>
      <article className="tw-followCard">
        <header className="tw-followCard-header">
          <img className="tw-followCard-img" src={img} />
          <div className="tw-followCard-info">
            <strong>{name}</strong>
            <span className="tw-followCard-info-username">@{username}</span>
          </div>
        </header>

        <aside>
          <button className={buttonClassName} onClick={handleClick}>
            <span className="tw-followCard-text">{text}</span>
            <span className="tw-followCard-stopFollow">Dejar de seguir</span>
          </button>
        </aside>
      </article>
    </>
  );
}
