import React from 'react';
import { Award, QrCode, Medal } from 'lucide-react';

export type CertificateVariant = 'print' | 'digital' | 'badge';

export interface CertificateProps {
  variant?: CertificateVariant;
  studentName: string;
  courseTitle: string;
  completionDate: string;
  instructorName: string;
  certificateId: string;
  className?: string;
}

export function CertificateTemplate({
  variant = 'digital',
  studentName,
  courseTitle,
  completionDate,
  instructorName,
  certificateId,
  className = '',
}: CertificateProps) {
  // Base dimensions and scaling
  const dimensions = {
    print: 'w-[297mm] h-[210mm]',
    digital: 'w-[1200px] h-[900px]',
    badge: 'w-[400px] h-[400px]',
  };

  const scaleClasses = {
    print: 'text-[4mm] p-[10mm]',
    digital: 'text-[16px] p-[40px]',
    badge: 'text-[8px] p-[16px]',
  };

  const isBadge = variant === 'badge';

  if (isBadge) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center overflow-hidden rounded-full shadow-2xl bg-[#26215C] text-white border-8 border-[#D4AF37] ${dimensions.badge} ${className}`}
      >
        <div className="absolute inset-0 opacity-10 flex items-center justify-center">
          <Medal className="w-64 h-64 text-[#D4AF37]" />
        </div>
        
        <Award className="w-16 h-16 text-[#D4AF37] mb-4 z-10" />
        <h2 className="text-[#D4AF37] font-bold tracking-widest uppercase text-xs mb-1 z-10">Course Completed</h2>
        <h1 className="text-2xl font-bold text-center px-6 leading-tight z-10">{courseTitle}</h1>
        
        <div className="mt-4 text-center z-10">
          <p className="text-gray-300 text-sm">Awarded to</p>
          <p className="font-semibold text-lg">{studentName}</p>
        </div>
        
        <div className="mt-6 flex flex-col items-center z-10">
          <span className="text-xs text-[#D4AF37] font-mono">{completionDate}</span>
          <span className="text-[10px] text-gray-400 font-mono mt-1">ID: {certificateId}</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden bg-white shadow-2xl flex flex-col ${dimensions[variant]} ${scaleClasses[variant]} ${className} border-[16px] border-[#26215C] print:shadow-none print:border-none`}
      style={variant === 'print' ? { margin: '0 auto' } : {}}
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(#26215C 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      {/* Inner Decorative Border */}
      <div className="absolute inset-4 sm:inset-6 border-4 border-[#D4AF37] pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col h-full bg-white/80 p-8 sm:p-12">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-[#26215C] flex items-center justify-center">
              <Award className="text-[#D4AF37] w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#26215C] tracking-wide uppercase">Hamplard</h2>
              <p className="text-sm text-gray-500 uppercase tracking-widest">Education Excellence</p>
            </div>
          </div>
          <div className="text-right">
            <span className="inline-block px-4 py-1 border border-[#D4AF37] text-[#D4AF37] rounded-full text-sm font-semibold uppercase tracking-wider">
              Verified Certificate
            </span>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-grow flex flex-col items-center justify-center text-center space-y-8">
          <div>
            <h3 className="text-xl md:text-2xl text-gray-500 uppercase tracking-[0.3em] mb-4">Certificate of Completion</h3>
            <p className="text-lg md:text-xl text-gray-600 mb-2">This is to certify that</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#26215C] mt-4 mb-8 pb-4 border-b-2 border-[#D4AF37] inline-block px-12">
              {studentName}
            </h1>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg md:text-xl text-gray-600 mb-4">has successfully completed the course</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#26215C] leading-tight">
              {courseTitle}
            </h2>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-12 grid grid-cols-3 items-end gap-8 text-center pt-8 border-t border-gray-200">
          
          <div className="flex flex-col items-center">
            <div className="h-16 flex items-end justify-center mb-2">
              <span className="font-serif text-2xl text-[#26215C] italic">{completionDate}</span>
            </div>
            <div className="w-48 border-t border-gray-400 pt-2">
              <p className="text-sm font-bold text-gray-600 uppercase">Date of Issue</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="w-24 h-24 bg-white p-2 border border-gray-200 rounded-lg shadow-sm flex items-center justify-center mb-2">
              <QrCode className="w-full h-full text-[#26215C]" />
            </div>
            <p className="text-xs text-gray-500 font-mono">Verify at: hamplard.com/verify</p>
            <p className="text-xs text-gray-500 font-mono mt-1">ID: {certificateId}</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-16 flex items-end justify-center mb-2">
              <span className="font-serif text-3xl text-[#26215C] italic signature">{instructorName}</span>
            </div>
            <div className="w-48 border-t border-gray-400 pt-2">
              <p className="text-sm font-bold text-gray-600 uppercase">Instructor</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
