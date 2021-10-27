import React, { FC, useState } from "react";
import Link from "next/link";
import AddTagModal from "../AddTagModal";
import { Container, Title, NavItem, GroupIcon, TaskCount } from "./styles";

import HomeIcon from "../../assets/icons/home.svg";
import CalendarIcon from "../../assets/icons/calendar.svg";
import CheckmarkIcon from "../../assets/icons/checkmark.svg";
import TrashIcon from "../../assets/icons/trash.svg";
import AddIcon from "../../assets/icons/add.svg";
import useTags from "../../queries/useTags";

const Sidebar: FC = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const { data: tags } = useTags();

  return (
    <Container>
      {modalVisibility && <AddTagModal setVisibility={setModalVisibility} />}
      <Link href="/">
        <NavItem>
          <HomeIcon />
          home
          <TaskCount>24</TaskCount>
        </NavItem>
      </Link>
      <Link href="/today">
        <NavItem>
          <CalendarIcon />
          today
          <TaskCount>2</TaskCount>
        </NavItem>
      </Link>
      <Link href="/complete">
        <NavItem>
          <CheckmarkIcon />
          complete
        </NavItem>
      </Link>
      <Link href="/trash">
        <NavItem>
          <TrashIcon />
          trash
        </NavItem>
      </Link>
      <Title>
        Tags
        <AddIcon onClick={() => setModalVisibility(true)} />
      </Title>
      {tags?.map(({ id, name, color }) => (
        <Link href={`/label/${id}`} key={id}>
          <NavItem color={color}>
            <GroupIcon color={color} />
            {name}
            <TaskCount>15</TaskCount>
          </NavItem>
        </Link>
      ))}
    </Container>
  );
};

export default Sidebar;
