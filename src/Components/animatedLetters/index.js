

const AnimatedLetters = ({ letterClass, strArray, idx}) => {
  return (
    <span>
      {
        strArray.map((char, i) => (
          <span key={char + i} className={`animated ${letterClass} _${i + idx}`}>
          {char}
        </span>
        ))
      }
    </span>
  )
};

export default AnimatedLetters