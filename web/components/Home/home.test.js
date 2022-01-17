// __tests__/fetch.test.js
import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from './Home'

test('loads and displays slider', async () => {
  const {container} = render(<Home />)

  expect(container.querySelector('.slider_container')).not(null)
  // expect(screen.getByRole('button')).toBeDisabled()
})

// test('handles server error', async () => {

//   render(<Fetch url="/greeting" />)

//   fireEvent.click(screen.getByText('Load Greeting'))

//   await waitFor(() => screen.getByRole('alert'))

//   expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!')
//   expect(screen.getByRole('button')).not.toBeDisabled()
// })