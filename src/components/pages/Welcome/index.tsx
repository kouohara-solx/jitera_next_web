/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo, useEffect } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import Background from "@components/molecules/Background";
import Property1active from "@components/molecules/Property1active";
import { useNavigateService } from "@services/navigate";
import { Page, Box, Text } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type WelcomePageProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
};
function WelcomePage(props: WelcomePageProps): JSX.Element {
  const navigateService = useNavigateService();

  const handleOnPressCommonButton1 = async () => {
    try {
      navigateService.navigate("/signup");
    } catch (e: unknown) {}
  };
  const handleText7 = async () => {
    try {
      navigateService.navigate("/login");
    } catch (e: unknown) {}
  };
  return (
    <Page className={styles.page_container}>
      <Box className={styles.container7}>
        <Background className={styles.background1} />
        <Box className={styles.wrapper7}>
          <Text className={styles.text4} textType="Text">
            オーサムノート
          </Text>
          <Box className={styles.card7}>
            <Text className={styles.text6} textType="Text">
              ノートアプリにようこそ
            </Text>
            <Property1active
              className={styles.common_button1}
              label="サインアップ"
              onPress={handleOnPressCommonButton1}
            />
            <Text className={styles.text7} textType="Text" onClick={handleText7}>
              すでにメンバーなら、こちらからログインできます。
            </Text>
          </Box>
        </Box>
      </Box>
    </Page>
  );
}
export default WelcomePage;
