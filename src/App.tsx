import { useState, useEffect, FormEvent } from 'react';
import * as C from './App.styles';
import * as Photos from './services/photos';
import { Photo } from './types/Photo';
import { PhotoItem } from './components/PhotoItem';
import { storage } from './libs/firebase';
import { ref, deleteObject } from 'firebase/storage';

const App = () => {
  const [uploading, setUploading] = useState(false)
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      setPhotos(await Photos.getAll());
      setLoading(false);
    }
    getPhotos();
  }, []);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get('image') as File;

    if (file && file.size > 0) {
      setUploading(true);
      let result = await Photos.insert(file);
      setUploading(false);

      if (result instanceof Error) {
        alert(`${result.name} - ${result.message}`);
      } else {
        let newPhotoList = [...photos];
        newPhotoList.push(result);
        setPhotos(newPhotoList);
      }
    }
  }

  console.log(photos);

  const handleDeletePhoto = (name: string) => {
    let getPhoto = ref(storage, `images/${name}`);
    let newList = [...photos];

    deleteObject(getPhoto)
      .then(() => {
        let indexPhotoList = photos.map(item => item.name).indexOf(name);

        indexPhotoList > -1 && 
          newList.splice(indexPhotoList, 1) &&
            setPhotos(newList);
        
      })
      .catch((error) => alert(error))

  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de Fotos</C.Header>

        <C.UploadForm method="POST" onSubmit={handleFormSubmit}>
          <input type="file" name="image" />
          <input type="submit" value="Enviar" />
          {uploading &&
            <span>Carregando imagem... ⌛</span>
          }
        </C.UploadForm>

        {loading &&
          <C.Loading>
            <div className="emoji">⌛</div>
            <div>Carregando...</div>
          </C.Loading>
        }

        {!loading && photos.length > 0 &&
          <C.PhotoList>
            {photos.map((item, index) =>
              <PhotoItem key={index} url={item.url} name={item.name} onDelete={handleDeletePhoto} />
            )}
          </C.PhotoList>
        }

        {!loading && photos.length === 0 &&
          <C.Loading>
            <div className="emoji">😞</div>
            <div>Não há fotos cadastradas.</div>
          </C.Loading>
        }
      </C.Area>
    </C.Container>
  )
}

export default App;