// import { useState } from 'react'
import './App.css'
import Fruits from './components/Fruits.jsx'
import RandomList from './components/RandomList.jsx'
import NameColor from './components/NameColor.jsx'

const App = () => (
	<div className="column">
		<header>
			Övningar
		</header>
		<main>

			<NameColor />
			<Fruits />
			<RandomList />

		</main>
	</div>
)

export default App
