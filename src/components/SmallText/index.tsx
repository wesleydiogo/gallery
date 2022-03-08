import { ReactNode } from "react";
import useTheme from "../../contexts/theme";
import * as C from './styles';

type Props = {
    justify?: string,
    children: ReactNode,
}

const SmallText = ({ justify, children }: Props): JSX.Element => {
    const { theme } = useTheme();
    
    return (
        <C.Small theme={theme} justify={justify}>
            <p>
                {children}
            </p>
        </C.Small>

    );
}
export default SmallText;