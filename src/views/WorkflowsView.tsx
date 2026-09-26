import React, { useState } from 'react';
import { WORKFLOWS_DATA, DetailedWorkflow, WorkflowStep } from '../data/workflowsData';
import { CheckCircle2, Circle, ArrowLeft, ArrowRight, Copy, Check, Sparkles, Layers } from 'lucide-react';

interface WorkflowsViewProps {
  initialWorkflowId?: string;
  onShowToast: (message: string) => void;
}

export const WorkflowsView: React.FC<WorkflowsViewProps> = ({
  initialWorkflowId,
  onShowToast,
}) => {
  const [activeWorkflowId, setActiveWorkflowId] = useState<string>(
    initialWorkflowId || WORKFLOWS_DATA[0].id
  );
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [checkedChecklist, setCheckedChecklist] = useState<Record<string, boolean>>({});
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const activeWorkflow =
    WORKFLOWS_DATA.find((wf) => wf.id === activeWorkflowId) || WORKFLOWS_DATA[0];

  const currentStep = activeWorkflow.steps[activeStepIndex] || activeWorkflow.steps[0];

  const toggleChecklist = (itemKey: string) => {
    setCheckedChecklist((prev) => ({
      ...prev,
      [itemKey]: !prev[itemKey],
    }));
  };

  const handleCopyPrompt = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(true);
    onShowToast('تم نسخ برومبت الخطوة بنجاح ✨');
    setTimeout(() => setCopiedPrompt(false), 2500);
  };

  // Calculate workflow completion
  const totalTasks = activeWorkflow.steps.reduce(
    (acc, step) => acc + step.actionChecklist.length,
    0
  );
  const completedTasks = Object.keys(checkedChecklist).filter(
    (key) => key.startsWith(activeWorkflow.id) && checkedChecklist[key]
  ).length;
  const progressPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-right">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-200/80 shadow-xs mb-3">
          <Layers className="w-3.5 h-3.5 text-[#f472b6]" />
          <span className="text-xs font-bold text-[#f472b6]">مسارات العمل المتكاملة</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-[#0f172a] mb-3">
          Workflows: من الفكرة حتى النتيجة خطوة بخطوة
        </h1>
        <p className="text-sm sm:text-base font-semibold text-slate-500">
          مسارات عمل متسلسلة كتوريك الأداة المناسبة، البرومبت، والمهام العملية لكل خطوة.
        </p>
      </div>

      {/* Workflow Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {WORKFLOWS_DATA.map((wf) => {
          const isActive = wf.id === activeWorkflow.id;
          return (
            <button
              key={wf.id}
              onClick={() => {
                setActiveWorkflowId(wf.id);
                setActiveStepIndex(0);
              }}
              className={`p-4 rounded-2xl border text-right transition-all cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-white border-[#38bdf8] shadow-md ring-2 ring-sky-200'
                  : 'bg-white/70 border-slate-200 hover:bg-white text-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{wf.emoji}</span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                    isActive ? 'bg-sky-50 text-sky-700' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {wf.categoryTag}
                </span>
              </div>
              <h3 className="text-sm font-extrabold text-[#0f172a] truncate">{wf.title}</h3>
              <p className="text-[11px] text-slate-400 font-semibold mt-1">
                {wf.steps.length} خطوات عمل
              </p>
            </button>
          );
        })}
      </div>

      {/* Main Active Workflow Panel */}
      <div className="bg-white rounded-3xl border-2 border-pink-200/70 p-6 sm:p-8 shadow-sm">
        
        {/* Workflow Overview Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-100 gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">{activeWorkflow.emoji}</span>
              <h2 className="text-2xl font-black text-[#0f172a]">
                {activeWorkflow.title} ({activeWorkflow.categoryTag})
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1 max-w-2xl">
              {activeWorkflow.description}
            </p>
          </div>

          {/* Progress bar */}
          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/70 min-w-[200px]">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-1.5">
              <span>نسبة الإنجاز:</span>
              <span className="text-[#0284c7]">{progressPercent}%</span>
            </div>
            <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#38bdf8] to-[#f472b6] transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Step Indicator Nodes */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-4 mb-8">
          {activeWorkflow.steps.map((st, idx) => {
            const isStepActive = idx === activeStepIndex;
            const isStepDone = idx < activeStepIndex;
            return (
              <button
                key={st.stepIndex}
                onClick={() => setActiveStepIndex(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap cursor-pointer transition-all ${
                  isStepActive
                    ? 'btn-gradient text-white shadow-xs'
                    : isStepDone
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span>{st.icon}</span>
                <span>{st.label}</span>
              </button>
            );
          })}
        </div>

        {/* Current Step Content */}
        <div className="bg-slate-50 rounded-2xl p-5 sm:p-7 border border-slate-200/70 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div>
              <span className="text-xs font-extrabold text-sky-700 bg-sky-100/70 px-2.5 py-0.5 rounded-md mb-2 inline-block">
                الخطوة {currentStep.stepIndex} من {activeWorkflow.steps.length}
              </span>
              <h3 className="text-xl font-black text-[#0f172a]">{currentStep.label}</h3>
            </div>

            <div className="bg-white px-4 py-2 rounded-xl border border-slate-200 text-xs font-extrabold text-[#0284c7] self-start sm:self-auto">
              الأداة الموصى بها: {currentStep.recommendedTool}
            </div>
          </div>

          <p className="text-sm font-semibold text-slate-700 leading-relaxed mb-6">
            {currentStep.description}
          </p>

          {/* Checklist */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 mb-6">
            <h4 className="text-xs sm:text-sm font-black text-[#0f172a] mb-3">
              ✅ قائمة المهام التنفيذية (Checklist):
            </h4>
            <div className="space-y-2.5">
              {currentStep.actionChecklist.map((task, tIdx) => {
                const itemKey = `${activeWorkflow.id}-s${currentStep.stepIndex}-t${tIdx}`;
                const isChecked = !!checkedChecklist[itemKey];
                return (
                  <button
                    key={tIdx}
                    onClick={() => toggleChecklist(itemKey)}
                    className="w-full flex items-center gap-3 text-right text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 cursor-pointer"
                  >
                    {isChecked ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-300 shrink-0" />
                    )}
                    <span className={isChecked ? 'line-through text-slate-400' : ''}>
                      {task}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Ready Prompt */}
          <div className="bg-[#0f172a] text-slate-200 rounded-2xl p-5 border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-sky-400">
                برومبت جاهز للاستخدام في: {currentStep.recommendedTool}
              </span>
              <button
                onClick={() => handleCopyPrompt(currentStep.readyPrompt)}
                className="btn-gradient text-white text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5 cursor-pointer"
              >
                {copiedPrompt ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-300" />
                    <span>تم النسخ</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>نسخ البرومبت</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-xs sm:text-sm font-mono text-slate-300 leading-relaxed dir-ltr text-left selection:bg-pink-500">
              {currentStep.readyPrompt}
            </p>
          </div>
        </div>

        {/* Step Navigation Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <button
            onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
            disabled={activeStepIndex === 0}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
              activeStepIndex === 0
                ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <ArrowRight className="w-4 h-4" />
            <span>الخطوة السابقة</span>
          </button>

          <span className="text-xs font-bold text-slate-400">
            {activeStepIndex + 1} / {activeWorkflow.steps.length}
          </span>

          <button
            onClick={() =>
              setActiveStepIndex((prev) => Math.min(activeWorkflow.steps.length - 1, prev + 1))
            }
            disabled={activeStepIndex === activeWorkflow.steps.length - 1}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
              activeStepIndex === activeWorkflow.steps.length - 1
                ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400'
                : 'btn-gradient text-white'
            }`}
          >
            <span>الخطوة التالية</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};
