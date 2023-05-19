"use client";
import { ReactNode } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { useRouter } from "next/navigation";

import styles from "./GoBack.module.scss";

const GoBack = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  return (
    <button
      type="button"
      className={styles.Button}
      onClick={() => router.back()}
    >
      <HiArrowLeft size="24" />
      {children}
    </button>
  );
};

export default GoBack;
