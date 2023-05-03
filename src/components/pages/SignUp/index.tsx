/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo, useEffect } from "react";
import { DefaultPageProps } from "@interfaces/page";
import get from "lodash/get";
import Background from "@components/molecules/Background";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Property1active from "@components/molecules/Property1active";
import { useAuthenticationService } from "@services/authentication";
import { useNavigateService } from "@services/navigate";
import { Page, Box, Text, Input, Toast } from "@jitera/jitera-web-ui-library";
import styles from "./styles.module.css";
type SignUpPageProps = DefaultPageProps & {
  pageName?: string;
  className?: string;
};
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Form1FormData {
  email_input: string;
  password_input: string;
  password_confirmation_input: string;
}
function SignUpPage(props: SignUpPageProps): JSX.Element {
  const authenticationService = useAuthenticationService();
  const navigateService = useNavigateService();
  const validationForm1Schema = useMemo(
    () =>
      yup.object().shape({
        email_input: yup.string().email().required("email_input is a required field"),
        password_input: yup.string().required("password_input is a required field"),
        password_confirmation_input: yup
          .string()
          .required("password_confirmation_input is a required field"),
      }),
    []
  );
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

  const handleOnPressCommonButton1 = async (values?: Form1FormData) => {
    try {
      await authenticationService.signupWithEmail("users", {
        email: "[text]",
        password: get(values, "password_input", ""),
      });
      navigateService.navigate("/home");
    } catch (e: unknown) {
      Toast.error("サインアップに失敗しました。" || "");
    }
  };
  const handleText9 = async (values?: Form1FormData) => {
    try {
      navigateService.navigate("/login");
    } catch (e: unknown) {}
  };
  return (
    <Page className={styles.page_container}>
      <Box className={styles.container9}>
        <Background className={styles.background1} />
        <Box className={styles.wrapper9}>
          <Text className={styles.text4} textType="Text">
            オーサムノート
          </Text>
          <Box className={styles.card9}>
            <Text className={styles.text6} textType="Text">
              サインアップ
            </Text>
            <Box className={styles.sign_up_form8}>
              <Box className={styles.form_1}>
                <Box className={styles.input_1_container}>
                  <Box className={styles.input_1_inner}>
                    <Text className={styles.input_1_label} textType="Text">
                      メールアドレス
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
                          inputStyle={styles.email_input_input}
                          placeholder={"メールアドレスを入力してください"}
                          className={styles.email_input}
                          onChange={onChange}
                          value={value}
                        />
                      );
                    }}
                    name="email_input"
                  />
                  <Box className={styles.input_1_error_message_container}>
                    <Text className={styles.input_1_error_message_text} textType="Text">
                      {get(formForm1Errors, "email_input.message")}
                    </Text>
                  </Box>
                </Box>
                <Box className={styles.input_2_container}>
                  <Box className={styles.input_2_inner}>
                    <Text className={styles.input_2_label} textType="Text">
                      パスワード
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
                          inputStyle={styles.password_input_input}
                          isPasswordField
                          placeholder={"パスワードを入力してください"}
                          className={styles.password_input}
                          onChange={onChange}
                          value={value}
                        />
                      );
                    }}
                    name="password_input"
                  />
                  <Box className={styles.input_2_error_message_container}>
                    <Text className={styles.input_2_error_message_text} textType="Text">
                      {get(formForm1Errors, "password_input.message")}
                    </Text>
                  </Box>
                  <Box className={styles.box_2}>
                    <Box className={styles.box_3}>
                      <Text className={styles.text_10} textType="Text">
                        パスワード（確認）
                      </Text>
                      <Text className={styles.text_0} textType="Text">
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
                            inputStyle={styles.password_confirmation_input_input}
                            isPasswordField
                            placeholder={"パスワードを入力してください"}
                            className={styles.password_confirmation_input}
                            onChange={onChange}
                            value={value}
                          />
                        );
                      }}
                      name="password_confirmation_input"
                    />
                    <Box className={styles.box_4}>
                      <Text className={styles.text_2} textType="Text">
                        {get(formForm1Errors, "password_confirmation_input.message")}
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Text className={styles.text8} textType="Text">
                  登録することにより、プライバシーポリシーと会員規約に同意したことになります。
                </Text>
                <Property1active
                  className={styles.common_button1}
                  label="サインアップ"
                  onPress={formForm1.handleSubmit(handleOnPressCommonButton1)}
                />
              </Box>
            </Box>
            <Text
              className={styles.text9}
              textType="Text"
              onClick={formForm1.handleSubmit(handleText9)}
            >
              すでにメンバーの方はこちらからログインできます。
            </Text>
          </Box>
        </Box>
      </Box>
    </Page>
  );
}
export default SignUpPage;
