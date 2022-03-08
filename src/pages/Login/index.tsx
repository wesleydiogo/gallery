import { useEffect, useState } from 'react';
import useAuth from '../../contexts/auth';
import * as C from './styles';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';
import logo from '../../assets/image/gym_logo1.png';
import { Link, useNavigate } from 'react-router-dom';
import { FormGroup, Input, Button, SmallText, ErrorText, Auth } from '../../components';

const Login: React.FC = () => {
    const { credential, setCredential } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [authenticating, setAuthenticating] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    useEffect(() => {
        scrollToTop();
    }, []);

    const handleLogin = (e: any) => {
        e.preventDefault();

        setAuthenticating(true);

        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                console.log(userCredential);

                setAuthenticated(true);
                setCredential({ id: userCredential.user.uid, email, password, authenticated })
                navigate('/home');
            })
            .catch(error => {
                console.log(error.message);
                setAuthenticating(false);
                if (error.code.includes('auth/invalid-email')) {
                    setError("Email inválido.")
                } else if (error.code.includes('auth/user-not-found')) {
                    setError('Conta não encontrada.')
                } else {
                    setError("Falha no login.")
                }
            })
    }

    return (
        <Auth>
            <form onSubmit={handleLogin}>
                <FormGroup>
                    <Input
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="wesleydiogo@live.com"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        label="Senha"
                        type="password"
                        name="password"
                        placeholder="********"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                    <SmallText justify="center">
                        Esqueceu a senha? <a href="#">Clique aqui</a>
                    </SmallText>
                </FormGroup>
                <FormGroup>
                    <Button
                        disabled={authenticating}
                        type="submit"
                    >
                        Login
                    </Button>
                    <SmallText>
                        Usuário novo? <Link to="/register">Registre-se!</Link>
                    </SmallText>
                </FormGroup>
                <ErrorText>{error}</ErrorText>
            </form>
        </Auth>
    );
};
export default Login;