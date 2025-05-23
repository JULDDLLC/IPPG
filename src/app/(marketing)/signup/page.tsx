import { AuthForm } from '@/components/auth/auth-form';

export default function SignupPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[url('/hexagon-texture.png')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-background/50 to-background" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <AuthForm type="signup" />
        </div>
      </div>
    </div>
  );
}