import Image from 'next/image';
import { Shield } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { wrapModule } from '@grabjs/mobile-kit-bridge-sdk';

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
      "type": "CloseDetail",
      "params": {
        key: "A string to identify this request",
        payload: { }
      }
    };
    window.webkit.messageHandlers.onNativeCalled.postMessage(JSON.stringify(data));
  };

  return (
    <div ref={sheetRef} className="w-full ">
      <div className="fixed inset-0 bg-black/50 bg-white " />
      <div className="relative z-50 ">
        <div className="bg-white w-full mx-auto rounded-t-3xl p-6 pb- 8">

          {/* Image */}
          <div className="rounded-2xl mb-8">
            <Image
              src="/kids-safety.svg"
              alt="Car safety illustration"
              width={300}
              height={200}
              className="w-full h-auto rounded-2xl"
            />
          </div>

          {/* Content */}
          <h2 className="text-3xl font-semibold mb-8">Extra Safety for your kids</h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-gray-700 mt-1" />
              <p className="text-gray-700 text-lg">
                We have insurance for your kids. Put CVP when we get it from the country team
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-gray-700 mt-1" />
              <p className="text-gray-700 text-lg">
                Subtitle placeholder for CVP
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-gray-700 mt-1" />
              <p className="text-gray-700 text-lg">
                Subtitle placeholder for CVP
              </p>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={handleGotItClick}
            className="w-full bg-[#4CAF50] text-white py-4 rounded-full mt-8 text-xl font-medium hover:bg-[#43A047] transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
} 