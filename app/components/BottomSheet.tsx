import Image from 'next/image';
import { Shield } from 'lucide-react';

interface BottomSheetProps {
  onClose: () => void;
}

export default function BottomSheet({ onClose }: BottomSheetProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center">
      <div className="bg-white w-full max-w-md rounded-t-3xl p-6 pb-8 mt-0">
        {/* Close button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

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
          onClick={onClose}
          className="w-full bg-[#4CAF50] text-white py-4 rounded-full mt-8 text-xl font-medium hover:bg-[#43A047] transition-colors"
        >
          Got it
        </button>
      </div>
    </div>
  );
} 