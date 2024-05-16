function LoginPage(){
    return(
        <div className="bg-gray-200 flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col items-center space-y-4">
                    <h2 className="text-2xl font-semibold mb-6">Iniciar Sesión</h2>
                    <form className="w-full">
                        <div className="mb-4 w-full">
                            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Nombre de Usuario</label>
                            <input type="text" id="username" name="username" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Ingresa tu nombre de usuario" />
                        </div>
                        <div className="mb-4 w-full">
                            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Contraseña</label>
                            <input type="password" id="password" name="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Ingresa tu contraseña" />
                        </div>
                        <div className="flex items-center mb-4 w-full">
                            <input type="checkbox" id="remember" name="remember" className="mr-2" />
                            <label htmlFor="remember" className="text-gray-700">Recordar contraseña</label>
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Iniciar Sesión</button>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default LoginPage;