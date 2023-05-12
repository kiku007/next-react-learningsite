// import { client } from "lib/api";
import Container from "@/components/container"
import PostHeader from "@/components/post-header"
import { getPostBySlug } from "lib/api"
import Image from "next/image"
import PostBody from "@/components/post-body"
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from "@/components/two-column"
import ConvertBody from "@/components/convert-body"
import PostCategories from "@/components/post-categories"

export default function Schedule({
    title,
    publish,
    content,
    eyecatch,
    categories,
}) {
    return (
        <Container>
            <article>
                <PostHeader title={title} subtitle="Blog Article" publish={publish} />
                <figure>
                    <Image
                        src={eyecatch.url}
                        alt=""
                        layout="responsive"
                        width={eyecatch.width}
                        height={eyecatch.height}
                        sizes="(min-width: 1152px) 1152px, 100vw"
                        priority
                    />
                </figure>
                <TwoColumn>
                    <TwoColumnMain>
                        {/* <PostBody>{content}</PostBody> */}
                        <PostBody>
                            {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
                            <ConvertBody contentHTML={content} />
                        </PostBody>
                    </TwoColumnMain>
                    <TwoColumnSidebar>
                        <PostCategories categories={categories} />
                    </TwoColumnSidebar>
                </TwoColumn>
            </article>
        </Container>
    )  
}

export async function getStaticProps() {
    // const resPromise = client.get({
    //     endpoint: 'blogs',
    // })
    // resPromise
    //     .then((res) => console.log(res))
    //     .catch((err) => { console.log(err) })
    // try {
    //     const res = await resPromise
    //     console.log(res)
    // } catch (err) {
    //     console.log(err)
    // }

    // return {
    //     props: {},
    // }

    const slug = 'schedule'

    const post = await getPostBySlug(slug)

    return {
        props: {
            title: post.title,
            publish: post.publishDate,
            content: post.content,
            eyecatch: post.eyecatch,
            categories: post.categories,
        },
    }    
}

