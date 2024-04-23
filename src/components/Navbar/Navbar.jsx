'use client';
import styled from 'styled-components';
import { useState } from 'react';
import { IoLogoInstagram } from 'react-icons/io5';

const Nav = styled.nav`
  width: 100%;
  height: 3.6rem;
  background: #a1dc2d;
  border-bottom: 2px solid;
  border-color: #565489;
`;

const Burger = styled.div`
  width: 50px;
  height: 3.5rem;
  background: #b9562e;
  border-bottom-right-radius: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-bottom: 1rem;
  padding-left: 0.3rem;
  cursor: pointer;
  & span {
    margin-top: 6px !important;
  }
`;

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <Nav>
      <section className='MOBILE-MENU flex'>
        <Burger
          className='HAMBURGER-ICON space-y-2'
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          {isNavOpen ? (
            <svg
              className='h-8 w-8 text-gray-600'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <line x1='18' y1='6' x2='6' y2='18' />
              <line x1='6' y1='6' x2='18' y2='18' />
            </svg>
          ) : (
            <>
              <span className='block h-0.5 w-7 ml-1 mt-0 bg-[#565489]'></span>
              <span className='block h-0.5 w-6 ml-1 mt-0 bg-[#565489]'></span>
              <span className='block h-0.5 w-5 ml-1 mt-0 bg-[#565489]'></span>
            </>
          )}
        </Burger>

        <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
          <div className='' onClick={() => setIsNavOpen(false)}></div>
          <ul className='flex flex-col justify-between'>
            <li className='mt-1'>
              <a className='text-[#565489] pl-10' href='/gallery'>
                Gallery
              </a>
              <hr className='w-full border-none h-[1px] bg-[#565489]' />
            </li>
            <div className='overflow-hidden'>
              <li className='mt-1'>
                <a className='text-[#565489] pl-10' href='/about'>
                  About
                </a>
                <hr className='w-full border-none h-[1px] bg-[#565489]' />
              </li>
            </div>
            <li className='mt-1'>
              <a
                className='text-[#565489] pl-10 flex items-left'
                href='https://instagram.com'
                targer='_blank'
              >
                <IoLogoInstagram />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        top: 3.6rem;
        left: 0;
        width: 7rem;
        height: 6rem;
        font-style: italic;
        background: #a1dc2d;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        border-bottom-right-radius: 100%;
        overflow: hidden;
      }

      .showMenuNav svg{
        color red;
      }


    `}</style>
    </Nav>
  );
}
