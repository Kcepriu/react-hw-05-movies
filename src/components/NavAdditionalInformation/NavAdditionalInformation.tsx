"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import { nameRouters } from "@/constants/constantNameRoute";
import styles from "./NavAdditionalInformation.module.scss";

const NavAdditionalInformation = () => {
  const params = useParams();

  return (
    <div className={styles.Wrap}>
      <h2>Additional information</h2>
      <ul className={styles.List}>
        <li>
          <Link
            href={`${nameRouters.movies}/${params.filmId}/cast`}
            replace
            shallow
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            href={`${nameRouters.movies}/${params.filmId}/reviews`}
            replace
            shallow
          >
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavAdditionalInformation;
