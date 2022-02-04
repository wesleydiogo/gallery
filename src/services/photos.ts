import { Photo } from '../types/Photo';
import { storage } from '../libs/firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

export const getAll = async () => {
    let list: Photo[] = [];

    const imagesFolder = ref(storage, "images"); //Referenciando a pasta de fotos
    const photoList = await listAll(imagesFolder); //Lista todos os itens contidos de imagesFolder

    for(let i in photoList.items) {
        let photoUrl = await getDownloadURL(photoList.items[i]);

        list.push({
            name: photoList.items[i].name,
            url: photoUrl
        })
    }

    return list;
}