"use client";
import React, { useState, forwardRef, useImperativeHandle } from "react";
// import Logo from "../images/logo_512x512.png";

const TopNav = forwardRef((props, ref) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  useImperativeHandle(ref, () => {
    return {
      handleClick: handleNavCollapse,
    };
  });

  return (
    <nav class='navbar navbar-expand-lg navbar-light bg-light rounded'>
      <a class='navbar-brand text-info font-weight-bolder' href='/'>
        <img
          // src={Logo}
          alt='Logo'
          width='36'
          height='36'
          className='vertical-align-middle'
        />
        <span className=''>Discounter</span>
      </a>
      <button
        class='custom-toggler navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarsExample09'
        aria-controls='navbarsExample09'
        aria-expanded={!isNavCollapsed ? true : false}
        aria-label='Toggle navigation'
        onClick={handleNavCollapse}
      >
        <span class='navbar-toggler-icon'></span>
      </button>

      <div
        class={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
        id='navbarsExample09'
      >
        <a className='nav-link text-info' href='/contact'>
          Support
        </a>
        <a className='nav-link text-info' href='/login'>
          Login
        </a>
        <a
          href='/request-demo'
          className='btn btn-sm btn-info nav-link text-white'
        >
          Request demo
        </a>
      </div>
    </nav>
  );
});

export default TopNav;
