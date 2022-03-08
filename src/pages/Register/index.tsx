import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormGroup, Input, Button, ErrorText, SmallText, Auth } from '../../components';

import useAuth from '../../contexts/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../services/firebase';
import { collection, addDoc } from 'firebase/firestore';

const Register: React.FC = () => {
    const { setCredential } = useAuth();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [registering, setRegisteting] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    useEffect(() => {
        scrollToTop();
    }, []);

    const addDocumentInFirestoreDb = async () => {
        try {
            await addDoc(collection(db, "users"), {
                firsname: firstName,
                lastName: lastName,
            });
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }

    const handleRegister = (e: any): void => {
        e.preventDefault();

        password !== confirmPassword && setError("As senhas estão diferentes.");
        setRegisteting(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                setRegisteting(true);
                addDocumentInFirestoreDb();
                navigate('/login');
            })
            .catch(error => {
                if (error.code.includes('auth/weak-password')) {
                    setError('A senha deve conter no mínimo 6 caracteres.')
                } else if (error.code.includes('auth/auth/invalid-email')) {
                    setError('Email inválido.')
                } else if (error.code.includes('auth/email-already-in-use')) {
                    setError('Este email já foi cadastrado.')
                } else {
                    setError('Falha no cadastro.')
                }
                setRegisteting(false);
            })
    }

    return (
        <Auth>
            <form onSubmit={handleRegister}>
                <FormGroup>
                    <div>
                        <Input
                            label="Nome"
                            className="field--left"
                            type="text"
                            name="firstName"
                            placeholder="Nome"
                            value={firstName}
                            onChange={event => setFirstName(event.target.value)}
                        />
                        <Input
                            label="Sobrenome"
                            className="field--right"
                            type="text"
                            name="lastName"
                            placeholder="Sobrenome"
                            value={lastName}
                            onChange={event => setLastName(event.target.value)}
                        />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Input
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="Endereço de email"
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
                </FormGroup>
                <FormGroup>
                    <Input
                        label="Confirme a senha"
                        type="password"
                        name="password"
                        placeholder="********"
                        value={confirmPassword}
                        onChange={event => setConfirmPassword(event.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Button
                        disabled={registering}
                        type="submit"
                    >
                        Registrar
                    </Button>
                    <SmallText>
                        Já tem uma conta? Faça o <Link to="/login">Login</Link>
                    </SmallText>
                </FormGroup>
                <ErrorText>{error}</ErrorText>
            </form>
        </Auth>
    );
};
export default Register;