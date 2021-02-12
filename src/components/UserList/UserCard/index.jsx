function UserCard(props) {
  const {
    user: { id, firstName, lastName },
    isSelected,
  } = props;

  const styles = {
    border: isSelected ? '4px solid' : undefined,
  };

  return (
    <article style={styles}>
      <h1>
        Full Name: {firstName} {lastName}
      </h1>
      <p>ID: {id}</p>
      <button
        onClick={() => {
          /* Менять isSelected */
        }}
      >
        Select User
      </button>
    </article>
  );
}

export default UserCard;
