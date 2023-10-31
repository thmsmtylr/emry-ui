import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuItemShortcut,
  DropdownMenuTrigger,
} from "./DropdownMenu";
import { Button } from "react/button/src";
import type { Meta, StoryObj } from "@storybook/react";
import User from "../../../images/icons/svg/user-01.svg";
import Settings from "../../../images/icons/svg/settings-01.svg";
import Zap from "../../../images/icons/svg/zap.svg";
import HomeLine from "../../../images/icons/svg/home-line.svg";
import Users from "../../../images/icons/svg/users-01.svg";
import UserPlus from "../../../images/icons/svg/user-plus-01.svg";
import Logout from "../../../images/icons/svg/log-out-01.svg";
import ChevronDown from "../../../images/icons/svg/chevron-down.svg";

const meta: Meta<typeof DropdownMenu> = {
  title: "Dropdown Menu",
  component: DropdownMenu,
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  name: "Default",
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          addClassNames="group data-[state='open']:ring-4 data-[state='open']:ring-gray-100"
          removeClassNames="focus:ring-4 focus:ring-gray-100"
        >
          Account{" "}
          <ChevronDown className="group-data-[state='open']:rotate-180" />
        </Button>
      </DropdownMenuTrigger>
      {/* TODO: will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade */}
      <DropdownMenuContent side="bottom" sideOffset={8}>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User /> View profile
            <DropdownMenuItemShortcut>⌘K-&gt;P</DropdownMenuItemShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings /> Settings
            <DropdownMenuItemShortcut>⌘S</DropdownMenuItemShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Zap /> Keyboard shortcuts
            <DropdownMenuItemShortcut>?</DropdownMenuItemShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <HomeLine />
            Company profile
            <DropdownMenuItemShortcut>⌘K-&gt;C</DropdownMenuItemShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Users />
            Team
            <DropdownMenuItemShortcut>⌘K-&gt;T</DropdownMenuItemShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <UserPlus />
            Invite colleagues
            <DropdownMenuItemShortcut>⌘I</DropdownMenuItemShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Logout />
            Log out
            <DropdownMenuItemShortcut>⌥⇧Q</DropdownMenuItemShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};
