"use client";
import {
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from "@mantine/core";
import image from "../../public/image4.jpg";
import Image from "next/image";
import Link from "next/link";
import classes from "./HeroBullets.module.css";
export default function Home() {
  return (

    <main className=" bg-white">
      <Container size="md" className=" bg-white">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Add Audio to <br /> Video
            </Title>
            <Text c="dimmed" mt="md">
              Add music, sound effects, and other audio tracks to your videos
              online
            </Text>

            <Group mt={30}>
                <Link
                  href="/editor"
                  className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
                >
                  <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                   Start Editing! 🎥
                  </span>
                
              </Link>
            </Group>
          </div>
          <Image src={image} className={classes.image} alt="image" />
        </div>
      </Container>
    </main>
  );
}
