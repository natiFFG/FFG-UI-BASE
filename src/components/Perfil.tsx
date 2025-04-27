import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Donante } from '../types/Donante'

const Perfil: React.FC = () => {
  const { logout, darDeBaja } = useAuth()
  const navigate = useNavigate()
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [donante, setDonante] = useState<Donante>({
    Name: 'Juan Pérez',
    DNI__c: '12345678',
    Email__c: 'juan@example.com',
    Telefono__c: '123456789',
    Direccion__c: 'Calle Falsa 123',
    Foto__c: 'https://via.placeholder.com/150',
    PSN__c: 'PSN123456',
    donacion_proxima_monto__c: 1000,
    donacion_proxima_fecha__c: '2024-04-01',
    medio_pago__c: 'Tarjeta de Crédito',
    activo_desde__c: '2023-01-01',
  })

  const handleLogout = (): void => {
    if (window.confirm('¿Estás seguro que deseas cerrar sesión?')) {
      logout()
      navigate('/')
    }
  }

  const handleDarDeBaja = (): void => {
    if (
      window.confirm(
        '¿Estás seguro que deseas darte de baja? Esta acción no se puede deshacer.'
      )
    ) {
      darDeBaja()
      navigate('/')
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setDonante((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Mi Perfil</h2>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                {isEditing ? 'Guardar Cambios' : 'Editar Perfil'}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="Name"
                    value={donante.Name}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    DNI
                  </label>
                  <input
                    type="text"
                    name="DNI__c"
                    value={donante.DNI__c}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="Email__c"
                    value={donante.Email__c}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="Telefono__c"
                    value={donante.Telefono__c}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Dirección
                  </label>
                  <input
                    type="text"
                    name="Direccion__c"
                    value={donante.Direccion__c}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Próxima Donación
                  </label>
                  <div className="mt-1 grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-500">
                        Monto
                      </label>
                      <input
                        type="number"
                        name="donacion_proxima_monto__c"
                        value={donante.donacion_proxima_monto__c}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500">
                        Fecha
                      </label>
                      <input
                        type="date"
                        name="donacion_proxima_fecha__c"
                        value={donante.donacion_proxima_fecha__c}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Método de Pago
                  </label>
                  <input
                    type="text"
                    name="medio_pago__c"
                    value={donante.medio_pago__c}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Activo Desde
                  </label>
                  <input
                    type="date"
                    name="activo_desde__c"
                    value={donante.activo_desde__c}
                    disabled
                    className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    PSN
                  </label>
                  <input
                    type="text"
                    name="PSN__c"
                    value={donante.PSN__c}
                    disabled
                    className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Gestión de Cuenta
              </h3>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
                >
                  Cerrar Sesión
                </button>
                <button
                  onClick={handleDarDeBaja}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
                >
                  Darse de Baja
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Al cerrar sesión, podrás volver a iniciar sesión en cualquier
                momento. Al darte de baja, tu cuenta será eliminada
                permanentemente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Perfil
