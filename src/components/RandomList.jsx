import { useState } from 'react'

const RandomList = () => {
	const [list, setList] = useState([])

	const handleRandomClick = () => {
		let x = Math.random()
		let id = crypto.randomUUID()
		setList( [ ...list, { id: id, value: x } ] )
	}

	return (
		<section className="random-list exercise">
			<button onClick={handleRandomClick}> Slumpa ett tal </button>
			<ul>
				{list.map( item => (
					<li key={item.id}> {item.value} </li>
				) )}
			</ul>
		</section>
	)
}
export default RandomList
