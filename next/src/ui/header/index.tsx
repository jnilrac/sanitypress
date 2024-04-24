import getSite from '@/lib/getSite'
import Wrapper from './Wrapper'
import Link from 'next/link'
import CTA from '@/ui/CTA'
import LinkList from './LinkList'

export default async function Header() {
	const { title, menu } = await getSite()

	return (
		<Wrapper className="sticky top-0 z-10 border-b bg-white/90 backdrop-blur">
			<div className="mx-auto max-w-screen-xl p-4">
				<Link className="font-bold" href="/">
					{title}
				</Link>

				<nav className="flex gap-4">
					{menu?.map((item, key) => {
						switch (item._type) {
							case 'link':
								return <CTA className="link" link={item} key={key} />
							case 'link.list':
								return <LinkList {...item} key={key} />
							default:
								return null
						}
					})}
				</nav>
			</div>
		</Wrapper>
	)
}
