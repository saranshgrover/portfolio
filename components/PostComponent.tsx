import React, { ReactElement } from 'react'
import { motion } from 'framer-motion'
import ChakraUIRenderer from '../config/ChakraMdRenderer'
import ReactMarkdown from 'react-markdown'
import {
	Image,
	Container,
	Box,
	VStack,
	Heading,
	Text,
	useColorModeValue,
	TagLeftIcon,
	TagLabel,
	Button,
	Stack,
	Tag,
} from '@chakra-ui/react'
import { Post } from '../content/posts'
interface Props {
	post: Post
	md: string
}

const MotionImage = motion.custom(Image)
const MotionButton = motion.custom(Button)
const MotionTag = motion.custom(Tag)

export default function PostComponent({ post, md }: Props): ReactElement {
	const iconColor = useColorModeValue('teal.600', 'teal.200')
	return (
		<VStack
			maxW='100vw'
			justify='center'
			spacing={4}
			shouldWrapChildren
			align='center'
			m={{ base: '2rem', md: '4rem' }}
			gap='2rem'
		>
			{post.image && (
				<Box h={['30vh', '50vh']}>
					<MotionImage
						h={['30vh', '50vh']}
						whileHover={{ scale: 1.1 }}
						objectFit='cover'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						src={post.image}
						layoutId={`${post.id}-image`}
						cursor='pointer'
					/>
				</Box>
			)}
			<Container ml='auto' maxW='2xl' centerContent>
				<Heading mb='2rem' as='a' size='3xl'>
					{post.title}
				</Heading>
				<Stack
					direction={{ base: 'column' }}
					justify={{ base: 'center' }}
					align='center'
					mb={'2em'}
					spacing='2em'
				>
					<Stack maxW='100vw' direction='row' spacing={{ base: '0.5em', md: '2em' }} align='center'>
						{post.tags.map((tag, index) => (
							<>
								{
									<MotionTag
										whileHover={{ scale: 1.2 }}
										variant='subtle'
										colorScheme='cyan'
										key={index}
										aria-label={tag.name}
									>
										<TagLeftIcon boxSize='20px' as={tag.icon} />
										<TagLabel>{tag.name}</TagLabel>
									</MotionTag>
								}
							</>
						))}
					</Stack>
				</Stack>

				<Text fontSize='xl'>{post.description}</Text>
			</Container>
			<Container maxW='3xl'>
				<ReactMarkdown components={ChakraUIRenderer()} children={md} />
			</Container>
		</VStack>
	)
}