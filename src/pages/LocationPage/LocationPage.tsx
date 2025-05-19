import { Title } from "../../common/components/Title/Title"
import { useGetAllLocationQuery } from "../../features/character/api/characterApi"
import { LocationCard } from "../../features/location/ui/LocationCard"

export const LocationPage = () => {
  const {data} = useGetAllLocationQuery()

  return (
    <div className="container mx-auto mb-12">
      <Title>LocationPage</Title>
      {data?.results.map((item) => <LocationCard key={item.id} item={item}/> )}
    </div>
  )
}
