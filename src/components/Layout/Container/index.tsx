import useTheme from "../../../contexts/theme";
import * as C from "./styles";

const Container = ({ children }: any) => {
    const { theme } = useTheme();

    return (
        <C.Container theme={theme}>
            {children}
        </C.Container>
    );
}
export default Container;