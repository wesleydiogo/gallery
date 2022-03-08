import { createContext, Dispatch, FC, SetStateAction, useContext, useState } from "react";

// Tipando dados da autenticação
interface CredentialType {
    id: string,
    email: string,
    password: string,
    authenticated: boolean
}

// Tipando o estado da autenticação
export interface PropsCredentialType {
    credential: CredentialType,
    setCredential: Dispatch<SetStateAction<CredentialType>>
}

// Valor default do contexto
const DEFAULT_VALUE = {
    credential: {
        id: "",
        email: "",
        password: "",
        authenticated: false
    },
    setCredential: () => { }
}

// Criando contexto AuthContext
const AuthContext = createContext<PropsCredentialType>(DEFAULT_VALUE);

export const AuthContextProvider: FC = ({ children }) => {
    const [credential, setCredential] = useState(DEFAULT_VALUE.credential)

    return (
        <AuthContext.Provider value={{ credential, setCredential}}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);
export default useAuth;