/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo, useEffect } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import Image from "next/future/image";
import assets from "@assets/index";
import { Box } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type IconssafarichevronbackwardMoleculeProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
  responsiveVisibility?: string[];
};
function IconssafarichevronbackwardMolecule(
  props: IconssafarichevronbackwardMoleculeProps
): JSX.Element {
  return (
    <Box
      source={undefined}
      sourceType="upload"
      className={`${styles.page_container} ${get(props, "className")}`}
      responsiveVisibility={get(props, "responsiveVisibility")}
    >
      <Image src={assets("1683086972052png")} alt={""} className={styles.image16} />
    </Box>
  );
}
export default IconssafarichevronbackwardMolecule;
