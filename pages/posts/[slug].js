
// import Moment from "react-moment";
import Head from 'next/head'
import { fetchAPI } from "../../lib/api";
import Link from "next/link";
import Post from "../../components/Post";
import { useRouter } from 'next/router'
import Nav from '../../components/nav';

const post = ({ post }) => {
    // console.log(props);

    const router = useRouter();

    if (router.isFallback) {
        return <h1>Loading....</h1>
    }

    return (
        < div>
            <Head>
                <title>{post.title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <Link href='/'>Go Back</Link> */}
            <Post post={post} />
        </div >
    );
};

// export async function getStaticPaths() {
//     // const posts = await fetchAPI("/posts");

//     return {
//         paths: [],
//         fallback: true,
//     };
// }

export async function getStaticPaths() {
    const posts = await fetchAPI("/posts");

    return {
        paths: posts.map((post) => ({
            params: {
                slug: post.slug,
            },
        })),
        fallback: true,
    };
}


export async function getStaticProps({ params }) {
    const posts = await fetchAPI(
        `/posts?slug=${params.slug}`
    );
    const categories = await fetchAPI("/categories");
    return {
        props: { post: posts[0] },
        revalidate: 1,
    };
}

export default post;
