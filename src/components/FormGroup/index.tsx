import useTheme from "../../contexts/theme";
import * as C from "./styles";

const FormGroup = ({ children }: any) => {

    return (
        <C.FormGroup>
            {children}
        </C.FormGroup>
    );
}
export default FormGroup;