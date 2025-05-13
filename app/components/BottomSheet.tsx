import { useEffect, useRef } from 'react';

export default function BottomSheet() {
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
      "type": "CloseDetail"
    };
    window.webkit.messageHandlers.onNativeCalled.postMessage(JSON.stringify(data));
  };

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
              {/* Indonesia */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🇮🇩</span>
                  <span className="text-xl font-medium">Indonesia</span>
                </div>
                
                <div className="space-y-5 pl-11">
                  <div className="block text-gray-600 text-lg w-full text-left">
                    Soekarno-Hatta (CGK)
                  </div>
                  <div className="block text-gray-600 text-lg w-full text-left">
                    Yogyakarta (JOG)
                  </div>
                  <div className="block text-gray-600 text-lg w-full text-left">
                    Denpasar (DPS)
                  </div>
                  <div className="block text-gray-600 text-lg w-full text-left">
                    Surabaya (SUB)
                  </div>
                </div>
              </div>

              {/* Malaysia */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🇲🇾</span>
                  <span className="text-xl font-medium">Malaysia</span>
                </div>
                
                <div className="space-y-5 pl-11">
                  <div className="block text-gray-600 text-lg w-full text-left">
                    Kuala Lumpur International (KUL)
                  </div>
                </div>
              </div>

              {/* Singapore */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🇸🇬</span>
                  <span className="text-xl font-medium">Singapore</span>
                </div>
                
                <div className="space-y-5 pl-11">
                  <div className="block text-gray-600 text-lg w-full text-left">
                    Singapore Changi (SIN)
                  </div>
                  <div className="block text-gray-600 text-lg w-full text-left">
                    Seletar (XSP)
                  </div>
                </div>
              </div>

              {/* Vietnam */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🇻🇳</span>
                  <span className="text-xl font-medium">Vietnam</span>
                </div>
                
                <div className="space-y-5 pl-11">
                  <div className="block text-gray-600 text-lg w-full text-left">
                    Tan Son Nhat International (SGN)
                  </div>
                  <div className="block text-gray-600 text-lg w-full text-left">
                    Noi Bai International (HAN)
                  </div>
                  <div className="block text-gray-600 text-lg w-full text-left">
                    Da Nang International (DAD)
                  </div>
                  <div className="block text-gray-600 text-lg w-full text-left">
                    Phu Quoc International (PQC)
                  </div>
                </div>
              </div>
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