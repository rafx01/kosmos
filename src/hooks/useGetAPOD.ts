import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useGetAPOD() {
  return useQuery({
    queryKey: ['apod'],
    queryFn: async () => {
      const { data } = await axios.get(`${process.env.EXPO_PUBLIC_NASA_BASE_URL}/planetary/apod`, {
        params: {
          api_key: process.env.EXPO_PUBLIC_NASA_TOKEN,
        },
      });
      return data;
    },
  });
}
