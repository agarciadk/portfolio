import Background from '../Background/Background';
import './Section.css';
import { Element } from 'react-scroll';

interface SectionProps {
  id: string;
  className?: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}
export default function Section({ id, className, variant = 'primary', children }: SectionProps) {
  return (
    <Element name={id}>
      <Background variant={variant}>
        <section className={className}>
          {children}
        </section>
      </Background>
    </Element>
  )
}