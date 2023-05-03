/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo, useEffect } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import Background from "@components/molecules/Background";
import NoteItem from "@components/molecules/NoteItem";
import { useAuthenticationService } from "@services/authentication";
import { useNoteService } from "@services/note";
import { useNavigateService } from "@services/navigate";
import { Page, Box, Text, List } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type HomePageProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
};
function HomePage(props: HomePageProps): JSX.Element {
  const authenticationService = useAuthenticationService();
  const authenticatedDataValue = authenticationService.useAuthenticatedData("authenticatedData");
  const noteService = useNoteService();
  const getApiNotesInstance = noteService.useGetApiNotes();
  const getApiNotesResult = getApiNotesInstance.useQuery({
    notes: { user_id: get(authenticatedDataValue, "id") },
  });
  const navigateService = useNavigateService();

  const handleCreateNoteText = async () => {
    try {
      navigateService.navigate("/createnote");
    } catch (e: unknown) {}
  };
  return (
    <Page className={styles.page_container}>
      <Box className={styles.container12}>
        <Background className={styles.background1} />
        <Box className={styles.wrapper12}>
          <Box className={styles.header_wrapper6}>
            <Text className={styles.text5} textType="Text">
              ノートリスト
            </Text>
            <Text
              className={styles.create_note_text}
              textType="Text"
              onClick={handleCreateNoteText}
            >
              ノートの作成
            </Text>
          </Box>
          <List
            dataSource={undefined}
            rowKey={useCallback((item: Record<string, any>) => `${item.id}_${item.created_at}`, [])}
            renderItem={useCallback(
              (item: any) => (
                <NoteItem id={""} />
              ),
              []
            )}
          />
        </Box>
      </Box>
    </Page>
  );
}
export default HomePage;
