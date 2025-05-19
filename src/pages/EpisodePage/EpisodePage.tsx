import { Title } from "../../common/components/Title/Title"
import { useGetAllEpisodesQuery } from "../../features/character/api/characterApi"
import { EpisodeCard } from "../../features/episode/ui/EpisodeCard"

export const EpisodePage = () => {

  const {data} = useGetAllEpisodesQuery()

  return (
    <div className="container mx-auto mb-12">
      <Title>EpisodePage</Title>
      {data?.results.map((item) => <EpisodeCard key={item.id} item={item}/>)}
    </div>
  )
}
