interface Window {
  webkit: {
    messageHandlers: {
      onNativeCalled: {
        postMessage(message: string): void;
      };
    };
  };
} 