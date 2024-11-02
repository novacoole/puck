import React from "react";
import { ComponentConfig } from "@/core/types";
import styles from "./styles.module.css";
import { getClassNameFactory } from "@/core/lib";
import { DropZone } from "@/core/components/DropZone";
import { Section } from "../../components/Section";

const getClassName = getClassNameFactory("Grid", styles);

export type GridProps = {
  distribution: "auto" | "manual";
};

export const Grid: ComponentConfig<GridProps> = {
  fields: {
    distribution: {
      type: "radio",
      options: [
        {
          value: "auto",
          label: "Auto",
        },
        {
          value: "manual",
          label: "Manual",
        },
      ],
    },
  },
  defaultProps: {
    distribution: "auto",
  },
  render: ({ distribution }) => {
    return (
      // <Section>
      <DropZone
        zone="grid"
        allow={["GridItem"]}
        className={getClassName()}
        style={{
          gridTemplateColumns:
            distribution === "manual" ? "repeat(12, 1fr)" : "",
          gridAutoColumns: distribution === "manual" ? "" : "1fr",
        }}
      ></DropZone>
      // </Section>
    );
  },
};
