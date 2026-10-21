import React from 'react'
import UserCard from './UserCard';

function Exercise() {
    return (
        <>
            <div className="min-h-screen bg-gray-100 p-6">
                <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
                    User Cards
                </h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <UserCard
                        name="Daniel"
                        email="daniel@gmail.com"
                        street="Jl. Kemingung Raya"
                        city="Semarang" />
                    <UserCard
                        name="Aquaries"
                        email="aquaries@gmail.com"
                        street="Jl. Merpati No. 45"
                        city="Salatiga" />
                    <UserCard
                        name="Pratama"
                        email="pratama@gmail.com"
                        street="Jl. Pahlawan No. 12"
                        city="Jakarta" />
                </div>
            </div>
        </>
    );
}

export default Exercise