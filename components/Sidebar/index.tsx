import React, { FC, useState } from "react";
import Link from "next/link";
import AddLabelModal from "../AddLabelModal";
import { Container, Title, NavItem, GroupIcon, TaskCount } from "./styles";

import HomeIcon from "../../assets/icons/home.svg";
import CalendarIcon from "../../assets/icons/calendar.svg";
import CheckmarkIcon from "../../assets/icons/checkmark.svg";
import TrashIcon from "../../assets/icons/trash.svg";
import AddIcon from "../../assets/icons/add.svg";

const Sidebar: FC = () => {
  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <Container>
      {modalVisibility && <AddLabelModal setVisibility={setModalVisibility} />}
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
        Collections
        <AddIcon onClick={() => setModalVisibility(true)} />
      </Title>
      {[
        { title: "Work", color: "#00c0fd" },
        { title: "Personal", color: "#ec0039" },
        { title: "Errands", color: "#00b96d" },
      ].map(({ title, color }) => (
        <Link href={`/label/${title}`}>
          <NavItem color={color}>
            <GroupIcon color={color} />
            {title}
            <TaskCount>15</TaskCount>
          </NavItem>
        </Link>
      ))}
    </Container>
  );
};

export default Sidebar;
