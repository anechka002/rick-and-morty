import { Navigate, useNavigate, useParams } from 'react-router';
import { PATH } from '../../../common/routing/Routing';
import { useGetCharacterDetailsByIdQuery } from '../api/characterApi';
import { Button } from '../../../common/components/Button/Button';

export const CharacterItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: character, error } = useGetCharacterDetailsByIdQuery(
    Number(id || null)
  );

  if (!character) {
    return <h1>Empty data</h1>
  }

  if (error) return <Navigate to={PATH.CHARACTERS} />;

  const handleGoBack = () => {
    navigate(PATH.CHARACTERS);
  };

  const getStatusClassName = (status: string) => {
    let characterStatus;
    switch (status) {
      case 'Alive':
        characterStatus = 'bg-green-500'
        break;
      case 'Dead':
        characterStatus = 'bg-red-600'
        break;
      case 'unknown':
        characterStatus = 'bg-slate-200'
        break;
      default:
        characterStatus = ''
    }
    return `h-2.5 w-2.5 mr-2.5 rounded-full ${characterStatus}`;
  }

  return (
    <div className="container mx-auto mb-12">
      <div className="flex flex-col items-center">
        <h1 className="m-0 text-[#1e293b] font-extrabold text-[70px] text-center pt-12">
          {character?.name}
        </h1>
        <div className="flex bg-slate-700 text-slate-50 w-[700px] rounded-lg m-6">
          <img
            className="rounded-l-lg"
            src={character?.image}
            alt="character"
          />
          <div className="m-5">
            <div className="flex items-center mb-5 font-bold text-lg">
              <div className={getStatusClassName(character?.status)}>
              </div>
              <div>
                {character?.status} - {character?.species}
              </div>
            </div>
            <div className="mb-5">
              <p className="font-bold text-base">Last known location:</p>
              <p className="text-lg">{character?.location.name}</p>
            </div>
            <div className="mb-5">
              <p className="font-bold text-base">Episode count:</p>
              <p className="text-lg">{character?.episode.length}</p>
            </div>
            <div className="mb-5">
              <p className="font-bold text-base">Gender:</p>
              <p className="text-lg">{character?.gender}</p>
            </div>
          </div>
        </div>
        <Button
          className="m-2.5 p-2.5 bg-slate-800 text-slate-50 text-2xl w-[200px] rounded border border-solid border-slate-800 transition-colors ease-in-out hover:bg-slate-50 hover:text-slate-800"
          onClick={handleGoBack}
        >
          Go back
        </Button>
      </div>
    </div>
  );
};
