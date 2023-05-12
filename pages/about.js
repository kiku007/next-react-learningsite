import Contact from "@/components/contact";
import Container from "@/components/container";
import Hero from "@/components/hero";
import PostBody from "@/components/post-body";
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from "@/components/two-column";
import Image from "next/image";
import eyecatch from "images/about.jpg";
import Head from "next/head";
import Meta from "@/components/meta";


export default function About () {
    return (
        <Container>
            {/* <Head>
                <title>アバウト</title>
            </Head> */}
            <Meta 
                pageTitle="アバウト" 
                pageDesc="About development activities" 
                pageImg={eyecatch.src}
                pageImgW={eyecatch.width}
                pageImgH={eyecatch.height}
            />
            <Hero
                title="About"
                subtitle="About development activities"
            />

            <figure>
                <Image 
                    src={ eyecatch }
                    alt=""
                    layout="responsive"
                    sizes="(min-width: 1152px) 1152px, 100vw"
                    priority
                    placeholder="blur"
                />
            </figure>

            <TwoColumn>
                <TwoColumnMain>
                    <PostBody>
                        <p>
                            Cubeが得意とする分野はモノづくりです。3次元から2次元の造形、プログラミングやデザインなど、モノづくりを通して、自分の考えを形にすることが好きです。さまざまな技術を組み合わせることで社会と環境をより良くすることを目指しています。
                        </p>
                        <h2>モノづくりで目指していること</h2>
                        <p>
                            Cubeが得意とする分野はモノづくりです。3次元から2次元の造形、プログラミングやデザインなど、モノづくりを通して、自分の考えを形にすることが好きです。さまざまな技術を組み合わせることで社会と環境をより良くすることを目指しています。
                        </p>
                        <p>
                            Cubeが得意とする分野はモノづくりです。3次元から2次元の造形、プログラミングやデザインなど、モノづくりを通して、自分の考えを形にすることが好きです。さまざまな技術を組み合わせることで社会と環境をより良くすることを目指しています。
                        </p>
                        <h3>モノづくりで目指していること</h3>
                        <p>
                            Cubeが得意とする分野はモノづくりです。3次元から2次元の造形、プログラミングやデザインなど、モノづくりを通して、自分の考えを形にすることが好きです。さまざまな技術を組み合わせることで社会と環境をより良くすることを目指しています。
                        </p>
                    </PostBody>
                </TwoColumnMain>
                <TwoColumnSidebar>
                    <Contact />
                </TwoColumnSidebar>
            </TwoColumn>
        </Container>
    )
}
