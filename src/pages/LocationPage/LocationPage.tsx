import { Title } from "../../common/components/Title/Title"
import { useGetAllLocationsQuery } from "../../features/character/api/characterApi"
import { LocationCard } from "../../features/location/ui/LocationCard"

export const LocationPage = () => {
  const {data} = useGetAllLocationsQuery()

  return (
    <div className="container mx-auto mb-12">
      <Title>LocationPage</Title>
      {data?.results.map((item) => <LocationCard key={item.id} item={item}/> )}
    </div>
  )
}
