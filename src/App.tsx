/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CategoriesSection } from './components/CategoriesSection';
import { WorkflowsSection } from './components/WorkflowsSection';
import { LatestSection } from './components/LatestSection';
import { BigCTA } from './components/BigCTA';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { QuestionsModal } from './components/QuestionsModal';
import { TaskRoadmapModal } from './components/TaskRoadmapModal';
import { UpdateDetailModal } from './components/UpdateDetailModal';
import { FavoritesDrawer } from './components/FavoritesDrawer';

import { ToolsView } from './views/ToolsView';
import { WorkflowsView } from './views/WorkflowsView';
import { PromptsView } from './views/PromptsView';
import { HowItWorksView } from './views/HowItWorksView';

import { TASKS_DATA, TaskDetail } from './data/tasksData';
import { CATEGORIES_DATA, CategoryItem } from './data/categoriesData';
import { WORKFLOWS_DATA, DetailedWorkflow } from './data/workflowsData';
import { LatestUpdateItem } from './data/latestUpdatesData';

export default function App() {
  // Navigation State
  const [currentRoute, setCurrentRoute] = useState<string>('/');

  // Modals & Drawers
  const [isQuestionsModalOpen, setIsQuestionsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<TaskDetail | null>(null);
  const [isRoadmapOpen, setIsRoadmapOpen] = useState(false);
  const [selectedUpdate, setSelectedUpdate] = useState<LatestUpdateItem | null>(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  // Search box display value
  const [selectedTaskText, setSelectedTaskText] = useState<string>('');

  // Filtering for tools/categories view
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');
  const [activeWorkflowId, setActiveWorkflowId] = useState<string>('product-ad');

  // Favorites stored in LocalStorage
  const [favoriteTaskIds, setFavoriteTaskIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('iatbourchim_favorites');
      return saved ? JSON.parse(saved) : ['video', 'sell'];
    } catch {
      return ['video', 'sell'];
    }
  });

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string>('غادي نوجهوك خطوة بخطوة ✨');
  const [toastVisible, setToastVisible] = useState<boolean>(false);

  // Save favorites to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('iatbourchim_favorites', JSON.stringify(favoriteTaskIds));
    } catch {
      // Ignore storage errors
    }
  }, [favoriteTaskIds]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  const handleToggleFavorite = (taskId: string) => {
    if (favoriteTaskIds.includes(taskId)) {
      setFavoriteTaskIds((prev) => prev.filter((id) => id !== taskId));
      showToast('تمت إزالة المهمة من المفضلة');
    } else {
      setFavoriteTaskIds((prev) => [...prev, taskId]);
      showToast('تم حفظ المهمة في المفضلة بنجاح ❤️');
    }
  };

  // Main Navigation Handler
  const handleNavigate = (route: string) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (route === '/') {
      // Home
    } else if (route === '/categories') {
      showToast('قسم المجالات — اختار تخصصك');
    } else if (route === '/tools') {
      showToast('دليل أدوات الذكاء الاصطناعي');
    } else if (route === '/workflows') {
      showToast('مسارات العمل المتسلسلة (Workflows)');
    } else if (route === '/prompts') {
      showToast('مكتبة الـ Prompts الجاهزة');
    } else if (route === '/how-it-works') {
      showToast('دليل: كيفاش خدام التطبيق؟');
    }
  };

  // Focus Search & Open Modal ("بدا التطبيق" button)
  const handleStartApp = () => {
    if (currentRoute !== '/') {
      setCurrentRoute('/');
    }

    setTimeout(() => {
      const container = document.getElementById('main-project-container');
      if (container) {
        container.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      const box = document.getElementById('main-project-box');
      if (box) {
        box.classList.add('ring-4', 'ring-[#38bdf8]', 'scale-[1.02]');
        setTimeout(() => {
          box.classList.remove('scale-[1.02]');
        }, 300);
      }
      setTimeout(() => {
        setIsQuestionsModalOpen(true);
      }, 350);
    }, 100);
  };

  // When a task is selected from the 23-task Questions Modal or Quick Tags
  const handleSelectTask = (task: TaskDetail) => {
    setSelectedTask(task);
    setSelectedTaskText(`${task.emoji} ${task.title}`);
    setIsQuestionsModalOpen(false);

    // Open detailed guided roadmap modal
    setTimeout(() => {
      setIsRoadmapOpen(true);
      showToast(`غادي نوجهوك خطوة بخطوة فـ: ${task.title} ✨`);
    }, 200);
  };

  // Quick tag selection on Hero
  const handleSelectQuickTag = (taskId: string) => {
    const foundTask = TASKS_DATA.find((t) => t.id === taskId);
    if (foundTask) {
      handleSelectTask(foundTask);
    }
  };

  // Category card click on Home
  const handleSelectCategory = (category: CategoryItem) => {
    setActiveCategoryFilter(category.id);
    setCurrentRoute('/tools');
    showToast(`تصفح أدوات مجال: ${category.name}`);
  };

  // Workflow card click on Home
  const handleSelectWorkflow = (wf: DetailedWorkflow) => {
    setActiveWorkflowId(wf.id);
    setCurrentRoute('/workflows');
    showToast(`بدء مسار: ${wf.title}`);
  };

  // Latest update click
  const handleSelectUpdate = (update: LatestUpdateItem) => {
    setSelectedUpdate(update);
    setIsUpdateModalOpen(true);
  };

  // Navigation from roadmap to full workflow
  const handleNavigateToWorkflow = (workflowId: string) => {
    setIsRoadmapOpen(false);
    setActiveWorkflowId(workflowId);
    setCurrentRoute('/workflows');
    showToast('تم فتح مسار العمل الكامل المترابط');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f9ff] text-[#0f172a] antialiased selection:bg-pink-100 selection:text-pink-600">
      
      {/* Header */}
      <Header
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenSearch={handleStartApp}
        favoritesCount={favoriteTaskIds.length}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
      />

      {/* Main Content Body */}
      <main className="flex-grow pb-24 md:pb-12">
        {currentRoute === '/' && (
          <>
            {/* 1. Hero Section */}
            <HeroSection
              onOpenQuestionsModal={() => setIsQuestionsModalOpen(true)}
              selectedTaskText={selectedTaskText}
              onSelectQuickTag={handleSelectQuickTag}
            />

            {/* 2. Categories Section (اختار المجال ديالك) */}
            <CategoriesSection
              onSelectCategory={handleSelectCategory}
              onViewAllCategories={() => {
                setActiveCategoryFilter('all');
                setCurrentRoute('/tools');
              }}
            />

            {/* 3. Workflows Section (شنو بغيتي تنجز؟) */}
            <WorkflowsSection onSelectWorkflow={handleSelectWorkflow} />

            {/* 4. Latest Section (الجديد دابا 🔥) */}
            <LatestSection onSelectUpdate={handleSelectUpdate} />

            {/* 5. Big CTA Banner (عندك فكرة؟) */}
            <BigCTA onStart={handleStartApp} />
          </>
        )}

        {currentRoute === '/categories' && (
          <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-right">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h1 className="text-3xl sm:text-4xl font-black text-[#0f172a] mb-3">
                جميع مجالات وتخصصات الذكاء الاصطناعي
              </h1>
              <p className="text-sm sm:text-base font-semibold text-slate-500">
                اختار المجال المناسب لمشروعك واكتشف الأدوات والمسارات المعتمدة.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CATEGORIES_DATA.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => handleSelectCategory(cat)}
                  className="card-hover bg-white rounded-3xl p-6 border border-pink-200/50 shadow-sm hover:shadow-md cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div
                      className={`w-14 h-14 rounded-2xl ${cat.bgTint} ${cat.textColor} flex items-center justify-center text-3xl mb-4`}
                    >
                      {cat.emoji}
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-[#0f172a]">{cat.name}</h3>
                      <span className="text-xs font-bold text-slate-400">
                        {cat.toolCount} أداة
                      </span>
                    </div>
                    <p className="text-xs font-bold text-slate-700 mb-2">{cat.arabicName}</p>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                      {cat.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0284c7]">
                    <span>تصفح أدوات المجال</span>
                    <span>←</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentRoute === '/tools' && (
          <ToolsView
            initialCategoryId={activeCategoryFilter}
            onShowToast={showToast}
          />
        )}

        {currentRoute === '/workflows' && (
          <WorkflowsView
            initialWorkflowId={activeWorkflowId}
            onShowToast={showToast}
          />
        )}

        {currentRoute === '/prompts' && (
          <PromptsView onShowToast={showToast} />
        )}

        {currentRoute === '/how-it-works' && (
          <HowItWorksView onStartNow={handleStartApp} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} onShowToast={showToast} />

      {/* Mobile Sticky Bottom Nav (<768px) */}
      <MobileBottomNav
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenSearch={handleStartApp}
        onToggleMoreMenu={() => setIsFavoritesOpen(true)}
      />

      {/* 23 Tasks Questions Modal */}
      <QuestionsModal
        isOpen={isQuestionsModalOpen}
        onClose={() => setIsQuestionsModalOpen(false)}
        onSelectTask={handleSelectTask}
      />

      {/* Detailed Guided Roadmap Modal */}
      <TaskRoadmapModal
        task={selectedTask}
        isOpen={isRoadmapOpen}
        onClose={() => setIsRoadmapOpen(false)}
        onNavigateToWorkflow={handleNavigateToWorkflow}
        isFavorite={selectedTask ? favoriteTaskIds.includes(selectedTask.id) : false}
        onToggleFavorite={handleToggleFavorite}
        onShowToast={showToast}
      />

      {/* Latest Update Deep Dive Modal */}
      <UpdateDetailModal
        update={selectedUpdate}
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        onShowToast={showToast}
      />

      {/* Favorites Drawer */}
      <FavoritesDrawer
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favoriteTaskIds={favoriteTaskIds}
        onSelectTask={(task) => {
          setSelectedTask(task);
          setIsRoadmapOpen(true);
        }}
        onRemoveFavorite={handleToggleFavorite}
        onClearAll={() => {
          setFavoriteTaskIds([]);
          showToast('تم مسح جميع العناصر المحفوظة');
        }}
      />

      {/* Dynamic Toast Notification */}
      <div
        className={`fixed bottom-20 md:bottom-8 right-1/2 translate-x-1/2 z-50 transform transition-all duration-300 pointer-events-none ${
          toastVisible
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-4 scale-95'
        }`}
      >
        <div className="bg-[#0f172a] text-white px-6 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-pink-300/40">
          <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8] animate-ping" />
          <span className="text-xs sm:text-sm font-bold">{toastMessage}</span>
        </div>
      </div>

    </div>
  );
}
