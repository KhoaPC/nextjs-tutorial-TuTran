import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Head>
      <title>NextJS | Home</title>
      <meta name="keywords" content="NextJS"/>
    </Head>
      <h1>HOME PAGE</h1>
      <h1>Hello NextJS</h1>
    </>
  );
}
