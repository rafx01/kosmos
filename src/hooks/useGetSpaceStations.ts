import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useGetSpaceStations() {
  return useQuery({
    queryKey: ['spaceStations'],
    queryFn: async () => {
      const { data } = await axios.get(`${process.env.EXPO_PUBLIC_SPACEDEVS_URL}/space_stations/`);
      return data;
    },
  });
}
