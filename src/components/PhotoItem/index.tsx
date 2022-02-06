import * as C from './styles';
import { Photo } from '../../types/Photo';

export const PhotoItem = ({ url, name }: Photo): JSX.Element => {

    return (
        <C.Container>
            <img src={url} alt={name} />
            {name}
        </C.Container>
    )
}