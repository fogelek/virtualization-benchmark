import { makeStyles } from "@fluentui/react-components";
import React from "react";
import { Row } from "../components/Row";
import { ROW_HEIGHT } from "../utils/constants";

import { useArray } from "../utils/useArray";

const useStyles = makeStyles({
  "content-visibility-content": {
    contain: "strict",
    height: "100vh",
    overflowX: "auto",
    overflowY: "auto",
  },
  "content-visibility-item": {
    height: `${ROW_HEIGHT}px`,
    contentVisibility: "auto",
    containIntrinsicSize: `0 ${ROW_HEIGHT}px`,
  },
});

export const ContentVisibility = React.memo(() => {
  const styles = useStyles();
  const indexArray = useArray();
  return (
    <main className={styles["content-visibility-content"]}>
      {indexArray.map((index) => (
        <Row
          key={index}
          index={index}
          className={styles["content-visibility-item"]}
        />
      ))}
    </main>
  );
});

ContentVisibility.displayName = "ContentVisibility";

export default ContentVisibility;
