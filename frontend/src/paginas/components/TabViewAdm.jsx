import React, { useState } from 'react';
import ListaDevices from './ListaDevices';
import AdmDevices from './AdmDevices';
export const TabViewAdm = () => {
const [activeTab, setActiveTab] = useState(1);
  return (
    <div className=" sm:w-11/12 lg:w-1/2 mx-auto bg-neutral-900 rounded-lg shadow-md">
      {/* Tab Header */}
      <div className="flex border-b border-purple">
        <button
          className={`w-1/3 py-2 text-center focus:outline-none ${
            activeTab === 1 ? 'border-b-2 border-purple-500 bg-gradient-to-r from-white to-blue-900 text-transparent bg-clip-text' : ' bg-gradient-to-r from-purple-500 to-blue-900 text-transparent bg-clip-text'
          }`}
          onClick={() => setActiveTab(1)}
        >
          Devices
        </button>
        <button
          className={`w-1/3 py-2 text-center focus:outline-none ${
            activeTab === 2 ? 'border-b-2 border-purple-500 bg-gradient-to-r from-white to-blue-900 text-transparent bg-clip-text' : ' bg-gradient-to-r from-purple-500 to-blue-900 text-transparent bg-clip-text'
          }`}
          onClick={() => setActiveTab(2)}
        >
          Detalhes
        </button>
        <button
          className={`w-1/3 py-2 text-center focus:outline-none ${
            activeTab === 3 ? 'border-b-2 border-purple-500 bg-gradient-to-r from-white to-blue-900 text-transparent bg-clip-text' : ' bg-gradient-to-r from-purple-500 to-blue-900 text-transparent bg-clip-text'
          }`}
          onClick={() => setActiveTab(3)}
        >
          Novo Device
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-4 w-full">
        {activeTab === 1 && <div><ListaDevices></ListaDevices></div>}
        {activeTab === 2 && <div><AdmDevices></AdmDevices></div>}
        {activeTab === 3 && <div>This is the content for Tab 3.</div>}
      </div>
    </div>  )
}
