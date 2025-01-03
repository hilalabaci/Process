import { useEffect, useState } from "react";
import CollapsibleDemo from "../../../tools/collapsible";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import {
  Container,
  Wrapper,
  AddProjectWrapper,
  UserInfo,
  ProjectTitle,
  Title,
  ArrowIcon,
  ProjectBoardContainer,
  ProjectBoardTitle,
  BoardWrapper,
  GetBoardsContainer,
  SelectedBoard,
  ProjectBoardTitleWrapper,
  GetBoardsList,
  GetBoardsListItem,
  SideBarElement,
  SideBarElementWrapper,
  SideBarElementIcon,
  IconListBullet,
  SideBarItem,
  SideBarWrapper,
  SideBarListWrapper,
  IconCalendarViewWeek,
  TitleGetBoards,
  CreateBoardinBoards,
  IconPlus,
} from "./styles";
import { useUserContext } from "../../../../contexts/UserContext";
import { useApplicationContext } from "../../../../contexts/ApplicationContext";
import apiHelper from "../../../../api/apiHelper";
import Scroll from "../../../tools/scroll";
import OptionalBoardCreate from "../../board/optional/create";
import Modal from "../../../tools/modal";
import ProjectAvatar from "../../../tools/user/project-avatar";
import { useLocation, useParams } from "react-router-dom";

type ProjectMenuPropsType = {
  ProjectTitle: string;
  hideMenu: boolean;
  projectKey: string;
  projectId: string;
  onHover?: (hover: boolean) => void;
  selectedBoardTitle: string;
  selectedProjectsTitle: string;
};
type URLParams = {
  projectKey: string;
  boardId?: string;
};
function ProjectMenu(props: ProjectMenuPropsType) {
  const location = useLocation();
  const { projectKey, boardId } = useParams<URLParams>();
  const { user } = useUserContext();
  const { boards, setBoards } = useApplicationContext();
  const [selectedBoard, setSelectedBoard] = useState<string | null>(null);
  const [showBoards, setShowBoards] = useState(false);

  const isBacklog = location.pathname.includes("/backlog");
  const isActiveSprint = !isBacklog;
  const [showModalforCreateButton, setShowModalforCreateButton] =
    useState(false);

  function openModalforCreateButton() {
    setShowModalforCreateButton(true);
  }
  function closeModalforCreateButton() {
    setShowModalforCreateButton(false);
  }

  async function loadBoards() {
    if (!user) return;
    const { ok, data } = await apiHelper.getBoards(props.projectKey, user._id);
    if (ok && data) {
      setBoards(data);
    }
  }
  useEffect(() => {
    loadBoards();
  }, []);
  return (
    <Container
      $hidden={props.hideMenu}
      onMouseEnter={() => props.onHover?.(true)}
      onMouseLeave={() => props.onHover?.(false)}
    >
      <Wrapper>
        <UserInfo $hidden={props.hideMenu}>
          <ProjectAvatar
            $hidden={props.hideMenu}
            $userPhotoWidth="25px"
            $userPhotoHeight="25px"
            $userPhotoFontSize="10px"
            $userBorderadius="3px"
            //$userBorder={props.$userBorder}
            $fontWeight="600"
            projectId={props.projectId}
          />
          <ProjectTitle $hidden={props.hideMenu}>
            {props.ProjectTitle}
          </ProjectTitle>
        </UserInfo>
        <AddProjectWrapper $hidden={props.hideMenu}>
          <SideBarItem>
            <Title>Planning</Title>
            <SideBarWrapper>
              <BoardWrapper>
                <CollapsibleDemo
                  open={showBoards}
                  setOpen={setShowBoards}
                  trigger={
                    <ProjectBoardContainer>
                      <ProjectBoardTitleWrapper>
                        <ProjectBoardTitle>
                          {props.selectedBoardTitle}
                        </ProjectBoardTitle>
                        <ArrowIcon
                          className="dropdown-trigger"
                          as={
                            showBoards
                              ? KeyboardArrowUpRoundedIcon
                              : KeyboardArrowDownRoundedIcon
                          }
                        />
                      </ProjectBoardTitleWrapper>
                      <SelectedBoard>Board</SelectedBoard>
                    </ProjectBoardContainer>
                  }
                >
                  <GetBoardsContainer>
                    <Scroll scrollHeight="180px">
                      <GetBoardsList>
                        <TitleGetBoards>
                          Boards in {props.selectedProjectsTitle}
                        </TitleGetBoards>

                        {boards.map((board, index) => (
                          <GetBoardsListItem
                            to={`/projects/${props.projectKey}/boards/${board._id}`}
                            key={board._id}
                            isSelected={selectedBoard === board._id}
                            onClick={() => {
                              setSelectedBoard(board._id);
                              setShowBoards(false);
                            }}
                          >
                            <SideBarElementIcon>
                              <IconCalendarViewWeek strokeWidth="10px" />
                            </SideBarElementIcon>
                            {board.title}
                          </GetBoardsListItem>
                        ))}
                      </GetBoardsList>
                    </Scroll>
                    <Modal
                      onClose={closeModalforCreateButton}
                      open={showModalforCreateButton}
                      trigger={
                        <CreateBoardinBoards onClick={openModalforCreateButton}>
                          <IconPlus />
                          Create Board
                        </CreateBoardinBoards>
                      }
                      onChange={setShowModalforCreateButton}
                    >
                      <OptionalBoardCreate
                        // onCreate={props.onCreate}
                        onClose={closeModalforCreateButton}
                      />
                    </Modal>
                  </GetBoardsContainer>
                </CollapsibleDemo>
              </BoardWrapper>
              {selectedBoard && (
                <SideBarListWrapper>
                  <SideBarElement
                    to={`/projects/${props.projectKey}/boards/${selectedBoard}/backlog`}
                  >
                    <SideBarElementWrapper isSelected={isBacklog}>
                      <SideBarElementIcon>
                        <IconListBullet strokeWidth={40} />
                      </SideBarElementIcon>
                      Backlog
                    </SideBarElementWrapper>
                  </SideBarElement>
                  <SideBarElement
                    to={`/projects/${props.projectKey}/boards/${selectedBoard}`}
                  >
                    <SideBarElementWrapper isSelected={isActiveSprint}>
                      <SideBarElementIcon>
                        <IconCalendarViewWeek strokeWidth="10px" />
                      </SideBarElementIcon>
                      Active sprints
                    </SideBarElementWrapper>
                  </SideBarElement>
                </SideBarListWrapper>
              )}
            </SideBarWrapper>
          </SideBarItem>
        </AddProjectWrapper>
      </Wrapper>
    </Container>
  );
}
export default ProjectMenu;
