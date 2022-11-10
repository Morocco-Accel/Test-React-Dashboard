import { useMutation } from "react-query";
import { client } from "./client";

type TaskType = {
  email: string;
  password: string;
};

export function useLoginTask() {
  return useMutation((data: TaskType) =>
    client.post("login", data, {
      params: { email: data.email, password: data.password },
    })
  );
}
