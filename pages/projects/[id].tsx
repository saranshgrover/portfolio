import React, { ReactElement } from 'react'
import { useRouter } from 'next/router'
import content from '../../content/projects/index'
import { IntersectionObserver } from '../../contexts/IntersectionObserver'
import ScaleBox from '../../components/ScaleBox'
import ProjectInfo from '../../components/ProjectInfo'
import { GetStaticProps } from 'next'
import {getMdFor} from '../../logic/markdown'

interface Props {
	md: string
}

export default function index({ md }: Props): ReactElement {
	const router = useRouter()
	const { id } = router.query
	const project = React.useMemo(() => {
		return content.projects.find((project) => project.id === id)
	}, [id])
	if (!project) return <></>
	return (
		<IntersectionObserver>
			<ScaleBox delayOrder={0}>
				<ProjectInfo project={project} md={md} />
			</ScaleBox>
		</IntersectionObserver>
	)
}

export const getStaticProps: GetStaticProps = async (context) => {
	const md = getMdFor(context!.params!.id as string)
	if(!md) return {
		props: {},
		notFound: true
	}
	return {
		props: {
			md
		},
	}
}

export async function getStaticPaths() {
	return {
		paths: content.projects.map((project) => ({ params: { id: project.id } })),
		fallback: false,
	}
}
