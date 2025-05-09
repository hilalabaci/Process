import { IssueType } from "../types";
import { apiCall } from "./apiClient";

export const getBacklogCards = async (projectKey: string, boardId: string) => {
  return await apiCall<IssueType[]>(
    `projects/${projectKey}/boards/${boardId}/backlog`,
    {
      method: "GET",
    }
  );
};
