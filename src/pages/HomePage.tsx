import { useAuth } from "../context/AuthContext";
import Login from "../components/Login";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        {!isAuthenticated ? (
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Bienvenido al Portal Donante
            </h1>
            <Login />
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Panel de Control
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                to="/donaciones"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Mis Donaciones
                </h2>
                <p className="text-gray-600">
                  Ver el historial de tus donaciones y realizar nuevas.
                </p>
              </Link>
              <Link
                to="/perfil"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Mi Perfil
                </h2>
                <p className="text-gray-600">
                  Gestiona tu información personal y preferencias de donación.
                </p>
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default HomePage;
