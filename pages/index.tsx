import Head from "next/head";
import Image from "next/image";
import { ThemeProvider } from "styled-components";
import ButtonComponent from "../src/components/Button";
import { theme } from "../src/utils";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <ButtonComponent variant="primary">Hello</ButtonComponent>
    </ThemeProvider>
  );
}
