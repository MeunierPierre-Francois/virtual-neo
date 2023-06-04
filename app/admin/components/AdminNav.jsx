"use client";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineUnorderedList, AiOutlineSetting } from "react-icons/ai";
import { SlGameController } from "react-icons/sl";
import { BsTag } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";

const AdminNav = ({ show, setShowNav }) => {
  const inactiveLink = "flex gap-1 p-1";
  const activeLink = inactiveLink + " bg-highlight text-black rounded-lg";
  const inactiveIcon = "w-6 h-6";
  const activeIcon = "w-6 h-6 text-primary";

  const pathname = usePathname();

  const handleLinkClick = () => {
    setShowNav(false);
  };

  return (
    <aside
      className={
        (show ? "left-0" : "-left-full") +
        " top-0 text-gray-500 p-4 fixed w-full bg-bgGray h-full md:static md:w-auto transition-all"
      }
    >
      <div className="mb-4 mr-4">
        <Logo />
      </div>

      <nav className="flex flex-col gap-2">
        <Link
          href={"/admin"}
          className={pathname === "/admin" ? activeLink : inactiveLink}
          onClick={handleLinkClick}
        >
          <RxDashboard
            className={pathname === "/admin" ? activeIcon : inactiveIcon}
          />
          Dashboard
        </Link>

        <Link
          href={"/admin/jeux"}
          className={
            pathname.includes("/admin/jeux") ? activeLink : inactiveLink
          }
          onClick={handleLinkClick}
        >
          <SlGameController
            className={
              pathname.includes("/admin/jeux") ? activeIcon : inactiveIcon
            }
          />
          Jeux
        </Link>

        <Link
          href={"/admin/categories"}
          className={
            pathname.includes("/admin/categories") ? activeLink : inactiveLink
          }
          onClick={handleLinkClick}
        >
          <BsTag
            className={
              pathname.includes("/admin/categories") ? activeIcon : inactiveIcon
            }
          />
          Catégories
        </Link>

        <Link
          href={"/admin/reservation"}
          className={
            pathname.includes("/admin/reservation") ? activeLink : inactiveLink
          }
          onClick={handleLinkClick}
        >
          <AiOutlineUnorderedList
            className={
              pathname.includes("/admin/reservation")
                ? activeIcon
                : inactiveIcon
            }
          />
          Réservation
        </Link>

        <Link
          href={"/admin/parametre"}
          className={
            pathname.includes("/admin/parametre") ? activeLink : inactiveLink
          }
          onClick={handleLinkClick}
        >
          <AiOutlineSetting
            className={
              pathname.includes("/admin/parametre") ? activeIcon : inactiveIcon
            }
          />
          Paramètres
        </Link>
      </nav>
    </aside>
  );
};

export default AdminNav;
