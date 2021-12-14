const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const {nombre, propietario, email, fecha, sintomas, id} = paciente

  const handleEliminar = () => {
    const respuesta = confirm('Desea eliminar este paciente')

    if (respuesta) {
      eliminarPaciente(id)
    }
  }

  return (
    <div className="mx-5 mb-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Mascota: {''}
        <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {''}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {''}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de alta: {''}
        <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {''}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-yellow-500 hover:bg-yellow-600 text-white font-bold uppercase rounded-2xl"
          onClick={() => setPaciente(paciente)}
          >Editar</button>
        <button
          type="button"
          className="py-2 px-10 bg-red-500 hover:bg-red-600 text-white font-bold uppercase rounded-2xl"
          onClick={handleEliminar}
        >Eliminar</button>
      </div>
    </div>
  )
}

export default Paciente
