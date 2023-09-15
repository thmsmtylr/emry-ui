import React, {
  ReactNode,
  forwardRef,
  ButtonHTMLAttributes,
  HTMLAttributes,
} from "react";
import { Button } from "react/button/src";

const SIDEBAR_NAME = "Sidebar";

type SidebarRef = HTMLDivElement;

type SidebarTheme = "light" | "dark" | "primary";

interface SidebarProps {
  addClassNames?: string;
  removeClassNames?: string;
  className?: string;
  children?: ReactNode;
}

/**
 * Sidebar navigations help the user navigate through an application.
 * Vertically stacking navigation items is useful for fitting large menus.
 * Sidebar navigations should be as helpful as possible, with clear and
 * accessible links to everywhere the user may need to go without being cluttered/overwhelming.
 */
const Sidebar = forwardRef<SidebarRef, SidebarProps>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <div ref={ref} className={className} {...rest}>
      {children}
    </div>
  );
});

Sidebar.displayName = SIDEBAR_NAME;

const SIDEBAR_HEADER_NAME = "Sidebar header";

interface SidebarHeaderProps {
  children: ReactNode;
}

type SidebarHeaderRef = HTMLDivElement;

const SidebarHeader = forwardRef<SidebarHeaderRef, SidebarHeaderProps>(
  (props, ref) => {
    const { children, ...rest } = props;
    return (
      <div ref={ref} {...rest}>
        {children}
      </div>
    );
  }
);

SidebarHeader.displayName = SIDEBAR_HEADER_NAME;

const SIDEBAR_BODY_NAME = "Sidebar body";

interface SidebarBodyProps {
  children: ReactNode;
}

const SidebarBody = (props: SidebarBodyProps) => {
  const { children } = props;
  return <>{children}</>;
};

SidebarBody.displayName = SIDEBAR_BODY_NAME;

const SIDEBAR_NAV_NAME = "Sidebar nav";

interface SidebarNavProps {
  children: ReactNode;
  className?: string;
}

type SidebarNavRef = HTMLDivElement;

const SidebarNav = forwardRef<SidebarNavRef, SidebarNavProps>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <nav ref={ref} className={className} {...rest}>
      {children}
    </nav>
  );
});

SidebarNav.displayName = SIDEBAR_NAV_NAME;

const SIDEBAR_NAV_LIST_NAME = "Sidebar list";

interface SidebarNavListProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
  className?: string;
}

type SidebarNavListRef = HTMLUListElement;

const SidebarNavList = forwardRef<SidebarNavListRef, SidebarNavListProps>(
  (props, ref) => {
    const { children, className, ...rest } = props;
    return (
      <ul ref={ref} className={className} {...rest}>
        {children}
      </ul>
    );
  }
);

SidebarNavList.displayName = SIDEBAR_NAV_LIST_NAME;

const SIDEBAR_NAV_ITEM_NAME = "Sidebar nav item";

interface SidebarNavItemProps {
  children: ReactNode;
  className?: string;
}

type SidebarNavItemRef = HTMLLIElement;

const SidebarNavItem = forwardRef<SidebarNavItemRef, SidebarNavItemProps>(
  (props, ref) => {
    const { children, className, ...rest } = props;
    return (
      <li ref={ref} className={className} {...rest}>
        {children}
      </li>
    );
  }
);

SidebarNavItem.displayName = SIDEBAR_NAV_ITEM_NAME;

const SIDEBAR_NAV_TRIGGER_NAME = "Sidebar nav trigger";

interface SidebarNavTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

type SidebarNavTriggerRef = HTMLButtonElement;

const SidebarNavTrigger = forwardRef<
  SidebarNavTriggerRef,
  SidebarNavTriggerProps
>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <Button ref={ref} headless {...rest}>
      {children}
    </Button>
  );
});

SidebarNavTrigger.displayName = SIDEBAR_NAV_TRIGGER_NAME;

const Root = Sidebar;
const Header = SidebarHeader;
const Body = SidebarBody;
const Nav = SidebarNav;
const List = SidebarNavList;
const Item = SidebarNavItem;
const Sub = SidebarNavItem;
const Trigger = SidebarNavTrigger;

export {
  //
  Sidebar,
  SidebarHeader,
  SidebarBody,
  SidebarNav,
  SidebarNavList,
  SidebarNavItem,
  SidebarNavTrigger,
  //
  Root,
  Header,
  Body,
  Nav,
  List,
  Item,
  Sub,
  Trigger,
};
