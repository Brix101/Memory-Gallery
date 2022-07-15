import React, { useState, useRef } from "react";
import { useSpring, animated } from "react-spring";

interface props {
  children: any;
}

function AnimatedCard({ children }: props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setHovered] = useState(false);
  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      xys: [0, 0, 1],
      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 },
    };
  });

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    setHovered(true);
  };

  const handleMouseMove = ({ clientX, clientY }: React.MouseEvent) => {
    const offsetLeft = ref.current?.offsetLeft;
    const offsetTop = ref.current?.offsetTop;
    const clientHeight = ref.current?.clientHeight;
    const clientWidth = ref.current?.clientWidth;

    const left = offsetLeft ? offsetLeft : 0;

    const top = offsetTop ? offsetTop : 0;

    const x =
      clientX -
      (left -
        (window.scrollX || window.pageXOffset || document.body.scrollLeft));
    const y =
      clientY -
      (top - (window.scrollY || window.pageYOffset || document.body.scrollTop));

    const dampen = 50; // Lower the number the less rotation
    const height = clientHeight ? clientHeight : 0;
    const width = clientWidth ? clientWidth : 0;
    const xys = [
      -(y - height / 2) / dampen, // rotateX
      (x - width / 2) / dampen, // rotateY
      1.07, // Scale
    ];
    setAnimatedProps({ xys: xys });
  };

  return (
    <animated.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setHovered(false);
        // Set xys back to original
        setAnimatedProps({ xys: [0, 0, 1] });
      }}
      style={{
        // If hovered we want it to overlap other cards when it scales up
        zIndex: isHovered ? 2 : 1,
        // Interpolate function to handle css changes
        transform: animatedProps.xys.to(
          (x, y, s) =>
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        ),
      }}
    >
      {children}
    </animated.div>
  );
}

export default AnimatedCard;
