const fruitList = [
	'Päron', 'Mandarin', 'Apelsin', 'Banan', 'Purjolök'
]

const Fruits = () => (
	<ul className="exercise">
		{fruitList.map( oneFruit => (
			<li key={oneFruit}> {oneFruit} </li>
		) )}
	</ul>
)

export default Fruits
