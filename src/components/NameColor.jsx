import './NameColor.css'
import { useState } from 'react'
const initial = { name: 'Tim', color: 'blå' }

/* Detta exempel innehåller:
- state-variabler
- conditional rendering
- events
- formulär: input (text)
*/
const NameColor = () => {
	const [form, setForm] = useState(initial)
	const [isEditing, setIsEditing] = useState(false)
	const [editedName, setEditedName] = useState(form.name)
	const [editedColor, setEditedColor] = useState(form.color)

	const handleEditingClick = () => {
		if( isEditing ) {
			setForm({
				name: editedName,
				color: editedColor
			})
		}
		setIsEditing(!isEditing)
		// React klumpar ihop båda "set state" och kör dem samtidigt, senare
	}

	return (
		<section className="name-color">
			{isEditing ? (
				<>
				<input type="text" placeholder="Namn"
					onChange={event => setEditedName(event.target.value)}
					value={editedName}
					/>
				<input type="text" placeholder="Favoritfärg"
					onChange={event => setEditedColor(event.target.value)}
					value={editedColor}
					/>
				</>
			) : (
				<>
				<p> {form.name} </p>
				<p> {form.color} </p>
				</>
			)}
			<button onClick={handleEditingClick}> {isEditing ? 'Spara' : 'Ändra'} </button>
		</section>
	)
}

export default NameColor
