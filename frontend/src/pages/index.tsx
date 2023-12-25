import React from 'react';
import UserInterface from '../components/UserInterface';

const Home: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center items-start min-h-screen bg-gray-100">
      <div className="m-4">
        <UserInterface backendName="rust" />
      </div>
    </div>
  )
}

export default Home;