import { AddColumnRequest } from "../apiTypes/types";
import { ColumnType } from "../types";
import { apiCall } from "./apiClient";

export const getColumns = async (
  projectKey: string,
  boardId: string,
  sprintId: string
) => {
  return await apiCall<ColumnType[]>(
    `projects/${projectKey}/boards/${boardId}/sprints/${sprintId}/columns`,
    {
      method: "GET",
      urlParams: new URLSearchParams({ projectKey, boardId, sprintId }),
    }
  );
};
export const addColumn = async (
  data: AddColumnRequest,
  projectKey: string,
  boardId: string,
  sprintId: string
) => {
  return await apiCall(
    `projects/${projectKey}/boards/${boardId}/sprints/${sprintId}/columns`,
    {
      method: "POST",
      data,
    }
  );
};
export const deleteColumn = async (
  columnId: string,
  userId: string,
  projectKey: string,
  boardId: string,
  sprintId: string
) => {
  return await apiCall(
    `projects/${projectKey}/boards/${boardId}/sprints/${sprintId}/columns/${columnId}`,
    {
      method: "DELETE",
      urlParams: new URLSearchParams({ columnId }),
      data: { userId },
    }
  );
};
