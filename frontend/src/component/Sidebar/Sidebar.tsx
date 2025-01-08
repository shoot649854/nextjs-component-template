import React from "react";
import Link from "next/link";
import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <h2 className={styles.logo}>AI SaaS</h2>
      <ul>
        <li>
          <Link href="/dashboard">Home</Link>
        </li>
        <li>
          <Link href="/dashboard/projects">Projects</Link>
        </li>
        <li>
          <Link href="/dashboard/datasets">Datasets</Link>
        </li>
        <li>
          <Link href="/dashboard/model-training">Model Training</Link>
        </li>
        <li>
          <Link href="/dashboard/deployment">Deployment</Link>
        </li>
        <li>
          <Link href="/dashboard/settings">Settings</Link>
        </li>
        <li>
          <Link href="/dashboard/help-center">Help Center</Link>
        </li>
      </ul>
    </nav>
  );
}
