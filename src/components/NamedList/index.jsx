import styles from './NamedList.module.scss';

const NamedList = props => {
  const { children, name } = props;

  return (
    <article className={styles.list}>
      <h1>{name}</h1>
      <div>{children}</div>
    </article>
  );
};

export default NamedList;
