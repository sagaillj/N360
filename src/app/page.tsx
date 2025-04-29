import Link from 'next/link';
import Image from 'next/image';
import { FaTshirt, FaShieldAlt, FaHardHat, FaExclamationTriangle } from 'react-icons/fa';

interface PathCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  size: 'Small' | 'Medium' | 'Large';
  iconColor: string;
  sizeColor: string;
}

const PathCard = ({ title, description, icon: Icon, href, size, iconColor, sizeColor }: PathCardProps) => {
  const [prefix, suffix] = title.split(': ');
  
  const glowColor = {
    Small: '#FFB800',
    Medium: '#FF6347',
    Large: '#00FF00'
  }[size];
  
  return (
    <Link
      href={href}
      className={`card group hover-shadow relative overflow-hidden rounded-xl border border-border-primary bg-background-secondary p-8 transition-all duration-300 hover:border-transparent hover:shadow-lg hover:shadow-[${glowColor}20]`}
    >
      <div className="flex flex-col items-center text-center relative z-10">
        <div className="flex items-center justify-center h-20 mb-6 relative">
          <Icon className={`${
            size === 'Small' ? 'w-12 h-12' : 
            size === 'Medium' ? 'w-16 h-16' : 
            'w-20 h-20'
          } ${iconColor} transition-transform group-hover:scale-110`} />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/seed_to_oaks_logo_no_words.png"
              alt="Logo"
              width={size === 'Small' ? 16 : size === 'Medium' ? 20 : 24}
              height={size === 'Small' ? 16 : size === 'Medium' ? 20 : 24}
              className="object-contain opacity-90"
            />
          </div>
        </div>
        <span className={`text-xl font-semibold ${sizeColor} mb-3 tracking-wide`}>{size} T-shirt</span>
        <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-text-primary transition-colors">
          <span className="block">{prefix}:</span>
          <span className="block mt-1 text-lg">{suffix}</span>
        </h3>
        <p className="text-text-secondary text-lg group-hover:text-text-primary transition-colors">{description}</p>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background-primary">
      {/* Header Bar with Logo and Admin Button */}
      <header className="w-full bg-background-secondary border-b border-border-primary py-4 relative">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
          <div className="flex-1 flex justify-start">
            <Image
              src="/seed_to_oaks_logo_stacked.png"
              alt="Seed to Oaks Logo"
              width={300}
              height={300}
              className="h-36 w-auto object-contain"
            />
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="flex items-center justify-center gap-3 mb-1">
              <FaExclamationTriangle className="text-yellow-400 w-8 h-8 animate-pulse" />
              <FaHardHat className="text-yellow-400 w-8 h-8" />
              <FaExclamationTriangle className="text-yellow-400 w-8 h-8 animate-pulse" />
            </div>
            <div className="text-white text-3xl font-bold bg-red-500 px-6 py-2 rounded-md transform -rotate-2 shadow-lg">
              {"Backend Prototype"}
            </div>
          </div>
          <Link
            href="/admin/dashboard"
            className="btn btn-ghost text-[#FF4444] hover:text-[#FF4444] text-xl px-7 py-3.5 hover:bg-transparent hover:shadow-lg hover:shadow-[#FF444420] transition-shadow rounded-xl"
          >
            <FaShieldAlt className="inline-block mr-3 text-xl" /> Admin Portal
          </Link>
        </div>
      </header>

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 max-w-4xl mx-auto">
              <span className="block text-white mb-2">Transform Your Community with</span>
              <span className="block text-accent-yellow">Neighborhood 360°</span>
            </h1>
            <p className="subheading text-text-secondary tracking-wide max-w-2xl mx-auto">
              Choose your path and begin the journey of meaningful engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
            <PathCard
              title="Neighborhood 360°: Personal Engagement"
              description="Start your personal journey of community transformation"
              icon={FaTshirt}
              href="/small/dashboard"
              size="Small"
              iconColor="text-accent-yellow"
              sizeColor="text-accent-yellow"
            />
            <PathCard
              title="Neighborhood 360°: Group Outreach"
              description="Join with others to make a collective impact"
              icon={FaTshirt}
              href="/medium/dashboard"
              size="Medium"
              iconColor="text-accent-peach"
              sizeColor="text-accent-peach"
            />
            <PathCard
              title="Neighborhood 360°: Community Impact"
              description="Lead your organization in community transformation"
              icon={FaTshirt}
              href="/large/dashboard"
              size="Large"
              iconColor="text-accent-green"
              sizeColor="text-accent-green"
            />
          </div>
        </div>
      </main>
    </div>
  );
} 