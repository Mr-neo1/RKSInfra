import Link from 'next/link'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <Section className="pt-32 min-h-screen flex items-center">
      <Container>
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Page Not Found</h2>
          <p className="text-xl text-medium-gray mb-8 max-w-2xl mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button href="/" variant="primary" size="lg">
            Go Back Home
          </Button>
        </div>
      </Container>
    </Section>
  )
}

