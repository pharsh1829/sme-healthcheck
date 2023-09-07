"use client";
import styles from "./page.module.css";
import {
  Box,
  Container,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Header from "@/app/components/Header";
import { Controller, useForm } from "react-hook-form";
import { FORM_VALIDATIONS } from "./utils/validation";
import axios from "axios";

export default function Home() {
  const { control, handleSubmit, getValues } = useForm();

  const submitForm = async (data: any) => {
    try {
      delete data.reEnterEmail;
      await axios.post("http://192.168.0.107:5000/health-check", data);
    } catch (e) {
      console.log("Error", e);
    }
  };

  const CompanyInformation = () => {
    return (
      <Grid container spacing={8}>
        <Grid item xs={6}>
          <Controller
            control={control}
            name={"company_uen"}
            rules={{ ...FORM_VALIDATIONS.REQUIRED }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                fullWidth
                label="Company UEN"
                onChange={onChange}
                value={value}
                error={!!error}
                helperText={error?.message ?? ""}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name={"company_name"}
            rules={{ ...FORM_VALIDATIONS.REQUIRED }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                fullWidth
                label="Company Name"
                onChange={onChange}
                value={value}
                error={!!error}
                helperText={error?.message ?? ""}
              />
            )}
          />
        </Grid>
      </Grid>
    );
  };

  const ApplicantInformation = () => {
    return (
      <Box display="flex" flexDirection="column" gap={2.5}>
        <Grid container spacing={8}>
          <Grid item xs={6}>
            <Controller
              control={control}
              name={"applicant_name"}
              rules={{ ...FORM_VALIDATIONS.REQUIRED }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  fullWidth
                  label="Full Name"
                  onChange={onChange}
                  value={value}
                  error={!!error}
                  helperText={error?.message ?? ""}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              control={control}
              name={"applicant_position"}
              rules={{ ...FORM_VALIDATIONS.REQUIRED }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  fullWidth
                  label="Position within company"
                  onChange={onChange}
                  value={value}
                  error={!!error}
                  helperText={error?.message ?? ""}
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid container spacing={8}>
          <Grid item xs={6}>
            <Controller
              control={control}
              name={"applicant_email"}
              rules={{ ...FORM_VALIDATIONS.REQUIRED_EMAIL }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  fullWidth
                  label="Email Address"
                  onChange={onChange}
                  value={value}
                  error={!!error}
                  helperText={error?.message ?? ""}
                  type="email"
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              control={control}
              name={"reEnterEmail"}
              rules={{
                ...FORM_VALIDATIONS.REQUIRED_EMAIL,
                validate: (value: string) =>
                  getValues().applicant_email === value ||
                  "Re-enter Email Address should be same as your Email Address",
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  fullWidth
                  label="Re-enter Email Address"
                  onChange={onChange}
                  value={value}
                  error={!!error}
                  helperText={error?.message ?? ""}
                  type="email"
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid container spacing={8}>
          <Grid item xs={6}>
            <Controller
              control={control}
              name={"applicant_mobile"}
              rules={{ ...FORM_VALIDATIONS.REQUIRED }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  fullWidth
                  label="Mobile Number"
                  onChange={onChange}
                  value={value}
                  error={!!error}
                  helperText={error?.message ?? ""}
                  type="number"
                />
              )}
            />
          </Grid>
        </Grid>
      </Box>
    );
  };

  const UploadDocuments = () => {
    return (
      <Box>
        <Button>Click to upload</Button>
      </Box>
    );
  };

  const TermsAndConditions = () => {
    return (
      <Box>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="By ticking, you are confirming that you have understood and are agreeing to the details mentioned"
        />
      </Box>
    );
  };

  const steps = [
    { label: "Company Information", component: <CompanyInformation /> },
    { label: "Applicant Information", component: <ApplicantInformation /> },
    { label: "Upload Documents", component: <UploadDocuments /> },
    { label: "Terms & Conditions", component: <TermsAndConditions /> },
  ];

  return (
    <Box>
      <Header />
      <Container>
        <Box className={styles.formSection}>
          <form onSubmit={handleSubmit(submitForm)}>
            <Stepper orientation="vertical">
              {steps.map(
                ({ label, component }: { label: string; component?: any }) => {
                  return (
                    <Step key={label} expanded={true}>
                      <StepLabel>
                        <Box className={styles.formSectionName}>{label}</Box>
                      </StepLabel>
                      <StepContent className={styles.mt3}>
                        {component}
                      </StepContent>
                    </Step>
                  );
                }
              )}
            </Stepper>
            <Box mt={2} display="flex" justifyContent="end">
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Container>

      <Box className={styles.footer} />
    </Box>
  );
}
