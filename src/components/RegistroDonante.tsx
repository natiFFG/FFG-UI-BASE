import { useState } from 'react'
import { Link } from 'react-router-dom'

interface FormData {
  Name: string
  DNI__c: string
  Email__c: string
  Telefono__c: string
  Direccion__c: string
  medio_pago__c: string
  numeroTarjeta: string
  fechaVencimiento: string
  cvv: string
}

const RegistroDonante: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    Name: '',
    DNI__c: '',
    Email__c: '',
    Telefono__c: '',
    Direccion__c: '',
    medio_pago__c: 'Tarjeta de Crédito',
    numeroTarjeta: '',
    fechaVencimiento: '',
    cvv: '',
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log('Datos del registro:', formData)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Registro de Donante
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="Name" className="sr-only">
                Nombre
              </label>
              <input
                id="Name"
                name="Name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Nombre"
                value={formData.Name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="DNI__c" className="sr-only">
                DNI
              </label>
              <input
                id="DNI__c"
                name="DNI__c"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="DNI"
                value={formData.DNI__c}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="Email__c" className="sr-only">
                Email
              </label>
              <input
                id="Email__c"
                name="Email__c"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
                value={formData.Email__c}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="Telefono__c" className="sr-only">
                Teléfono
              </label>
              <input
                id="Telefono__c"
                name="Telefono__c"
                type="tel"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Teléfono"
                value={formData.Telefono__c}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="Direccion__c" className="sr-only">
                Dirección
              </label>
              <input
                id="Direccion__c"
                name="Direccion__c"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Dirección"
                value={formData.Direccion__c}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="medio_pago__c" className="sr-only">
                Medio de Pago
              </label>
              <select
                id="medio_pago__c"
                name="medio_pago__c"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                value={formData.medio_pago__c}
                onChange={handleInputChange}
              >
                <option value="Tarjeta de Crédito">Tarjeta de Crédito</option>
                <option value="Débito Automático">Débito Automático</option>
                <option value="Transferencia">Transferencia</option>
              </select>
            </div>
            <div>
              <label htmlFor="numeroTarjeta" className="sr-only">
                Número de Tarjeta
              </label>
              <input
                id="numeroTarjeta"
                name="numeroTarjeta"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Número de Tarjeta"
                value={formData.numeroTarjeta}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="fechaVencimiento" className="sr-only">
                Fecha de Vencimiento
              </label>
              <input
                id="fechaVencimiento"
                name="fechaVencimiento"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="MM/YY"
                value={formData.fechaVencimiento}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="cvv" className="sr-only">
                CVV
              </label>
              <input
                id="cvv"
                name="cvv"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="CVV"
                value={formData.cvv}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Registrarse
            </button>
          </div>
        </form>
        <div className="text-center">
          <Link
            to="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            ¿Ya tienes una cuenta? Inicia sesión
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RegistroDonante
