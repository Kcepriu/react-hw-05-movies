// rfce
"use client";
import { FC } from "react";
import Link from "next/link";
import styles from "./NavHeader.module.scss";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { nameRouters } from "@/constants/constantNameRoute";

const NavHeader: FC = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className={styles.navList}>
        <li>
          <Link
            href={nameRouters.root}
            className={clsx(
              styles.navLink,
              pathname === nameRouters.root && styles.active
            )}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={nameRouters.movies}
            className={clsx(
              styles.navLink,
              pathname.includes(nameRouters.movies) && styles.active
            )}
          >
            Movies
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavHeader;
