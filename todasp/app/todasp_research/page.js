"use client"

import Map from '../components/todasp_research/Map'
import Header from '../components/todasp_research/Header'
import Statistics from '../components/todasp_research/Statistics'
import Form from '../components/todasp_research/Form'
import { useState } from 'react'

export default function Research() {
  const [selectedAddress, setSelectedAddress] = useState('')

  return (
    <>
        <Header />
        <main>
          <Map onSelectAddress={setSelectedAddress} />
          <Statistics />
          <Form selectedAddress={selectedAddress} />
        </main>
    </>
  );
}