type RatingProps = {
  num: number;
}

function Rating({ num }: RatingProps): JSX.Element {
  return (
    <>
      <input
        className="rating__input"
        id={`star-${num}`}
        type="radio"
        name="rating"
        defaultValue={num}
        defaultChecked={num === 8}
      />
      <label className="rating__label" htmlFor={`star-${num}`}>
        Rating {num}
      </label>
    </>
  );
}

export default Rating;
