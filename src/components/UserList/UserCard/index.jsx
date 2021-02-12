function UserCard(props) {
  const {
    user: { id, firstName, lastName },
  } = props;

  return (
    <article>
      <h1>
        Full Name: {firstName} {lastName}
      </h1>
      <p>ID: {id}</p>
    </article>
  );
}

export default UserCard;
