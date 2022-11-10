import { useQuery } from "react-query";
import { client } from "../client";

type TaskType = {
  id: number;
  email: string;
  password: string;
  role: object;
};

const getTestApi = async () => {
  const { data } = await client.get("data.json");
  return data;
};

export function useUsers() {
  return useQuery<TaskType[]>("users", getTestApi);
}
