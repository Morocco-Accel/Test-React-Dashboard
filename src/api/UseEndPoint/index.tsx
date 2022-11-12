import { useQuery } from "react-query";

import { client } from "../client";
type zoneType = {
  code: string;
};
type TaskType = {
  id: number;
  avatar: string;
  telephone: string;
  disponible: string;
  name: string;
  lieux: zoneType[];
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
