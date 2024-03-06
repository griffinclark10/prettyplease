const Authentication = () => {
    return (
        <div className="flex flex-col p-4 w-full">
            <div className="mb-8">
                <h1 className="text-xl font-bold text-blue-400 text-center">Welcome to Pretty Please!</h1>
            </div>
            <div className="flex flex-col space-y-4">
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        required
                        className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Your username"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Your password"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <div className="text-sm">
                        <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                            Forgot your password?
                        </a>
                    </div>
                </div>
                <button
                    type="submit"
                    className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Sign In
                </button>
            </div>
            <div className="mt-6 text-center">
                <p className="text-sm">
                    Don't have an account? <a href="#" className="text-blue-600 hover:text-blue-500">Sign up</a>
                </p>
            </div>
        </div>
    );
}


export default Authentication;