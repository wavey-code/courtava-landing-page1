'use client';

export default function Home() {
  const handleEarlyAccess = () => {
    window.open('https://form.typeform.com/to/jXf0uH8t', '_blank');
  };

  // Convert RGB to hex
  const primaryGreen = '#69BB28'; // rgb(0.4117647111415863, 0.7333333492279053, 0.1568627506494522)
  const grayBg = '#D9D9D9'; // rgb(0.8509804010391235, 0.8509804010391235, 0.8509804010391235)

  return (
    <main className="min-h-screen bg-white w-full max-w-[1728px] mx-auto">
      {/* Header */}
      <header className="flex items-center px-4 md:px-[131px] pt-6 md:pt-[41px] pb-4">
        {/* Logo */}
        <div className="w-20 h-20 md:w-[123px] md:h-[123px] flex items-center justify-center flex-shrink-0">
          <img
            src="/logo.png"
            alt="Courtava Logo"
            width={123}
            height={123}
            className="w-full h-full object-contain"
            onError={(e) => {
              // Fallback to SVG if PNG doesn't exist
              const target = e.target as HTMLImageElement;
              if (target.src.includes('logo.png')) {
                target.src = '/logo.svg';
              }
            }}
          />
        </div>
        
        <div className="flex-1 flex items-center ml-3 md:ml-4">
          <h1 className="text-2xl md:text-5xl font-bold text-black">courtava</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 md:px-8 py-8 md:py-12 text-center">
        <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold text-black mb-4 max-w-4xl mx-auto leading-tight px-2">
          Find real pickup basketball anywhere.
        </h2>
        <p className="text-base md:text-xl text-black mb-6 md:mb-8 max-w-2xl mx-auto px-2">
          Track runs. Discover courts. Play with real hoopers — not guesswork.
        </p>
        
        <button
          onClick={handleEarlyAccess}
          className="bg-[#69BB28] text-white px-8 md:px-16 py-3 md:py-4 rounded-[100px] text-base md:text-lg font-medium hover:bg-[#5ba020] transition-colors mb-8 w-full max-w-xs mx-auto"
        >
          I want early access
        </button>
      </section>

      {/* Problem Section */}
      <section className="px-4 md:px-[131px] py-8 md:py-12">
        <h3 className="text-2xl md:text-4xl font-bold text-black text-center mb-8 md:mb-12 max-w-2xl mx-auto px-2">
          Pickup basketball is harder than it should be.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Dead Courts Card */}
          <div className="border-[3px] border-[#69BB28] rounded-[50px] h-[250px] md:h-[300px] flex flex-col justify-end hover:shadow-lg transition-shadow cursor-pointer relative overflow-hidden">
            <img 
              src="/lonely.jpg.png" 
              alt="Dead basketball court"
              className="absolute inset-0 w-full h-full object-cover rounded-[50px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-[50px]" />
            <div className="relative z-10 p-6 md:p-8">
              <h4 className="text-lg md:text-2xl font-bold text-white drop-shadow-lg">Dead Courts</h4>
            </div>
          </div>

          {/* Unorganized runs Card */}
          <div className="border-[3px] border-[#69BB28] rounded-[50px] h-[250px] md:h-[300px] flex flex-col justify-end hover:shadow-lg transition-shadow cursor-pointer relative overflow-hidden">
            <img 
              src="/unorganized.jpg.png" 
              alt="Unorganized basketball runs"
              className="absolute inset-0 w-full h-full object-cover rounded-[50px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-[50px]" />
            <div className="relative z-10 p-6 md:p-8">
              <h4 className="text-lg md:text-2xl font-bold text-white drop-shadow-lg">Unorganized runs</h4>
            </div>
          </div>

          {/* Unresponsive group chats Card */}
          <div className="border-[3px] border-[#69BB28] rounded-[50px] h-[250px] md:h-[300px] flex flex-col justify-end hover:shadow-lg transition-shadow cursor-pointer relative overflow-hidden">
            <img 
              src="/dead-court.png.png" 
              alt="Basketball player with phone on court"
              className="absolute inset-0 w-full h-full object-cover rounded-[50px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-[50px]" />
            <div className="relative z-10 p-6 md:p-8">
              <h4 className="text-lg md:text-2xl font-bold text-white drop-shadow-lg">Unresponsive group chats</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Divider Heading Section */}
      <section className="px-4 md:px-[131px] py-8 md:py-12">
        <p className="text-2xl md:text-4xl font-bold text-black text-center px-2">
          Courtava fixes that...
        </p>
      </section>

      {/* Solution Section */}
      <section className="px-4 md:px-[131px] py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Find courts Card */}
          <div className="border-[3px] border-[#69BB28] rounded-[50px] h-[250px] md:h-[300px] flex flex-col justify-end hover:shadow-lg transition-shadow cursor-pointer relative overflow-hidden group">
            <img 
              src="/find-courts-updated.png.png" 
              alt="Find courts near you"
              className="absolute inset-0 w-full h-full object-cover rounded-[50px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-[50px]" />
            <div className="relative z-10 p-6 md:p-8">
              <h4 className="text-lg md:text-2xl font-bold text-white drop-shadow-lg group-hover:text-[#69BB28] transition-colors">
                Find courts near you.
              </h4>
            </div>
          </div>

          {/* See when people are running games Card */}
          <div className="border-[3px] border-[#69BB28] rounded-[50px] h-[250px] md:h-[300px] flex flex-col justify-end hover:shadow-lg transition-shadow cursor-pointer relative overflow-hidden group">
            <img 
              src="/court-runs.jpg.png" 
              alt="See when people are running games"
              className="absolute inset-0 w-full h-full object-cover rounded-[50px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-[50px]" />
            <div className="relative z-10 p-6 md:p-8">
              <h4 className="text-lg md:text-2xl font-bold text-white drop-shadow-lg group-hover:text-[#69BB28] transition-colors">
                See when people are running games.
              </h4>
            </div>
          </div>

          {/* Track your games Card */}
          <div className="border-[3px] border-[#69BB28] rounded-[50px] h-[250px] md:h-[300px] flex flex-col justify-end hover:shadow-lg transition-shadow cursor-pointer relative overflow-hidden group">
            <img 
              src="/community.png.png" 
              alt="Track your games and connect with real hoopers"
              className="absolute inset-0 w-full h-full object-cover rounded-[50px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-[50px]" />
            <div className="relative z-10 p-6 md:p-8">
              <h4 className="text-lg md:text-2xl font-bold text-white drop-shadow-lg group-hover:text-[#69BB28] transition-colors">
                Track your games/connect with real hoopers
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 md:px-8 pt-6 md:pt-8 pb-8 md:pb-12 text-center">
        <h3 className="text-2xl md:text-4xl font-bold text-black mb-4 max-w-3xl mx-auto px-2">
          Built for hoopers who take runs seriously.
        </h3>
        <p className="text-base md:text-lg text-black mb-6 px-2">
          Be first. Shape the app. Get early access
        </p>
        
        <button
          onClick={handleEarlyAccess}
          className="bg-[#69BB28] text-white px-8 md:px-16 py-3 md:py-4 rounded-[100px] text-base md:text-lg font-medium hover:bg-[#5ba020] transition-colors w-full max-w-xs mx-auto"
        >
          I want early access
        </button>
      </section>
    </main>
  );
}
