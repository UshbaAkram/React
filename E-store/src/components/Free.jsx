// import React, { useContext ,useRef, useState, useEffect, createRef} from 'react'


// const Menu = ({ items }) => {
//   const $root = useRef();
//   const $indicator1 = useRef();
//   const $indicator2 = useRef();
//   const $items = useRef(items.map(createRef));
//   const [active, setActive] = useState(0);

//   const animate = () => {
//     const menuOffset = $root.current.getBoundingClientRect();
//     const activeItem = $items.current[active].current;
//     const { width, height, top, left } = activeItem.getBoundingClientRect();

//     const settings = {
//       x: left - menuOffset.x,
//       y: top - menuOffset.y,
//       width: width,
//       height: height,
//       backgroundColor: items[active].color,
//       ease: 'elastic.out(.7, .7)',
//       duration: .8
//     };

//     gsap.to($indicator1.current, { ...settings });
//     gsap.to($indicator2.current, { ...settings, duration: 1 });
//   };

//   useEffect(() => {
//     animate();
//     window.addEventListener('resize', animate);

//     return () => {
//       window.removeEventListener('resize', animate);
//     };
//   }, [active]);

//   return (
//     <div
//       ref={$root}
//       className="flex flex-col md:flex-row justify-between relative z-10 p-5 max-w-4xl mx-auto border-b border-gray-200"
//     >
//       {items.map((item, index) => (
//         <a
//           key={item.name}
//           ref={$items.current[index]}
//           className={`px-7 py-5 cursor-pointer transition-colors duration-300 ease-out text-gray-900 uppercase text-xs ${active === index ? 'text-white' : ''}`}
//           onMouseEnter={() => {
//             setActive(index);
//           }}
//           href={item.href}
//         >
//           {item.name}
//         </a>
//       ))}
//       <div ref={$indicator1} className="indicator absolute top-0 left-0 z-0 rounded-full" />
//       <div ref={$indicator2} className="indicator absolute top-0 left-0 z-0 rounded-full" />
//     </div>
//   );
// };

// export default Menu;


import React, { useRef, useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import gsap from 'gsap';

const Free = () => {
  const $root = useRef();
  const $indicator = useRef();
  const [active, setActive] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const history = useHistory();

  const menuItems = ['All Products', 'About', 'Services', 'Portfolio', 'Contact'];
  if (isAuthenticated) {
    menuItems.push('Order', 'Admin');
  }
  menuItems.push(isAuthenticated ? 'Logout' : 'Login');

  const animate = (index) => {
    const menuOffset = $root.current.getBoundingClientRect();
    const activeItem = $root.current.children[index];
    const { width, height, top, left } = activeItem.getBoundingClientRect();

    const settings = {
      x: left - menuOffset.left,
      y: top - menuOffset.top,
      width: width,
      height: height,
      borderRadius: '9999px', // Tailwind's rounded-full equivalent
      backgroundColor: '#3b82f6', // Change this to the desired color
      ease: 'elastic.out(1, 0.75)',
      duration: 0.8,
    };

    gsap.to($indicator.current, settings);
  };

  useEffect(() => {
    animate(active);
    window.addEventListener('resize', () => animate(active));
    return () => window.removeEventListener('resize', () => animate(active));
  }, [active]);

  const handleAuthClick = () => {
    if (isAuthenticated) {
      // Simulate logging out
      setIsAuthenticated(false);
      setActive(0); // Reset active index to Home
      history.push('/');
    } else {
      // Simulate logging in
      setIsAuthenticated(true);
      setActive(menuItems.length - 1); // Set active index to Logout
    }
  };

  return (
    <div
      ref={$root}
      className="relative flex justify-between p-5 max-w-4xl mx-auto border-b border-gray-200"
    >
      {menuItems.map((item, index) => (
        <Link
          key={item}
          to={item.toLowerCase() === 'login' || item.toLowerCase() === 'logout' ? '#' : `/${item.toLowerCase()}`}
          className="relative px-7 py-5 cursor-pointer transition-colors duration-300 ease-out text-gray-900 uppercase text-xs"
          onMouseEnter={() => setActive(index)}
          onClick={item.toLowerCase() === 'login' || item.toLowerCase() === 'logout' ? handleAuthClick : null}
        >
          {item}
        </Link>
      ))}
      <div
        ref={$indicator}
        className="absolute top-0 left-0 z-0"
        style={{ backgroundColor: '#3b82f6', borderRadius: '9999px' }} // Tailwind's rounded-full equivalent
      />
    </div>
  );
};

export default Free;
