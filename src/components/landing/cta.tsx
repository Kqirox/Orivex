export default function CTASection() {
  return (
    <section className="flex items-center justify-center px-6" style={{ marginTop: '80.01px', marginBottom: '80.01px' }}>
      <div 
        className="relative flex w-full flex-col overflow-hidden bg-gradient-to-r from-blue-600 to-orange-500 text-center shadow-2xl" 
        style={{ 
          maxWidth: '896px',
          height: '432.54px',
          paddingTop: '48px',
          paddingRight: '64px',
          paddingBottom: '64px',
          paddingLeft: '64px',
          borderRadius: '16px',
          gap: '15.4px'
        }}
      >
        {/* Headline */}
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Ready to Transform Your Future?
        </h2>
        
        {/* Subheadline */}
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
          Join thousands of learners earning real rewards while building skills that employers value.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <button 
            className="flex h-10 w-[220px] items-center justify-center gap-2 rounded-lg bg-white px-4 text-center text-sm font-medium leading-5 transition hover:bg-gray-50" 
            style={{ color: '#0070B6' }}
          >
            Start Your Journey Now →
          </button>
          <button className="flex h-10 w-[220px] items-center justify-center gap-2 rounded-lg border-2 border-white/50 bg-white/30 px-4 text-center text-sm font-medium leading-5 text-white backdrop-blur-md transition hover:bg-white/40">
            Explore Courses
          </button>
        </div>
        
        {/* Divider */}
        <div className="mx-auto h-[1px] w-full max-w-3xl bg-white/25" />
        
        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
          <div className="space-y-1">
            <div className="text-3xl font-bold text-white sm:text-4xl">50K+</div>
            <div className="text-xs text-white/80 sm:text-sm">Active Learners</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-bold text-white sm:text-4xl">45+</div>
            <div className="text-xs text-white/80 sm:text-sm">Countries</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-bold text-white sm:text-4xl">$2M+</div>
            <div className="text-xs text-white/80 sm:text-sm">Paid Out</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-bold text-white sm:text-4xl">4.8★</div>
            <div className="text-xs text-white/80 sm:text-sm">Avg Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}
