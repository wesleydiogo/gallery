import { ReactNode } from "react";
import * as C from './styles';

type Props = {
    children: ReactNode,
}

const ErrorText = ({ children }: Props): JSX.Element => {

    return (
        <C.Small>
            <p style={{color: 'red'}}>
                {children}
            </p>
        </C.Small>

    );
}
export default ErrorText;