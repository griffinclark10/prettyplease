const Signup = () => {
    return (
        <div className="flex flex-col p-4 w-full">
            <div className="mb-8">
                <h1 className="text-lg font-bold text-blue-400 text-center">(pretty) Please Enter Your Info</h1>
            </div>
            <div className="flex flex-col space-y-4 overflow-y-scroll">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                        id="Name"
                        name="Name"
                        type="text"
                        required
                        className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        required
                        className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Username"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="damn@damnfamily.ca"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        id="phone"
                        name="phone"
                        type="text"
                        required
                        className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="1 (234) 567-8910"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="text"
                        required
                        className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Your password"
                    />
                </div>
                <div className="flex items-center justify-center pb-4">
                    <button
                        type="submit"
                        className="mt-4 w-5/6 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                    Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
}


export default Signup;