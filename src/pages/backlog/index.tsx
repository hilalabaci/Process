import { DndProvider } from "react-dnd";
import { useRef } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import BacklogCards from "../../features/backlogCards";
import { Container } from "./styles";
import { useCallback, useEffect, useState } from "react";
import { IssueType, SprintType } from "../../types";
import { addSprint, getSprints } from "../../api/sprintApi";
import { useParams } from "react-router-dom";
import Sprint from "../../features/sprint";
import { useUserContext } from "../../contexts/UserContext";

type URLParams = {
  boardId?: string;
  projectKey?: string;
};

function Backlog() {
  const hasFetchedSprints = useRef(false);
  const { boardId, projectKey } = useParams<URLParams>();
  const [sprints, setSprints] = useState<SprintType[]>([]);
  const [activeToSprint, setActiveToSprint] = useState(false);
  const { user } = useUserContext();

  async function loadSprints() {
    if (!boardId) {
      return;
    }
    try {
      const { ok, data } = await getSprints(boardId, projectKey as string);
      if (ok && data) setSprints(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
  const createSprint = useCallback(async () => {
    if (!boardId || !user?.Id || !projectKey) {
      console.error("Missing required parameters to create sprint");
      return;
    }
    try {
      const { ok, data } = await addSprint(
        user?.Id,
        boardId,
        projectKey as string
      );
      if (ok && data) {
        setSprints((prevSprints: SprintType[]) => [
          ...prevSprints,
          data as SprintType,
        ]);
      }
    } catch (error) {
      console.error("Error creating sprint:", error);
    }
  }, [boardId, user?.Id]);

  useEffect(() => {
    if (!boardId || hasFetchedSprints.current) return;
    hasFetchedSprints.current = true;
    loadSprints();
  }, [boardId]);

  function onUpdateCard(card: IssueType | undefined) {
    loadSprints();
  }
  function ActiontoSprint(id: string) {
    return sprints.length > 0 && sprints[0].Id === id;
  }
  function updateDragandDrop() {}

  useEffect(() => {
    if (sprints.length > 0) {
      setActiveToSprint(
        sprints[0].Id === sprints.find((sprint) => sprint.Id)?.Id
      );
    }
  }, [sprints]);

  return (
    <Container>
      <DndProvider backend={HTML5Backend}>
        {sprints.map((sprint) => (
          <Sprint
            key={sprint.Id}
            onUpdate={onUpdateCard}
            sprint={sprint}
            sprintId={sprint.Id}
            sprintName={sprint.Name}
            sprintStartDate={sprint.StartDate}
            sprintEndDate={sprint.EndDate}
            activeToSprint={ActiontoSprint}
            sprintIsActive={sprint.IsActive}
            sprintGoal={sprint.SprintGoal}
            loadActiveSprint={loadSprints}
          />
        ))}
        <BacklogCards
          createSprint={createSprint}
          updateDragandDrop={updateDragandDrop}
        />
      </DndProvider>
    </Container>
  );
}
export default Backlog;
