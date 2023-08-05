'use client'

import { Metadata } from 'next'
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';



export default function Page() {
    return <div className='body-container'>
        <motion.div className="test">

            <div className='notion-container'>
                <h1>Test</h1>

            </div>
        </motion.div>
    </div>
}