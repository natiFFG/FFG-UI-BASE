import { useState } from 'react'
import { Donacion } from '../types/Donacion'
import { Donante } from '../types/Donante'

const Donaciones: React.FC = () => {
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

  const [donaciones, setDonaciones] = useState<Donacion[]>([
    {
      CreatedById: '1',
      CreatedDate: '2023-01-15',
      detalle_medio_pago__c: 'Visa ****1234',
      Donante__c: '1',
      estado__c: 'Completada',
      fecha_cobro__c: '2023-01-15',
      LastModifiedById: '1',
      LastModifiedDate: '2023-01-15',
      medio_pago__c: 'Tarjeta de Crédito',
      monto__c: 1000,
      Name: 'Donación Mensual',
      OwnerId: '1',
    },
  ])

  const [showNuevaDonacion, setShowNuevaDonacion] = useState<boolean>(false)
  const [showUpgrade, setShowUpgrade] = useState<boolean>(false)
  const [nuevaDonacion, setNuevaDonacion] = useState<Partial<Donacion>>({
    monto__c: 0,
    medio_pago__c: donante.medio_pago__c,
    fecha_cobro__c: new Date().toISOString().split('T')[0],
  })

  const totalDonado = donaciones.reduce(
    (sum, donacion) => sum + donacion.monto__c,
    0
  )

  const handleNuevaDonacion = (): void => {
    setShowNuevaDonacion(false)
    setNuevaDonacion({
      monto__c: 0,
      medio_pago__c: donante.medio_pago__c,
      fecha_cobro__c: new Date().toISOString().split('T')[0],
    })
  }

  const handleUpgradeMonto = (): void => {
    setShowUpgrade(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Resumen de Donaciones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-green-600">Activo desde</p>
              <p className="text-2xl font-semibold text-green-900">
                {new Date(donante.activo_desde__c).toLocaleDateString()}
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-600">Total donado</p>
              <p className="text-2xl font-semibold text-blue-900">
                ${totalDonado.toLocaleString()}
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-sm text-purple-600">Próxima donación</p>
              <p className="text-2xl font-semibold text-purple-900">
                ${donante.donacion_proxima_monto__c.toLocaleString()}
              </p>
              <p className="text-sm text-purple-600">
                {new Date(
                  donante.donacion_proxima_fecha__c
                ).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Historial de Donaciones
            </h2>
            <div className="space-x-4">
              <button
                onClick={() => setShowNuevaDonacion(true)}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Nueva Donación ad-hoc
              </button>
              <button
                onClick={() => setShowUpgrade(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Actualizar Monto
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fecha
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Monto
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Medio de Pago
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estado
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {donaciones.map((donacion, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(donacion.fecha_cobro__c).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${donacion.monto__c.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {donacion.medio_pago__c}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          donacion.estado__c === 'Completada'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {donacion.estado__c}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal Nueva Donación */}
        {showNuevaDonacion && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Nueva Donación
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Monto
                  </label>
                  <input
                    type="number"
                    value={nuevaDonacion.monto__c}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setNuevaDonacion({
                        ...nuevaDonacion,
                        monto__c: Number(e.target.value),
                      })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Medio de Pago
                  </label>
                  <select
                    value={nuevaDonacion.medio_pago__c}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setNuevaDonacion({
                        ...nuevaDonacion,
                        medio_pago__c: e.target.value,
                      })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  >
                    <option value="Tarjeta de Crédito">
                      Tarjeta de Crédito
                    </option>
                    <option value="Débito Automático">Débito Automático</option>
                    <option value="Transferencia">Transferencia</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Fecha
                  </label>
                  <input
                    type="date"
                    value={nuevaDonacion.fecha_cobro__c}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setNuevaDonacion({
                        ...nuevaDonacion,
                        fecha_cobro__c: e.target.value,
                      })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={() => setShowNuevaDonacion(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleNuevaDonacion}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Confirmar Donación
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Actualizar Monto */}
        {showUpgrade && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Actualizar Monto de Donación
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nuevo Monto
                  </label>
                  <input
                    type="number"
                    value={donante.donacion_proxima_monto__c}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setDonante({
                        ...donante,
                        donacion_proxima_monto__c: Number(e.target.value),
                      })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={() => setShowUpgrade(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleUpgradeMonto}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Confirmar Cambio
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Donaciones
