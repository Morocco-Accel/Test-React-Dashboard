import { useQuery } from "react-query";

import { client } from "../client";

type TaskType = {
  id: number;
  avatar: string;
  telephone: string;
  disponible: string;
  name: string;
  lieux: object;
  email: string;
  createdAt: string;
};

const getTestApi = async () => {
  const { data } = await client.get("data.json");
  console.log(data);
  return data;
};

export function useUsers() {
  return useQuery<TaskType[]>("users", getTestApi);
}
