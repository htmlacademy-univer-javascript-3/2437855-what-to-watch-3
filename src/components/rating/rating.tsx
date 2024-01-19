import React from 'react';

type RatingProps = {
  num: number;
  onChange: (
    evt:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>,
  ) => void;
};

function Rating({ num, onChange }: RatingProps): JSX.Element {
  return (
    <>
      <input
        className="rating__input"
        id={`star-${num.toString()}`}
        type="radio"
        name="rating"
        value={num.toString()}
        onChange={onChange}
      />
      <label className="rating__label" htmlFor={`star-${num}`}>
        Rating {num}
      </label>
    </>
  );
}

export default Rating;
