import { useState, useCallback } from 'react'

export default function SizeCheck({size}) {
  return ( 
    <div className="block">
      <span className="text-gray-700 text-gray-700 font-montserrat uppercase text-xs font-semibold">Size:</span>
      <div className="mt-4 flex w-24 justify-between">
        <label className="inline-flex items-center">
          <span className={`${size === 'S' ? 'text-blueless': null} text-xs`}>S</span>
        </label>
        <label className="inline-flex items-center">
          <span className={`${size === 'M' ? 'text-blueless': null} text-xs`}>M</span>
        </label>
        <label className="inline-flex items-center">
          <span className={`${size === 'L' ? 'text-blueless': null} text-xs`}>L</span>
        </label>
        <label className="inline-flex items-center">
          <span className={`${size === 'XL' ? 'text-blueless': null} text-xs`}>XL</span>
        </label>
      </div>
    </div>
  )
}