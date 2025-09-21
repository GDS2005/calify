import { useReducer } from "react"
import { activityReducer, initialState } from "./reducers/activityReducer"
import Form from "./components/Form"

function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState)

  console.log(state)

  return (
    <>
      <nav className="bg-lime-500 p-4 shadow-md sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Calify</h1>
          <ul className="flex space-x-6">
            <li><a href="#form" className="text-white hover:underline">Cargar</a></li>
            <li><a href="#resumen" className="text-white hover:underline">Resumen</a></li>
            <li><a href="#registros" className="text-white hover:underline">Registros</a></li>
          </ul>
        </div>
      </nav>

      <div className="container mx-auto p-6">
        <section id="form" className="mb-12">
          <h2 className="text-2xl font-bold text-lime-600 mb-4">Carga de Datos</h2>
          <Form 
            dispatch={dispatch}
          />
        </section>

        <section id="resumen" className="w-full mb-12 bg-lime-50 p-6">
          <h2 className="text-2xl font-bold text-lime-600 mb-4">Resumen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-medium mb-2">Calorías Consumidas</h3>
              <p className="text-3xl text-lime-600 font-bold">1500 kcal</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-medium mb-2">Ejercicio Realizado</h3>
              <p className="text-3xl text-orange-500 font-bold">500 kcal</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-medium mb-2">Total</h3>
              <p className="text-3xl font-bold text-gray-800">1000 kcal</p>
            </div>
          </div>
        </section>

        <section id="registros">
          <h2 className="text-2xl font-bold text-lime-600 mb-4">Registros</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-white border-l-8 border-orange-500 p-4 rounded-lg shadow-md">
              <div>
                <p className="font-medium">Correr 30 min</p>
                <p className="text-sm text-gray-600">Ejercicio - 300 kcal</p>
              </div>
              <div className="flex space-x-2">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-white py-1 px-3 rounded">Editar</button>
                <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded">Eliminar</button>
              </div>
            </div>
            <div className="flex justify-between items-center bg-white border-l-8 border-lime-500 p-4 rounded-lg shadow-md">
              <div>
                <p className="font-medium">Almuerzo</p>
                <p className="text-sm text-gray-600">Consumo - 700 kcal</p>
              </div>
              <div className="flex space-x-2">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-white py-1 px-3 rounded">Editar</button>
                <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded">Eliminar</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
