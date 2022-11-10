import { useQuery } from "react-query";
import { client } from "../client";

type TaskType = {
  id: number;
  email: string;
  password: string;
  role: object;
};

const getUsers = async () => {
  const { data } = await client.get("users");
  return data;
};

export function useUsers() {
  return useQuery<TaskType[]>("users", getUsers);
}
