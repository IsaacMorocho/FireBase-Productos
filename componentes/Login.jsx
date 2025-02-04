import React from 'react';
import '../componentes/Login.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const logear = (e) => {
        e.preventDefault();
        console.log('Usuario:', username, 'Contraseña:', password);
    };
    return(
        <main>
            <div>
            <div className="loginPage">
            <h1 className="loginPage-title">Iniciar sesión</h1>
            <form onSubmit={logear}>
                <input
                    type="text"
                    name="username"
                    placeholder="Nombre de usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
            </div>
        </main>
    );
};
export default LoginPage;