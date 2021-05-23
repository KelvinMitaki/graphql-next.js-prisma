import Head from "next/head";
import Image from "next/image";
import ButtonComponent from "../src/components/Button";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    // @ts-ignore
    <ButtonComponent variant="primary" color="tomato" bg="blue">
      Hello
    </ButtonComponent>
  );
}
