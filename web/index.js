import React from 'react'
import { render, hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import store from './redux/store'

const rootElement = document.getElementById('random-dvd-app')
const renderMethod = !!module.hot ? render : hydrate
renderMethod(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
	,
	rootElement
)