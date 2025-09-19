import { categories } from "../data/categories"

export default function Form() {
    return (
        <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <div>
                <label className="block font-medium mb-1">Tipo de registro:</label>
                <select id="tipo" className="w-full p-2 border border-gray-300 rounded">
                {categories.map(category => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
                </select>
            </div>
            <div>
                <label className="block font-medium mb-1">Descripción:</label>
                <input type="text" id="descripcion" className="w-full p-2 border border-gray-300 rounded"/>
            </div>
            <div>
                <label className="block font-medium mb-1">Cantidad (kcal):</label>
                <input type="number" id="cantidad" className="w-full p-2 border border-gray-300 rounded"/>
            </div>
            <button type="submit" className="bg-lime-500 hover:bg-lime-600 text-white font-semibold py-2 px-4 rounded">
                Guardar
            </button>
        </form>
    )
}