import { ReactNode } from 'react';
import * as C from './styles';
import loadingIcon from '../../../assets/image/carregando.gif';
import useTheme from '../../../contexts/theme';

type Props = {
    disabled?: boolean,
    type?: string,
    children: ReactNode,
    onClick?: (e: any) => void
};

const Button = ({ disabled, children, onClick }: Props) => {
    const { theme } = useTheme();

    return (
        <C.Button disabled={disabled} theme={theme} onClick={onClick}>
            {disabled ? <img src={loadingIcon} alt="Carregando..." /> : children}
        </C.Button>

    );
}
export default Button;