import React from "react";
import { ComponentConfig } from "@/core/types";
import styles from "./styles.module.css";
import { getClassNameFactory } from "@/core/lib";
import { DropZone } from "@/core/components/DropZone";
import { Section } from "../../components/Section";

const getClassName = getClassNameFactory("GridItem", styles);

export type GridItemProps = {
  spanCol?: number;
  spanRow?: number;
};

export const GridItem: ComponentConfig<GridItemProps> = {
  fields: {
    spanCol: {
      label: "Span Col (1-12)",
      type: "number",
      min: 0,
      max: 12,
    },
    spanRow: {
      label: "Span Row (1-12)",
      type: "number",
      min: 0,
      max: 12,
    },
  },
  defaultProps: {},
  inline: true,
  render: ({ id, spanCol, spanRow, puck }) => {
    return (
      // <div
      //   className={getClassName()}
      //   id={id}
      //   ref={puck.dragRef}
      //   style={{
      //     gridColumn: spanCol
      //       ? `span ${Math.max(Math.min(spanCol, 12), 1)}`
      //       : "",
      //     gridRow: spanRow ? `span ${Math.max(Math.min(spanRow, 12), 1)}` : "",
      //   }}
      // >
      //   {id}
      // </div>
      <DropZone
        zone="items"
        className={getClassName()}
        style={{
          gridColumn: spanCol
            ? `span ${Math.max(Math.min(spanCol, 12), 1)}`
            : "",
          gridRow: spanRow ? `span ${Math.max(Math.min(spanRow, 12), 1)}` : "",
        }}
        dragRef={puck.dragRef}
        disallow={["GridItem"]}
      />
    );
  },
};
