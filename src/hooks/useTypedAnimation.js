import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const useTypedAnimation = (strings, typeSpeed, backSpeed) => {
  const typingRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['', ...strings],
      typeSpeed: typeSpeed,
      backSpeed: backSpeed,
      loop: true,
    };
    const typed = new Typed(typingRef.current, options);

    return () => {
      typed.destroy();
    };
  }, [strings, typeSpeed, backSpeed]);

  return typingRef;
};

export default useTypedAnimation;
