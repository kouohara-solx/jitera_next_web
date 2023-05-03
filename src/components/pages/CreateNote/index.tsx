/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo, useEffect } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import Background from "@components/molecules/Background";
import Iconssafarichevronbackward from "@components/molecules/Iconssafarichevronbackward";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Property1active from "@components/molecules/Property1active";
import { useNavigateService } from "@services/navigate";
import { Page, Box, Text, Input } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type CreateNotePageProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
};
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Form1FormData {
  input_1: string;
  input_2: string;
}
function CreateNotePage(props: CreateNotePageProps): JSX.Element {
  const navigateService = useNavigateService();
  const validationForm1Schema = useMemo(() => yup.object().shape({}), []);
  const formForm1 = useForm<Form1FormData>({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    resolver: yupResolver(validationForm1Schema),
    shouldFocusError: true,
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const { errors: formForm1Errors } = formForm1.formState;

  useEffect(() => {
    formForm1.reset({});
  }, []);

  const handleInfoHeader5 = async () => {
    try {
      navigateService.goBack();
    } catch (e: unknown) {}
  };
  return (
    <Page className={styles.page_container}>
      <Background className={styles.background1} />
      <Box className={styles.container8}>
        <Box className={styles.wrapper8}>
          <Box className={styles.info_header5} onClick={handleInfoHeader5}>
            <Iconssafarichevronbackward className={styles.iconssafarichevronbackward1} />
            <Text className={styles.text5} textType="Text">
              Back
            </Text>
          </Box>
          <Box className={styles.card8}>
            <Text className={styles.text7} textType="Text">
              ノートを作成
            </Text>
            <Box className={styles.form8}>
              <Box className={styles.form_1}>
                <Text className={styles.form_1_name} textType="Text">
                  Form Name
                </Text>
                <Box className={styles.input_1_container}>
                  <Box className={styles.input_1_inner}>
                    <Text className={styles.input_1_label} textType="Text">
                      Label
                    </Text>
                    <Text className={styles.input_1_required} textType="Text">
                      *
                    </Text>
                  </Box>
                  <Controller
                    control={formForm1.control}
                    render={({
                      field: { onChange, onBlur, value },
                      fieldState: { isTouched, error },
                    }: any) => {
                      return (
                        <Input
                          inputStyle={styles.input_1_input}
                          placeholder={"Placeholder"}
                          className={styles.input_1}
                          onChange={onChange}
                          value={value}
                        />
                      );
                    }}
                    name="input_1"
                  />
                  <Box className={styles.input_1_error_message_container}>
                    <Text className={styles.input_1_error_message_text} textType="Text">
                      Error Message
                    </Text>
                  </Box>
                </Box>
                <Box className={styles.input_2_container}>
                  <Box className={styles.input_2_inner}>
                    <Text className={styles.input_2_label} textType="Text">
                      Label
                    </Text>
                    <Text className={styles.input_2_required} textType="Text">
                      *
                    </Text>
                  </Box>
                  <Controller
                    control={formForm1.control}
                    render={({
                      field: { onChange, onBlur, value },
                      fieldState: { isTouched, error },
                    }: any) => {
                      return (
                        <Input
                          inputStyle={styles.input_2_input}
                          placeholder={"Placeholder"}
                          className={styles.input_2}
                          onChange={onChange}
                          value={value}
                        />
                      );
                    }}
                    name="input_2"
                  />
                  <Box className={styles.input_2_error_message_container}>
                    <Text className={styles.input_2_error_message_text} textType="Text">
                      Error Message
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Property1active className={styles.common_button1} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Page>
  );
}
export default CreateNotePage;
