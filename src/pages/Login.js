import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className="surface-ground flex align-items-center justify-content-center min-h-screen">
            <div
                className="shadow-2 surface-card p-5 border-round w-full lg:w-4"
                style={{ maxWidth: '400px' }}
            >
                <div className="text-center mb-5">
                    <img
                        src="https://primefaces.org/cdn/primereact/images/logo.png"
                        alt="Apollo Logo"
                        className="w-6"
                    />
                    <h3 className="text-900 text-3xl font-medium mt-3">Welcome Back</h3>
                    <p className="text-600">Sign in to continue</p>
                </div>

                <form onSubmit={handleLogin}>
                    <div className="field mb-4">
                        <label htmlFor="username" className="block text-900 font-medium mb-2">
                            Username
                        </label>
                        <InputText
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                            className="w-full"
                        />
                    </div>

                    <div className="field mb-4">
                        <label htmlFor="password" className="block text-900 font-medium mb-2">
                            Password
                        </label>
                        <Password
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            feedback={false}
                            placeholder="Enter your password"
                            toggleMask
                            className="w-full"
                        />
                    </div>

                    <div className="flex align-items-center justify-content-between mb-4">
                        <div className="field-checkbox">
                            <input
                                type="checkbox"
                                id="rememberme"
                                className="mr-2"
                                style={{ cursor: 'pointer' }}
                            />
                            <label htmlFor="rememberme" className="text-600">
                                Remember me
                            </label>
                        </div>
                        <a href="#" className="font-medium text-blue-500 text-sm">
                            Forgot password?
                        </a>
                    </div>

                    <Button
                        label="Sign In"
                        type="submit"
                        className="p-button w-full p-3 text-white"
                        style={{ background: 'var(--primary-color)' }}
                    />
                </form>

                <div className="text-center mt-5">
                    <span className="text-600 font-medium">Don't have an account?</span>{' '}
                    <a href="#" className="font-medium text-blue-500">
                        Sign up now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
