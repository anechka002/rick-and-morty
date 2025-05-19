import { useState } from 'react';
import { Button } from '../../common/components/Button/Button';
import { CharacterCard } from '../../features/character/ui/CharacterCard';
import { useDebounce } from '../../common/hooks/useDebounce';
import { useGetAllCharactersQuery } from '../../features/character/api/characterApi';

export const CharacterPage = () => {
  const [page, setPage] = useState(1);

  const [search, setSearch] = useState('');

  const debounced = useDebounce(search)

  const { data, isError } = useGetAllCharactersQuery( { page,  name: debounced }, { refetchOnFocus: true });

  const nextPageHandler = () => {
    if (data?.info?.next && !isError) {
      // Проверяем, есть ли следующая страница
      setPage((prev) => prev + 1);
    } 
    return
  };

  const prevPageHandler = () => {
    if (data?.info?.prev && !isError) {
      // Проверяем, есть ли предыд
      setPage((prev) => prev - 1);
    }
    return
  };

  return (
    <div className="container mx-auto mb-12">
      <h1 className="m-0 text-[#1e293b] font-extrabold text-[70px] text-center pt-12">
        CharacterPage
      </h1>

      <input 
        type="text" 
        className="w-full outline-0 border border-slate/50 transition-colors ease-in-out duration-300 focus:border-slate-400 py-2 px-4 h-[42px] mb-5 rounded-lg "
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>{isError && <p className='text-center text-red-600 text-4xl mb-2'>Something went wrong....</p>}</div>

      <div className="flex flex-wrap gap-2">
        {data?.results?.map((item) => {
          return <CharacterCard key={item.id} data={item} />;
        })}
      </div>

      <div className="flex justify-center m-8">
        <Button disabled={!data?.info?.prev} onClick={prevPageHandler}>
          Prev
        </Button>
        <Button disabled={!data?.info?.next} onClick={nextPageHandler}>
          Next
        </Button>
      </div>

    </div>
  );
};
