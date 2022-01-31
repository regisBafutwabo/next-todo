import { format } from "date-fns";

import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Typography } from "@mui/material";

import { InfoProps } from "./Info.interface";
import {
  CompletedContainer,
  CompletedLabel,
  CreatedAtContainer,
  CreatedAtLabel,
  DateContainer,
  Description,
  DescriptionContainer,
  DescriptionLabel,
  Title,
  TitleContainer,
  UpdatedAtContainer,
  UpdatedAtLabel,
} from "./styles";

export const Info = ({ todoData }: InfoProps) => (
    <>
      <TitleContainer>
        <Title variant="subtitle1">{todoData.node?.title}</Title>
      </TitleContainer>
      <DescriptionContainer>
        <DescriptionLabel variant="subtitle2">Description</DescriptionLabel>
        <Description>{todoData.node?.description || ""}</Description>
        <CompletedContainer>
          <CompletedLabel>Completed: </CompletedLabel>
          {todoData.node?.completed ? (
            <ThumbUpIcon
              color="secondary"
              sx={{ fontSize: 24, paddingBottom: "5px" }}
            />
          ) : (
            <ThumbDownIcon
              color="error"
              sx={{ fontSize: 24, paddingTop: "5px" }}
            />
          )}
        </CompletedContainer>
      </DescriptionContainer>
      <DateContainer>
        <CreatedAtContainer>
          <CreatedAtLabel>{`Created at: `}</CreatedAtLabel>
          <Typography>
            {format(
              new Date(todoData.node?.created_at as string),
              "yyyy-MM-dd hh:mm"
            )}
          </Typography>
        </CreatedAtContainer>
        <UpdatedAtContainer>
          <UpdatedAtLabel>Updated At:</UpdatedAtLabel>
          <Typography>
            {format(
              new Date(todoData.node?.updated_at as string),
              "yyyy-MM-dd hh:mm"
            )}
          </Typography>
        </UpdatedAtContainer>
      </DateContainer>
    </>
  );
