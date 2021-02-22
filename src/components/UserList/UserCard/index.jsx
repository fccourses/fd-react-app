import PropTypes from 'prop-types';

function UserCard (props) {
  const {
    user: { id, firstName, lastName, isSelected },
    userSelector,
  } = props;

  const styles = {
    border: isSelected ? '4px solid' : undefined,
  };

  const btnHandler = () => userSelector(id);

  return (
    <article style={styles}>
      <h1>
        Full Name: {firstName} {lastName}
      </h1>
      <p>ID: {id}</p>
      <button onClick={btnHandler}>Select User</button>
    </article>
  );
}

export const userPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
}).isRequired;

UserCard.propTypes = {
  user: userPropType,
  userSelector: PropTypes.func,
};

export default UserCard;
