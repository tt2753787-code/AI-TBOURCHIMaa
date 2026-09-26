import React from 'react';
import { ArrowLeft, Zap } from 'lucide-react';
import { WORKFLOWS_DATA, DetailedWorkflow } from '../data/workflowsData';

interface WorkflowsSectionProps {
  onSelectWorkflow: (workflow: DetailedWorkflow) => void;
}

export const WorkflowsSection: React.FC<WorkflowsSectionProps> = ({
  onSelectWorkflow,
}) => {
  return (
    <section id="workflows-section" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-right">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200/70 text-xs font-bold text-[#f472b6] mb-3">
          <Zap className="w-3.5 h-3.5" />
          <span>خطوات عملية متسلسلة</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-2 tracking-tight">
          شنو بغيتي تنجز؟
        </h2>
        <p className="text-sm sm:text-base font-medium text-slate-500">
          اختار مشروع كامل وخلي الموقع يوريك الأدوات بالترتيب.
        </p>
      </div>

      {/* 4 Workflow Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {WORKFLOWS_DATA.map((wf) => (
          <div
            key={wf.id}
            onClick={() => onSelectWorkflow(wf)}
            className="card-hover bg-white rounded-3xl p-6 border-2 border-transparent hover:border-pink-200 shadow-sm hover:shadow-md cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl group-hover:scale-110 transition-transform">
                  {wf.emoji}
                </span>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-sky-50 text-sky-700">
                  {wf.categoryTag}
                </span>
              </div>

              <h3 className="text-base font-extrabold text-[#0f172a] mb-3 group-hover:text-[#0284c7] transition-colors">
                {wf.title}
              </h3>

              {/* Chain preview */}
              <div className="bg-[#f8fafc] rounded-2xl p-3 border border-slate-100 text-xs font-bold text-slate-600 tracking-tight leading-relaxed dir-ltr text-center">
                {wf.shortChain}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between text-xs font-bold text-[#0f172a] pt-3 border-t border-slate-50">
              <span className="group-hover:text-[#0284c7] transition-colors">ابدأ المسار</span>
              <span className="w-7 h-7 rounded-full bg-sky-50 flex items-center justify-center text-[#0284c7] group-hover:bg-[#38bdf8] group-hover:text-white transition-all">
                <ArrowLeft className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
