import * as C from './styles';
import logo from '../../../assets/image/gym_logo1.png';
import { Card, FormGroup } from '../..';

const Auth: React.FC = ({ children }) => {

    return (
        <Card>
            <FormGroup>
                <C.Logo>
                    <img src={logo} alt={logo} />
                </C.Logo>
            </FormGroup>
            <div>
                <hr />
            </div>
            {children}
        </Card>
    );
};
export default Auth;