import { useState, type Dispatch } from "react";
import { v4 as uuidv4 } from 'uuid'
import { categories } from "../data/categories"
import type { Activity } from "../types"
import type { ActivityActions } from "../reducers/activityReducer"

type FormProps = {
    dispatch: Dispatch<ActivityActions>
}

const initialState : Activity = {
    id: uuidv4(),
    category: 1,
    descripcion: '',
    calories: 0
}

export default function Form({dispatch} : FormProps) {

    const [activity, setActivity] = useState<Activity>(initialState)

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement> )=> {

        //Si es categoria o caloria devuelve TRUE
        const isNumberField = ['category','calories'].includes(e.target.id)

        setActivity({
            ...activity,
            //+e.target.value: Fuerza el valor a number para category y calories.
            [e.target.id]: isNumberField ? +e.target.value : e.target.value
        })
    }

    const isValidActivity = () => {
        const {descripcion, calories} = activity
        return descripcion.trim() !== '' && calories > 0
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch({type:'save-activity', payload: {newActivity : activity}})

        setActivity({...initialState, id: uuidv4()})
    }

    return (
        // RECORDAR: Si no sabemos un tipo de dato, podemos utilizar e => (En ves de handleSubmit) y ver en la descripción:
        <form className="bg-white p-6 rounded-lg shadow-md space-y-4" onSubmit={handleSubmit}>
            <div>
                <label className="block font-medium mb-1">Tipo de registro:</label>
                <select id="category" className="w-full p-2 border border-gray-300 rounded" value={activity.category} onChange={handleChange}>
                {categories.map(category => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
                </select>
            </div>
            <div>
                <label className="block font-medium mb-1">Descripción:</label>
                <input type="text" id="descripcion" className="w-full p-2 border border-gray-300 rounded" value={activity.descripcion} onChange={handleChange}/>
            </div>
            <div>
                <label className="block font-medium mb-1">Calorias (kcal):</label>
                <input type="number" id="calories" className="w-full p-2 border border-gray-300 rounded" value={activity.calories} onChange={handleChange}/>
            </div>
            <button type="submit" className="bg-lime-500 hover:bg-lime-600 text-white font-semibold py-2 px-4 rounded disabled:opacity-5" disabled={!isValidActivity()}>
                Guardar
            </button>
        </form>
    )
}