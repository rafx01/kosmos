import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useGetNextLaunches() {
  return useQuery({
    queryKey: ['launches'],
    queryFn: async () => {
      const { data } = await axios.get(
        `${process.env.EXPO_PUBLIC_SPACEDEVS_URL}/launches/upcoming/?status=1`
      );

      return data;
    },
  });
}
