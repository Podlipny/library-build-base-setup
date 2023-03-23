import React from 'react'

import Button from '../button/button'

import './header.scss'

type User = {
  name: string
};

export interface HeaderProps {
  user?: User
  onLogin?: () => void
  onLogout?: () => void
  onCreateAccount?: () => void
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header>
    <div className='wrapper'>
      <div>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30' width='40' height='40'><path fill='none' d='M0 0h24v24H0z' />
          <path
            // eslint-disable-next-line max-len
            d='M12 8.5l2.116 5.088 5.492.44-4.184 3.584 1.278 5.36L12 20.1l-4.702 2.872 1.278-5.36-4.184-3.584 5.492-.44L12 8.5zM8 2v9H6V2h2zm10 0v9h-2V2h2zm-5 0v5h-2V2h2z'
          />
        </svg>
        <h1>Vite Library</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className='welcome'>
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size='small' onClick={onLogout} label='Log out' />
          </>
        ) : (
          <>
            <Button size='small' onClick={onLogin} label='Log in' />
            <Button primary size='small' onClick={onCreateAccount} label='Sign up' />
          </>
        )}
      </div>
    </div>
  </header>
)
