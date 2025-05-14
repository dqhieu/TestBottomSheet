import { useEffect, useRef } from 'react';

interface BottomSheetProps {
  isShort?: boolean;
}

export default function BottomSheet({ isShort = false }: BottomSheetProps) {
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reset body styles to ensure proper height calculation
    document.body.style.margin = '0';
    document.body.style.minHeight = 'unset';
    document.body.style.height = 'auto';
    document.documentElement.style.height = 'auto';
    
    // Force reflow
    if (sheetRef.current) {
      const height = sheetRef.current.offsetHeight;
      document.body.style.height = `${height}px`;
      document.documentElement.style.height = `${height}px`;
    }
  }, []);

  const handleGotItClick = async () => {
    console.log('Got It clicked');
    const data = {
      "method": "close"
    };
    window.webkit.messageHandlers.ContainerModule.postMessage(JSON.stringify(data));
  };

  const handleAirportClick = (airport: string) => {
    console.log(`Airport selected: ${airport}`);
    window.location.href = 'https://www.grab.com';
  };

  // Define all country data
  const countryData = [
    {
      country: "Indonesia",
      emoji: "🇮🇩",
      airports: [
        "Soekarno-Hatta (CGK)",
        "Yogyakarta (JOG)",
        "Denpasar (DPS)",
        "Surabaya (SUB)"
      ]
    },
    {
      country: "Malaysia",
      emoji: "🇲🇾",
      airports: [
        "Kuala Lumpur International (KUL)"
      ]
    },
    {
      country: "Singapore",
      emoji: "🇸🇬",
      airports: [
        "Singapore Changi (SIN)",
        "Seletar (XSP)"
      ]
    },
    {
      country: "Vietnam",
      emoji: "🇻🇳",
      airports: [
        "Tan Son Nhat International (SGN)",
        "Noi Bai International (HAN)",
        "Da Nang International (DAD)",
        "Phu Quoc International (PQC)"
      ]
    },
    {
      country: "Philippines",
      emoji: "🇵🇭",
      airports: [
        "Ninoy Aquino International (MNL)",
        "Mactan-Cebu International (CEB)",
        "Clark International (CRK)",
        "Davao International (DVO)",
        "Iloilo International (ILO)"
      ]
    }
  ];

  // Display only first country if isShort is true, otherwise display all countries
  const countriesToDisplay = isShort ? [countryData[0]] : countryData;

  return (
    <div ref={sheetRef} className="w-full">
      <div className="fixed inset-0 bg-black/50 bg-white" />
      <div className="relative z-50">
        <div className="bg-white w-full mx-auto rounded-t-3xl flex flex-col h-full">
          
          {/* Header with Handle Bar - Both sticky */}
          <div className="sticky top-0 z-10 bg-white">
            {/* Handle Bar */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
            </div>
            
            <div className="px-6 pb-4">
              <h2 className="text-2xl font-semibold">Available airports</h2>
            </div>
          </div>

          {/* Countries and Airports List */}
          <div className="flex-1 overflow-y-auto pr-2 px-6">
            <div className="space-y-6">
              {countriesToDisplay.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{item.emoji}</span>
                    <span className="text-xl font-medium">{item.country}</span>
                  </div>
                  
                  <div className="space-y-5 pl-11">
                    {item.airports.map((airport, airportIndex) => (
                      <div 
                        key={airportIndex} 
                        className="block text-gray-600 text-lg w-full text-left cursor-pointer hover:text-blue-600 transition-colors"
                        onClick={() => handleAirportClick(airport)}
                      >
                        {airport}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Got It Button */}
          <div className="sticky bottom-0 pt-6 bg-white px-6">
            <button
              onClick={handleGotItClick}
              className="w-full bg-[#4CAF50] text-white py-4 rounded-full text-xl font-medium hover:bg-[#43A047] transition-colors"
            >
              Got it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 