import { useState } from 'react';
import { Button } from '../../common/components/Button/Button';
import { useGetCharacterQuery } from '../../features/character/api/characterApi';
import { Character } from '../../features/character/ui/Character';

export const CharacterPage = () => {
  const [page, setPage] = useState(1);

  const { data } = useGetCharacterQuery({ page });

  const nextPageHandler = () => {
    if (data?.info?.next) {
      // Проверяем, есть ли следующая страница
      setPage((prev) => prev + 1);
    }
  };

  const prevPageHandler = () => {
    if (data?.info?.prev) {
      // Проверяем, есть ли предыд
      setPage((prev) => prev - 1);
    }
  };

  return (
    <div className="container mx-auto mb-12">
      <h1 className="m-0 text-[#1e293b] font-extrabold text-[70px] text-center pt-12">
        CharacterPage
      </h1>
      <div className="flex flex-wrap gap-2">
        {data?.results?.map((item) => {
          return <Character key={item.id} item={item} />;
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
