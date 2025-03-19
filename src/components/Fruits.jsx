const fruitList = [
	'Päron', 'Mandarin', 'Apelsin', 'Banan', 'Purjolök'
]

const Fruits = () => (
	<ul>
		{fruitList.map( oneFruit => (
			<li key={oneFruit}> {oneFruit} </li>
		) )}
	</ul>
)

export default Fruits
