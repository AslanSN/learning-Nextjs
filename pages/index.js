import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import { getSortedPostsData } from '../lib/posts'

export const getStaticProps = async () => {
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData,
		},
	}
}

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					I am Alan Staub Negro, you can call me <b>Aslan</b>. I am a Full Stack
					Developer 🖥️, Front End Strong 🖌️, that is currently learning some
					NextJS framework here! I am also writing ✒️ a book of phillosophy 📖
					and wellness 🧘‍♂️. You can contact me on{' '}
					<a href='https://www.linkedin.com/in/alanstaubnegro/'>Linkedin</a>.
				</p>
				<p>
					(This is a sample website - you’ll be building a site like this on{' '}
					<a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
				</p>
			</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>{title}</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date}/>
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	)
}
