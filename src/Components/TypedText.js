import React from 'react';
import useTypedAnimation from '../hooks/useTypedAnimation';

const TypedText = () => {
  const typingRef = useTypedAnimation(['Developer', 'Gamer', 'Tech Enthusiast'], 100, 60);

  return <span className="typing" ref={typingRef}></span>;
};

export default TypedText;
