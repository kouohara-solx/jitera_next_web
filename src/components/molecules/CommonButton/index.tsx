/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo, useEffect } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import { Box, Text } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type CommonButtonMoleculeProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
  responsiveVisibility?: string[];
};
function CommonButtonMolecule(props: CommonButtonMoleculeProps): JSX.Element {
  return (
    <Box
      className={`${styles.page_container} ${get(props, "className")}`}
      responsiveVisibility={get(props, "responsiveVisibility")}
    >
      <Box className={styles.property1active3}>
        <Text className={styles.text3} textType="Text">
          Button
        </Text>
      </Box>
      <Box className={styles.property1disable5}>
        <Text className={styles.text5} textType="Text">
          Button
        </Text>
      </Box>
    </Box>
  );
}
export default CommonButtonMolecule;
