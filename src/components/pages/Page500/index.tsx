/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo, useEffect } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import { useNavigateService } from "@services/navigate";
import { Page, Box, Row, Text, Button } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type Page500PageProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
};
function Page500Page(props: Page500PageProps): JSX.Element {
  const navigateService = useNavigateService();

  const handleButton0 = async () => {
    try {
      navigateService.navigate("/");
    } catch (e: unknown) {}
  };
  return (
    <Page className={styles.page_container}>
      <Box responsiveVisibility={["desktop", "tablet", "mobile"]} className={styles.box_0}>
        <Box className={styles.box_0}>
          <Row align="top" gutter={[30, 30]} justify="center" className={styles.row_0}>
            <Text className={styles.text_0} textType="Text">
              500
            </Text>
          </Row>
          <Row align="top" gutter={[30, 28]} justify="center" className={styles.row_0}>
            <Text className={styles.text_0} textType="Text">
              System Error
            </Text>
          </Row>
          <Row align="top" gutter={[30, 30]} justify="center" className={styles.row_0}>
            <Text className={styles.text_0} textType="Text">
              Description about system error
            </Text>
          </Row>
          <Row align="top" gutter={[30, 30]} justify="center" className={styles.row_0}>
            <Button buttonType="link" className={styles.button_0} onClick={handleButton0}>
              トップに戻る
            </Button>
          </Row>
        </Box>
      </Box>
    </Page>
  );
}
export default Page500Page;
