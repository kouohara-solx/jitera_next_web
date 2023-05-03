/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo, useEffect } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import IcLinedelete from "@components/molecules/IcLinedelete";
import { Box, Text } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type NoteItemMoleculeProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
  responsiveVisibility?: string[];
  content?: string;
  onPressDetail?: (id?: number) => any;
  id?: number;
};
function NoteItemMolecule(props: NoteItemMoleculeProps): JSX.Element {
  const handleText3 = async () => {
    try {
      const { onPressDetail, id } = props;
      return onPressDetail && onPressDetail(id);
    } catch (e: unknown) {}
  };
  return (
    <Box
      className={`${styles.page_container} ${get(props, "className")}`}
      responsiveVisibility={get(props, "responsiveVisibility")}
    >
      <Box className={styles.wrapper_note13}>
        <Text className={styles.text3} textType="Text" onClick={handleText3}>
          {get(props, "content")}
        </Text>
      </Box>
      <IcLinedelete className={styles.ic_linedelete1} />
    </Box>
  );
}
export default NoteItemMolecule;
