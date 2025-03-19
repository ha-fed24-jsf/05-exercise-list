// import { useState } from 'react'
import './App.css'
import Fruits from './components/Fruits.jsx'
import RandomList from './components/RandomList.jsx'

const App = () => (
	<div className="column">
		<header>
			Övningar
		</header>
		<main>

			<Fruits />
			<RandomList />

		</main>
	</div>
)

export default App
