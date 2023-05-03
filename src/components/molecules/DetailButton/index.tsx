/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo, useEffect } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import { Box, Button } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type DetailButtonMoleculeProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
  responsiveVisibility?: string[];
  new_prop_Eqzq?: string;
};
function DetailButtonMolecule(props: DetailButtonMoleculeProps): JSX.Element {
  const handleButton2 = async () => {
    // TODO: handle logic
  };
  return (
    <Box
      className={`${styles.molecule} ${get(props, "className")}`}
      responsiveVisibility={get(props, "responsiveVisibility")}
    >
      <Button buttonType="ghost" className={styles.button_2} onClick={handleButton2}>
        [Button]
      </Button>
    </Box>
  );
}
export default DetailButtonMolecule;
