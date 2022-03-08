import useTheme from '../../../contexts/theme';
import * as C from './styles';

const Card = ({ children }: any) => {
    const { theme } = useTheme();

    return (
        <C.Card theme={theme}>
            {children}
        </C.Card>
    );
}
export default Card;