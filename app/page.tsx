'use client';

export default function Home() {
  const handleEarlyAccess = () => {
    // Handle early access submission
    // You can integrate with an API or form submission service here
    alert('Thank you for your interest in Courtava! We\'ll be in touch soon.');
  };

  // Convert RGB to hex
  const primaryGreen = '#69BB28'; // rgb(0.4117647111415863, 0.7333333492279053, 0.1568627506494522)
  const grayBg = '#D9D9D9'; // rgb(0.8509804010391235, 0.8509804010391235, 0.8509804010391235)

  return (
    <main className="min-h-screen bg-white w-full max-w-[1728px] mx-auto">
      {/* Header */}
      <header className="flex items-center justify-between px-8 md:px-[131px] pt-[41px] pb-4">
        {/* Logo placeholder - you can add actual logo image here */}
        <div className="w-[123px] h-[123px] bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-xs text-gray-500">Logo</span>
        </div>
        
        <div className="flex-1 flex items-center ml-4">
          <h1 className="text-4xl md:text-5xl font-bold text-black">courtava</h1>
        </div>

        <button
          onClick={handleEarlyAccess}
          className="bg-[#69BB28] text-white px-8 py-3 rounded-[50px] font-medium hover:bg-[#5ba020] transition-colors whitespace-nowrap"
        >
          I want early access
        </button>
      </header>

      {/* Hero Section */}
      <section className="px-4 md:px-8 py-16 text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6 max-w-4xl mx-auto leading-tight">
          Find real pickup basketball anywhere.
        </h2>
        <p className="text-lg md:text-xl text-black mb-12 max-w-2xl mx-auto">
          Track runs. Discover courts. Play with real hoopers — not guesswork.
        </p>
        
        <button
          onClick={handleEarlyAccess}
          className="bg-[#69BB28] text-white px-16 py-4 rounded-[100px] text-lg font-medium hover:bg-[#5ba020] transition-colors mb-16"
        >
          I want early access
        </button>
      </section>

      {/* Problem Section */}
      <section className="px-4 md:px-[131px] py-12">
        <h3 className="text-4xl md:text-5xl font-bold text-black text-center mb-16 max-w-2xl mx-auto">
          Pickup basketball is harder than it should be.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Dead Courts Card */}
          <div className="bg-[#D9D9D9] border-[3px] border-[#69BB28] rounded-[50px] p-8 h-[400px] flex flex-col justify-end hover:shadow-lg transition-shadow cursor-pointer">
            <h4 className="text-3xl md:text-4xl font-bold text-black">Dead Courts</h4>
          </div>

          {/* Unorganized runs Card */}
          <div className="bg-[#D9D9D9] border-[3px] border-[#69BB28] rounded-[50px] p-8 h-[400px] flex flex-col justify-end hover:shadow-lg transition-shadow cursor-pointer">
            <h4 className="text-3xl md:text-4xl font-bold text-black">Unorganized runs</h4>
          </div>

          {/* Unresponsive group chats Card */}
          <div className="bg-[#D9D9D9] border-[3px] border-[#69BB28] rounded-[50px] p-8 h-[400px] flex flex-col justify-end hover:shadow-lg transition-shadow cursor-pointer">
            <h4 className="text-3xl md:text-4xl font-bold text-black">Unresponsive group chats</h4>
          </div>
        </div>

        <p className="text-4xl md:text-5xl font-bold text-black text-center mb-16">
          Courtava fixes that...
        </p>
      </section>

      {/* Solution Section */}
      <section className="px-4 md:px-[131px] py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Find courts Card */}
          <div className="bg-[#D9D9D9] border-[3px] border-[#69BB28] rounded-[50px] p-8 h-[400px] flex flex-col justify-end hover:shadow-lg transition-shadow cursor-pointer group">
            <h4 className="text-3xl md:text-4xl font-bold text-black group-hover:text-[#69BB28] transition-colors">
              Find courts near you.
            </h4>
          </div>

          {/* See when people are running games Card */}
          <div className="bg-[#D9D9D9] border-[3px] border-[#69BB28] rounded-[50px] p-8 h-[400px] flex flex-col justify-end hover:shadow-lg transition-shadow cursor-pointer group">
            <h4 className="text-3xl md:text-4xl font-bold text-black group-hover:text-[#69BB28] transition-colors">
              See when people are running games.
            </h4>
          </div>

          {/* Track your games Card */}
          <div className="bg-[#D9D9D9] border-[3px] border-[#69BB28] rounded-[50px] p-8 h-[400px] flex flex-col justify-end hover:shadow-lg transition-shadow cursor-pointer group">
            <h4 className="text-3xl md:text-4xl font-bold text-black group-hover:text-[#69BB28] transition-colors">
              Track your games/connect with real hoopers
            </h4>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 md:px-8 py-16 text-center">
        <h3 className="text-4xl md:text-5xl font-bold text-black mb-6 max-w-3xl mx-auto">
          Built for hoopers who takes runs seriously.
        </h3>
        <p className="text-lg text-black mb-8">
          Be first. Shape the app. Get early access
        </p>
        
        <button
          onClick={handleEarlyAccess}
          className="bg-[#69BB28] text-white px-16 py-4 rounded-[100px] text-lg font-medium hover:bg-[#5ba020] transition-colors"
        >
          I want early access
        </button>
      </section>
    </main>
  );
}
