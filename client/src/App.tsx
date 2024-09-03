import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Chat from './components/chat/Chat';

import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <h1>Chat Application</h1>
        <Chat />
      </div>
    </QueryClientProvider>
  );
}

export default App;
