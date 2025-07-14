import './App.css';
import { Toaster } from 'react-hot-toast';
import SignUp from './SignUp';

export default function App() {
  return (
    <div className="size-full flex justify-center items-center bg-gray-100">
      <SignUp />
      <Toaster position="top-right" />
    </div>
  );
}
