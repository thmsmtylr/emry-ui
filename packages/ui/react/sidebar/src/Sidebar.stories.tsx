import React from "react";
import * as Sidebar from "./Sidebar";
import { AccessibleIcon } from "@radix-ui/react-accessible-icon";
import type { Meta, StoryObj } from "@storybook/react";
import Home from "../../../images/icons/svg/home-line.svg";
import Orders from "../../../images/icons/svg/inbox-01.svg";
import Subscriptions from "../../../images/icons/svg/repeat-04.svg";
import Customers from "../../../images/icons/svg/users-01.svg";
import ChevronDown from "../../../images/icons/svg/chevron-down.svg";

const meta: Meta<typeof Sidebar.Root> = {
  title: "Navigation/Sidebar",
  component: Sidebar.Root,
};

export default meta;
type Story = StoryObj<typeof Sidebar.Root>;

const NAV_ITEMS_STUB = [
  { href: "#", title: "Home", icon: <Home className="w-5 h-5" /> },
  {
    href: "#",
    title: "Orders",
    icon: <Orders className="w-5 h-5" />,
    subItems: [
      {
        href: "#",
        title: "All orders",
      },
      {
        href: "#",
        title: "Draft orders",
      },
      {
        href: "#",
        title: "Carts",
      },
    ],
  },
  {
    href: "#",
    title: "Subscriptions",
    icon: <Subscriptions className="w-5 h-5" />,
  },
  { href: "#", title: "Customers", icon: <Customers className="w-5 h-5" /> },
  { href: "#", title: "Products", icon: "" },
  { href: "#", title: "Discounts", icon: "" },
  { href: "#", title: "Reporting", icon: "" },
];

function onClickToggleSubItem(e: any, item: string) {
  const target = document.getElementById(item);
  target?.classList.toggle("hidden");

  const isHidden = target?.classList.contains("hidden");
  e.currentTarget.setAttribute("aria-expanded", `${!isHidden}`);

  e.currentTarget.style.transform = `rotate(${!isHidden ? "-180deg" : "0deg"})`;
}

export const Default: Story = {
  args: {
    className:
      "flex flex-col flex-grow overflow-y-auto w-72 fixed top-0 bottom-0 bg-primary-700 pt-8 gap-y-6",
    children: (
      <>
        <Sidebar.Body>
          <Sidebar.Nav className="px-2">
            <Sidebar.List>
              {NAV_ITEMS_STUB.map((item) => (
                <Sidebar.Item key={item.title} className="flex flex-col">
                  <div className="flex items-center justify-between px-3 py-2 text-primary-100 text-md font-semibold rounded-md hover:bg-primary-600 hover:text-white transition-colors ease-in-out duration-300">
                    <a
                      href={item.href}
                      className="inline-flex items-center flex-grow gap-3"
                    >
                      {item.icon} {item.title}
                    </a>
                    {item?.subItems && (
                      <Sidebar.Trigger
                        onClick={(e) => onClickToggleSubItem(e, item.title)}
                        aria-expanded={"false"}
                        aria-controls={item.title}
                      >
                        <AccessibleIcon label={`${item.title} sub item toggle`}>
                          <ChevronDown />
                        </AccessibleIcon>
                      </Sidebar.Trigger>
                    )}
                  </div>
                  {item?.subItems && (
                    <Sidebar.List id={item.title} className="hidden">
                      {item.subItems.map((item) => (
                        <a key={item.title} href="#">
                          <Sidebar.Sub className="pl-[43px] py-1.5 text-primary-100 hover:text-white rounded-md hover:bg-primary-500 text-sm font-medium transition-colors ease-in-out duration-300">
                            {item.title}
                          </Sidebar.Sub>
                        </a>
                      ))}
                    </Sidebar.List>
                  )}
                </Sidebar.Item>
              ))}
            </Sidebar.List>
          </Sidebar.Nav>
        </Sidebar.Body>
      </>
    ),
  },
};

// NOTE: https://github.com/w3c/aria-practices/issues/353
