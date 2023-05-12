import Head from 'next/head'
import { siteMeta } from 'lib/constans'
import { useRouter } from 'next/router'

const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } = siteMeta

import siteImg from 'images/ogp.jpg'


// export default function Meta({ title, description, image }) {
export default function Meta({ pageTitle, pageDesc, pageImg, pageImgW, pageImgH }) {
    // ページのタイトル
    const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle
    // ページの説明文
    const desc = pageDesc ?? siteDesc
    // ページのURL
    const router = useRouter()
    const url = `${siteUrl}${router.asPath}`

    // ogp画像
    const img = pageImg || siteImg.src
    const imgW = pageImgW || siteImg.width
    const imgH = pageImgH || siteImg.height
    const imgUrl = img.startsWith('http') ? img : `${siteUrl}${img}`

    return (
        <Head>
            {/* <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={description} />
            <meta name="og:title" content={title} />
            <meta name="og:description" content={description} />
            <meta name="og:image" content={image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@CUBE" />
            <meta name="twitter:creator" content="@CUBE" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <title>{title}</title> */}
            {/* <title>{pageTitle} | {siteTitle}</title> */}
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta name='description' content={desc} />
            <meta property="og:description" content={desc} />
            <link rel='canonical' href={url} />
            <meta property="og:url" content={url} />

            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:type" content={siteType} />
            <meta property="og:locale" content={siteLocale} />

            <link rel='icon' href={siteIcon} />
            <link rel='apple-touch-icon' href={siteIcon} />

            <meta property="og:image" content={imgUrl} />
            <meta property="og:image:width" content={imgW} />
            <meta property="og:image:height" content={imgH} />
            <meta name="twitter:card" content="summary_large_image" />
                    

        </Head>
    )
}