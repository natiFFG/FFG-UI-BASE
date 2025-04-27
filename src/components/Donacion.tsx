import { useState } from 'react'
import { Donacion } from '../types/Donacion'

const Donacion: React.FC = () => {
  const [donaciones] = useState<Donacion[]>([
    {
      CreatedById: '1',
      CreatedDate: '2024-03-15',
      detalle_medio_pago__c: 'Visa ****1234',
      Donante__c: '1',
      estado__c: 'Completada',
      fecha_cobro__c: '2024-03-15',
      LastModifiedById: '1',
      LastModifiedDate: '2024-03-15',
      medio_pago__c: 'Tarjeta de Crédito',
      monto__c: 1000,
      Name: 'Donación Mensual',
      OwnerId: '1',
    },
    {
      CreatedById: '1',
      CreatedDate: '2024-02-15',
      detalle_medio_pago__c: 'Visa ****1234',
      Donante__c: '1',
      estado__c: 'Completada',
      fecha_cobro__c: '2024-02-15',
      LastModifiedById: '1',
      LastModifiedDate: '2024-02-15',
      medio_pago__c: 'Tarjeta de Crédito',
      monto__c: 1000,
      Name: 'Donación Mensual',
      OwnerId: '1',
    },
  ])

  const proximaDonacion = '2024-04-15'

  const handleDescargarComprobante = (id: string): void => {
    console.log(`Descargando comprobante ${id}`)
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Mis Donaciones
        </h1>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Próxima Donación</h2>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-green-800">
              Tu próxima donación está programada para el día{' '}
              <span className="font-bold">
                {new Date(proximaDonacion).toLocaleDateString('es-AR')}
              </span>
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">
            Historial de Donaciones
          </h2>
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
                    Estado
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {donaciones.map((donacion) => (
                  <tr key={donacion.CreatedById}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(donacion.fecha_cobro__c).toLocaleDateString(
                        'es-AR'
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${donacion.monto__c.toLocaleString('es-AR')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {donacion.estado__c}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button
                        onClick={() =>
                          handleDescargarComprobante(donacion.CreatedById)
                        }
                        className="text-green-600 hover:text-green-900"
                      >
                        Descargar Comprobante
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donacion
