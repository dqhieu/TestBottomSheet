'use client';

import { useState } from 'react';
import BottomSheet from './components/BottomSheet';

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <main className="min-h-screen bg-gray-100">
      {isOpen && <BottomSheet onClose={() => setIsOpen(false)} />}
    </main>
  );
}
