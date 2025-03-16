import './Background.css';

interface BackgroundProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}
export default function Background({ variant = 'primary', children } : BackgroundProps) {
  return (
    <div className={`background-${variant}`}>
      {children}
    </div>
  )
}
