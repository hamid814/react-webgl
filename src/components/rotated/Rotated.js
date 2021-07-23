import { useEffect, useRef } from 'react';

const Rotated = ({ children, ...props }) => {
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    // only have one child
    if (process.env.NODE_ENV === 'development') {
      if (children.length) {
        if (children.length > 1) {
          throw new Error('Rotated component must have only one child');
        }
      }
    }

    // screen center
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const itemPos = ref.current.children[0].getBoundingClientRect();

    const xOff = centerX - itemPos.x;
    const yOff = centerY - itemPos.y;

    ref.current.children[0].style.transformOrigin = `${xOff}px ${yOff}px`;

    // eslint-disable-next-line
  }, []);

  return (
    <div ref={ref} className="rotated" {...props}>
      {children}
    </div>
  );
};

export default Rotated;
