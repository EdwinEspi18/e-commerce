const CardHeader = ({ icons }) => {
  const { classN, text } = icons;
  return (
    <article className='article__section'>
      <figure className='figure__article'>
        {classN.includes("fas") ? (
          <i className={classN}></i>
        ) : (
          <span className='material-icons-outlined'>{classN}</span>
        )}

        <figcaption>{text}</figcaption>
      </figure>
    </article>
  );
};

export default CardHeader;
