import useTheme from '../../../contexts/theme';
import * as C from './styles';

type Props = {
    label: string,
    className?: string,
    type: string,
    autoComplete?: string,
    name: string,
    placeholder: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
}

const Input = ({ label, className, autoComplete, type, name, placeholder, value, onChange }: Props) => {
    const { theme } = useTheme();

    return (
        <C.Container className={className}>
            <C.Label theme={theme} htmlFor="email">{label}</C.Label>
            <C.Input
                theme={theme}
                autoComplete={autoComplete}
                type={type} name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            ></C.Input>
        </C.Container>
    );
}
export default Input;