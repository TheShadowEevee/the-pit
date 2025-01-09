import { buttonVariants } from "@/components/ui/button";
import { DataTable } from "@/src/components/data-table";
import { columns, pitOccupants } from "@/src/components/pit-list";
import Link from "next/link";
import React, { CSSProperties } from "react";

// #212529

export default function TablePage() {
  return (
    <div style={styles.container}>
        <br /><br />
        <Link className={buttonVariants({ variant: "outline"})} href="/">Return to The Pit</Link>
        <br /><br />
        <DataTable columns={columns} data={pitOccupants} />
    </div>
  );
}

// Styles
const styles: { [key: string]: CSSProperties } = {
  container: {
    position: "relative",
    height: "100vh", // Full screen height
    backgroundColor: "rgba(33, 37, 41, 0.2)",
  },
};