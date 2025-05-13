interface Window {
  webkit: {
    messageHandlers: {
      ContainerModule: {
        postMessage(message: string): void;
      };
    };
  };
} 