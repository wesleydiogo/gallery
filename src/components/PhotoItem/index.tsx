import * as C from './styles';

type Props = {
    name: string,
    url: string,
    onDelete: (photos: string) => void,
}

export const PhotoItem = ({ url, name, onDelete }: Props): JSX.Element => {

    return (
        <C.Container>
            <img src={url} alt={name} />
            {name}
            <button onClick={() => onDelete(name)}>
                🗑️ Deletar
            </button>
        </C.Container>
    )
}