import { Button, Drawer } from "antd";
import { useState } from "react";
import logo from "../../assets/SVG/Visual-ICT-Logo.svg";
import { useNavigate } from "react-router-dom";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { RiMenu3Line } from "react-icons/ri";

type MenuItem = Required<MenuProps>["items"][number];

const MobileNav = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const items: MenuItem[] = [
    {
      key: "sub1",
      label: "Company",
      type: "group",
      //icon: ,
      children: [
        { key: "1", label: "About Us", onClick: () => navigate("/aboutUs") },
        { key: "2", label: "Api Docs" },
        { key: "3", label: "Gallery",
          onClick: () => navigate("/gallery"),
        },
      ],
    },
    {
      type: "divider",
    },
    {
      key: "sub2",
      label: "Products",
      type: "group",
      //icon: ,
      children: [
        {
          key: "3",
          label: "Mobile Money",
          onClick: () => navigate("/mobileMoney"),
        },
        {
          key: "4",
          label: "Cash Disbursement",
          onClick: () => navigate("/cashDisbursement"),
        },
        {
          key: "5",
          label: "Payroll Services",
          onClick: () => navigate("/payroll"),
        },
      ],
    },
    {
      type: "divider",
    },
    {
      key: "sub4",
      label: "Help",
      type: "group",
      //icon: >,
      children: [
        {
          key: "6",
          label: "Contact Us",
          onClick: () => navigate("/contactUs"),
        },
        { key: "7", label: "FAQ's", onClick: () => navigate("/faq") },
      ],
    },
  ];

  return (
    <>
      <div className="flex justify-between px-5 lg:hidden">
        <img
          src={logo}
          alt="LOGO"
          className=" w-[200px] cursor-pointer"
          onClick={() => navigate("/")}
        />

        <Button className=" !bg-transparent !border-none" onClick={showDrawer}>
         <RiMenu3Line size={25} />
        </Button>
      </div>

      <Drawer width={250} title="" onClose={onClose} open={open}>
        <Menu
          //onClick={onClick}
          style={{ width: "100%" }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
      </Drawer>
    </>
  );
};

export default MobileNav;
