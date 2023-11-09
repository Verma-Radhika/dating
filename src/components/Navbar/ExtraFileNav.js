import React, { useEffect } from 'react';
import "./extranav.css";
export const ExtraFileNav = () => {
    useEffect(() => {
        const test = () => {
          // Your existing JavaScript code here
          const tabsNewAnim = document.getElementById('navbarSupportedContent');
          const activeItemNewAnim = tabsNewAnim.querySelector('.active');
          const activeWidthNewAnimHeight = activeItemNewAnim.offsetHeight; // Use offsetHeight
          const activeWidthNewAnimWidth = activeItemNewAnim.clientWidth;
          const itemPosNewAnimTop = activeItemNewAnim.getBoundingClientRect();
          const itemPosNewAnimLeft = activeItemNewAnim.getBoundingClientRect();
    
          // ... The rest of your code
    
        };
        test();
    
        window.addEventListener('resize', () => {
          setTimeout(() => test(), 500);
        });
    
        document.querySelector('.navbar-toggler').addEventListener('click', () => {
          document.querySelector('.navbar-collapse').style.display = 'block';
          setTimeout(() => test());
        });
    
        const path = window.location.pathname.split('/').pop() || 'index.html';
        const target = document.querySelector(`#navbarSupportedContent ul li a[href="${path}"]`);
        if (target) {
          target.parentElement.classList.add('active');
        }
      }, []);
    
      return (
        <nav className="navbar navbar-expand-custom navbar-mainbg">
          <a className="navbar-brand navbar-logo" href="#">
            CWTB
          </a>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars text-white"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <div className="hori-selector">
                <div className="left"></div>
                <div className="right"></div>
              </div>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0);">
                  <i className="fas fa-tachometer-alt"></i>Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0);">
                  <i className="far fa-address-book"></i>Address Book
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0);">
                  <i className="far fa-clone"></i>Components
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0);">
                  <i className="far fa-calendar-alt"></i>Calendar
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0);">
                  <i className="far fa-chart-bar"></i>Charts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0);">
                  <i className="far fa-copy"></i>Documents
                </a>
              </li>
            </ul>
          </div>
        </nav>
      );
};

