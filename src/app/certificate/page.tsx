import React from 'react';
import { CertificateTemplate } from '@/components/certificate/CertificateTemplate';

export default function CertificateShowcase() {
  const dummyData = {
    studentName: 'Alex Johnson',
    courseTitle: 'Advanced Decentralized Applications on Soroban',
    completionDate: 'October 24, 2026',
    instructorName: 'Dr. Sarah Nakamoto',
    certificateId: 'HMP-2026-X89B42F',
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-16">
        
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Certificate Templates Showcase
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Review the different variations of the Hamplard course completion certificate.
          </p>
        </div>

        {/* Print Variant */}
        <section>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Print Version (A4 Landscape)</h2>
              <p className="text-sm text-gray-500 mt-1">Dimensions: 297mm x 210mm. Designed for physical printing.</p>
            </div>
            <button
              className="px-4 py-2 bg-[#26215C] text-white rounded-md shadow hover:bg-[#1a1642] transition-colors"
              onClick={() => window.print()}
            >
              Test Print Layout
            </button>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-inner border border-gray-200 overflow-x-auto flex justify-center">
            {/* The print variant should wrap nicely in print preview */}
            <div className="print:w-full print:h-full print:m-0 print:p-0">
              <CertificateTemplate {...dummyData} variant="print" />
            </div>
          </div>
        </section>

        {/* Digital Variant */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Digital Version</h2>
            <p className="text-sm text-gray-500 mt-1">Dimensions: 1200px x 900px. Designed for LinkedIn and social media sharing.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-inner border border-gray-200 overflow-x-auto flex justify-center">
            <CertificateTemplate {...dummyData} variant="digital" />
          </div>
        </section>

        {/* Badge Variant */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Profile Badge Version</h2>
            <p className="text-sm text-gray-500 mt-1">Dimensions: 400px x 400px. Designed for user profiles and compact displays.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-inner border border-gray-200 flex justify-center">
            <CertificateTemplate {...dummyData} variant="badge" />
          </div>
        </section>

      </div>
    </div>
  );
}
