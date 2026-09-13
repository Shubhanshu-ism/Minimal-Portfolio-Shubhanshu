import React, { useEffect, useRef, useState, useId, useCallback } from 'react';
import { useTheme } from './ThemeProvider';
import {
    Copy,
    Check,
    Maximize2,
    X,
    ZoomIn,
    ZoomOut,
    RotateCcw,
    Hand,
    ArrowUp,
    ArrowDown,
    ArrowLeft,
    ArrowRight
} from 'lucide-react';

export const MermaidDiagram = ({ chart, title, description, badge = "Architecture Flow" }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const rawId = useId();
    const cleanId = 'mermaid-' + rawId.replace(/[^a-zA-Z0-9_-]/g, '');
    const containerRef = useRef(null);
    const fullscreenViewportRef = useRef(null);

    const [svgContent, setSvgContent] = useState('');
    const [renderKey, setRenderKey] = useState('');
    const [renderError, setRenderError] = useState(null);
    const [copied, setCopied] = useState(false);

    // Fullscreen, Pan, and Zoom Controls
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [zoomLevel, setZoomLevel] = useState(1);
    const [pan, setPan] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const dragStartRef = useRef({ x: 0, y: 0 });

    const currentKey = `${theme}:${chart}`;
    const isRendering = renderKey !== currentKey && !renderError;

    // Render diagram asynchronously
    useEffect(() => {
        let isMounted = true;

        const renderChart = async () => {
            try {
                const mermaidModule = await import('mermaid');
                const mermaid = mermaidModule.default || mermaidModule;
                mermaid.initialize({
                    startOnLoad: false,
                    securityLevel: 'loose',
                    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    theme: isDark ? 'dark' : 'neutral',
                    themeVariables: isDark ? {
                        darkMode: true,
                        background: '#090d16',
                        primaryColor: '#1e293b',
                        primaryTextColor: '#f8fafc',
                        primaryBorderColor: '#3b82f6',
                        lineColor: '#64748b',
                        secondaryColor: '#0f172a',
                        tertiaryColor: '#1e293b',
                        noteBkgColor: '#1e293b',
                        noteTextColor: '#f8fafc',
                        actorBkg: '#1e293b',
                        actorTextColor: '#f8fafc',
                        actorLineColor: '#3b82f6',
                        signalColor: '#94a3b8',
                        signalTextColor: '#f8fafc',
                        labelBoxBkgColor: '#1e293b',
                        labelBoxBorderColor: '#334155',
                        labelTextColor: '#f8fafc',
                        loopTextColor: '#f8fafc'
                    } : {
                        darkMode: false,
                        background: '#ffffff',
                        primaryColor: '#f8fafc',
                        primaryTextColor: '#0f172a',
                        primaryBorderColor: '#2563eb',
                        lineColor: '#475569',
                        secondaryColor: '#ffffff',
                        tertiaryColor: '#f1f5f9',
                        noteBkgColor: '#f1f5f9',
                        noteTextColor: '#0f172a',
                        actorBkg: '#f8fafc',
                        actorTextColor: '#0f172a',
                        actorLineColor: '#2563eb',
                        signalColor: '#334155',
                        signalTextColor: '#0f172a',
                        labelBoxBkgColor: '#f8fafc',
                        labelBoxBorderColor: '#cbd5e1',
                        labelTextColor: '#0f172a',
                        loopTextColor: '#0f172a'
                    }
                });

                const uniqueRenderId = `${cleanId}-${isDark ? 'dark' : 'light'}-${Math.random().toString(36).substring(2, 6)}`;
                const { svg } = await mermaid.render(uniqueRenderId, chart.trim());

                if (isMounted) {
                    setSvgContent(svg);
                    setRenderKey(currentKey);
                    setRenderError(null);
                }
            } catch (err) {
                if (isMounted) {
                    console.error('Mermaid render error:', err);
                    setRenderError(err?.message || 'Failed to render diagram');
                    setRenderKey(currentKey);
                }
            }
        };

        renderChart();

        return () => {
            isMounted = false;
        };
    }, [chart, isDark, cleanId, currentKey]);

    // Lock body scroll when fullscreen is active to completely prevent background page scrolling
    useEffect(() => {
        if (!isFullscreen) return;

        const originalOverflow = document.body.style.overflow;
        const originalTouchAction = document.body.style.touchAction;
        document.body.style.overflow = 'hidden';
        document.body.style.touchAction = 'none';

        return () => {
            document.body.style.overflow = originalOverflow;
            document.body.style.touchAction = originalTouchAction;
        };
    }, [isFullscreen]);

    // Non-passive wheel zoom listener on the fullscreen canvas to completely prevent page scroll lag
    useEffect(() => {
        const viewport = fullscreenViewportRef.current;
        if (!viewport || !isFullscreen) return;

        const handleNativeWheel = (e) => {
            e.preventDefault();
            e.stopPropagation();
            const factor = e.deltaY < 0 ? 1.12 : 0.88;
            setZoomLevel(z => Math.min(Math.max(z * factor, 0.4), 4));
        };

        viewport.addEventListener('wheel', handleNativeWheel, { passive: false });
        return () => viewport.removeEventListener('wheel', handleNativeWheel);
    }, [isFullscreen]);

    const handleCopy = () => {
        navigator.clipboard.writeText(chart.trim());
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleReset = useCallback(() => {
        setPan({ x: 0, y: 0 });
        setZoomLevel(1);
    }, []);

    const handlePanStep = useCallback((dx, dy) => {
        setPan(prev => ({ x: prev.x + dx, y: prev.y + dy }));
    }, []);

    // Open fullscreen with reset pan & comfortable zoom
    const openFullscreen = () => {
        setPan({ x: 0, y: 0 });
        setZoomLevel(1.1);
        setIsFullscreen(true);
    };

    // Smooth GPU mouse drag handlers for hand mode
    const handleMouseDown = (e) => {
        if (e.button !== 0) return;
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
        dragStartRef.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        e.stopPropagation();
        setPan({
            x: e.clientX - dragStartRef.current.x,
            y: e.clientY - dragStartRef.current.y
        });
    };

    const handleMouseUp = () => setIsDragging(false);

    // Keyboard navigation (Arrow keys to pan, +/- to zoom, 0 to reset, Esc to exit)
    useEffect(() => {
        if (!isFullscreen) return;

        const handleKeyDown = (e) => {
            const STEP = 60;
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                setPan(p => ({ ...p, x: p.x + STEP }));
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                setPan(p => ({ ...p, x: p.x - STEP }));
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setPan(p => ({ ...p, y: p.y + STEP }));
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                setPan(p => ({ ...p, y: p.y - STEP }));
            } else if (e.key === '+' || e.key === '=') {
                e.preventDefault();
                setZoomLevel(z => Math.min(z + 0.2, 4));
            } else if (e.key === '-' || e.key === '_') {
                e.preventDefault();
                setZoomLevel(z => Math.max(z - 0.2, 0.4));
            } else if (e.key === '0') {
                e.preventDefault();
                handleReset();
            } else if (e.key === 'Escape') {
                e.preventDefault();
                setIsFullscreen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isFullscreen, handleReset]);

    return (
        <div className="w-full bg-bgCard border border-subtle rounded-[24px] overflow-hidden shadow-sm transition-all flex flex-col">
            {/* Header Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-b border-subtle bg-black/[0.02] dark:bg-white/[0.02]">
                <div className="flex items-center gap-2.5">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                        isDark
                            ? 'bg-blue-500/10 text-blue-400 border-blue-500/25'
                            : 'bg-blue-50 text-blue-700 border-blue-300'
                    }`}>
                        {badge}
                    </span>
                    {title && (
                        <h4 className="text-sm sm:text-base font-bold text-accent tracking-tight">
                            {title}
                        </h4>
                    )}
                </div>

                <div className="flex items-center gap-1.5 ml-auto">
                    <button
                        onClick={handleCopy}
                        title="Copy Mermaid Syntax"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-dim hover:text-accent bg-black/[0.03] dark:bg-white/[0.05] border border-subtle transition-all active:scale-[0.96]"
                    >
                        {copied ? (
                            <>
                                <Check size={13} className="text-emerald-500" />
                                <span className="text-emerald-500">Copied</span>
                            </>
                        ) : (
                            <>
                                <Copy size={13} />
                                <span>Copy Code</span>
                            </>
                        )}
                    </button>

                    <button
                        onClick={openFullscreen}
                        title="Expand to Fullscreen (Pan & Zoom)"
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-all active:scale-[0.96] border ${
                            isDark
                                ? 'text-accent bg-blue-500/10 border-blue-500/25 hover:bg-blue-500/20'
                                : 'text-blue-700 bg-blue-50 border-blue-300 hover:bg-blue-100 shadow-xs'
                        }`}
                    >
                        <Maximize2 size={13} />
                        <span className="font-semibold">Expand Fullscreen</span>
                    </button>
                </div>
            </div>

            {/* Description Subheader */}
            {description && (
                <div className="px-5 py-3 text-xs sm:text-sm text-dim leading-relaxed border-b border-subtle/50 bg-black/[0.01] dark:bg-white/[0.01]">
                    {description}
                </div>
            )}

            {/* Main Canvas Viewport in Normal Mode */}
            <div className="relative w-full p-4 sm:p-8 overflow-x-auto min-h-[320px] flex items-center justify-center">
                {isRendering && (
                    <div className="flex flex-col items-center justify-center gap-3 py-14 text-dim">
                        <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-xs font-mono">Rendering system diagram...</span>
                    </div>
                )}

                {renderError ? (
                    <div className="w-full p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-left">
                        <p className="text-xs font-bold text-red-400 font-mono mb-2">Diagram Render Notice</p>
                        <pre className="text-[11px] font-mono text-dim overflow-x-auto p-3 rounded-lg bg-black/20">
                            {chart}
                        </pre>
                    </div>
                ) : (
                    <div
                        ref={containerRef}
                        dangerouslySetInnerHTML={{ __html: svgContent }}
                        className="w-full flex justify-center [&>svg]:max-w-full [&>svg]:h-auto [&>svg]:mx-auto select-none"
                    />
                )}
            </div>

            {/* TRUE FULLSCREEN MODAL WITH HIGH CONTRAST & BODY SCROLL LOCK */}
            {isFullscreen && (
                <div
                    className={`fixed inset-0 z-50 w-screen h-screen flex flex-col select-none overflow-hidden animate-in fade-in duration-150 ${
                        isDark
                            ? 'bg-[#070b13]/98 backdrop-blur-2xl text-white'
                            : 'bg-[#f8fafc]/98 backdrop-blur-2xl text-slate-900'
                    }`}
                    style={{ touchAction: 'none', overscrollBehavior: 'none' }}
                >
                    {/* Fullscreen Top Navigation Bar */}
                    <div
                        className={`flex items-center justify-between px-6 py-4 border-b z-20 shrink-0 ${
                            isDark
                                ? 'border-white/10 bg-black/40 text-white'
                                : 'border-slate-200 bg-white/95 text-slate-900 shadow-sm'
                        }`}
                    >
                        <div className="flex items-center gap-3">
                            <span
                                className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                                    isDark
                                        ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                                        : 'bg-blue-100 text-blue-800 border-blue-300 shadow-xs'
                                }`}
                            >
                                {badge}
                            </span>
                            <div>
                                <h3 className="text-base sm:text-lg font-bold leading-tight">
                                    {title || "System Architecture Diagram"}
                                </h3>
                                <p
                                    className={`text-xs font-mono hidden sm:block mt-0.5 ${
                                        isDark ? 'text-slate-400' : 'text-slate-600'
                                    }`}
                                >
                                    Hand Mode Active • Click &amp; Drag or use Arrow Keys to pan • Scroll to zoom
                                </p>
                            </div>
                        </div>

                        {/* Top Controls with High-Contrast Light & Dark Styling */}
                        <div className="flex items-center gap-2">
                            <div
                                className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold mr-2 border ${
                                    isDark
                                        ? 'bg-blue-500/15 border-blue-500/30 text-blue-300'
                                        : 'bg-blue-100 border-blue-300 text-blue-800 shadow-xs'
                                }`}
                            >
                                <Hand size={14} className="animate-pulse" />
                                <span>Hand Mode (Drag to Pan)</span>
                            </div>

                            <button
                                onClick={() => setZoomLevel(z => Math.max(z - 0.2, 0.4))}
                                className={`p-2 rounded-full border transition-all active:scale-95 ${
                                    isDark
                                        ? 'border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white'
                                        : 'border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 shadow-xs'
                                }`}
                                title="Zoom Out (-)"
                            >
                                <ZoomOut size={16} />
                            </button>

                            <span
                                className={`text-xs font-mono min-w-[44px] text-center font-semibold ${
                                    isDark ? 'text-slate-200' : 'text-slate-800'
                                }`}
                            >
                                {Math.round(zoomLevel * 100)}%
                            </span>

                            <button
                                onClick={() => setZoomLevel(z => Math.min(z + 0.2, 4))}
                                className={`p-2 rounded-full border transition-all active:scale-95 ${
                                    isDark
                                        ? 'border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white'
                                        : 'border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 shadow-xs'
                                }`}
                                title="Zoom In (+)"
                            >
                                <ZoomIn size={16} />
                            </button>

                            <button
                                onClick={handleReset}
                                className={`p-2 rounded-full border transition-all active:scale-95 ml-1 ${
                                    isDark
                                        ? 'border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white'
                                        : 'border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 shadow-xs'
                                }`}
                                title="Reset View (0)"
                            >
                                <RotateCcw size={15} />
                            </button>

                            <div
                                className={`w-[1px] h-5 mx-1 ${
                                    isDark ? 'bg-white/15' : 'bg-slate-300'
                                }`}
                            />

                            <button
                                onClick={() => setIsFullscreen(false)}
                                className={`p-2 rounded-full border transition-all active:scale-95 ${
                                    isDark
                                        ? 'border-white/20 bg-white/10 hover:bg-red-500/20 hover:border-red-500/40 text-white hover:text-red-400'
                                        : 'border-slate-300 bg-slate-100 hover:bg-red-50 hover:border-red-400 text-slate-700 hover:text-red-600 shadow-xs'
                                }`}
                                title="Close Fullscreen (Esc)"
                            >
                                <X size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Smooth Non-Passive Drag Viewport (Zero Background Scroll) */}
                    <div
                        ref={fullscreenViewportRef}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        className={`flex-1 relative w-full h-full overflow-hidden flex items-center justify-center ${
                            isDragging ? 'cursor-grabbing' : 'cursor-grab'
                        }`}
                        style={{ touchAction: 'none', overscrollBehavior: 'none' }}
                    >
                        {/* GPU Hardware Accelerated SVG Container */}
                        <div
                            style={{
                                transform: `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${zoomLevel})`,
                                transformOrigin: 'center center',
                                willChange: 'transform',
                                transition: isDragging ? 'none' : 'transform 0.08s ease-out'
                            }}
                            dangerouslySetInnerHTML={{ __html: svgContent }}
                            className="select-none pointer-events-none flex items-center justify-center [&>svg]:w-auto [&>svg]:h-auto [&>svg]:min-w-[900px] [&>svg]:max-w-none"
                        />
                    </div>

                    {/* Floating Bottom HUD: Arrow Key Directional Pad & High-Contrast Reference */}
                    <div
                        className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 px-4 py-2.5 rounded-full shadow-2xl border ${
                            isDark
                                ? 'bg-[#0f172a]/95 backdrop-blur-md border-white/15 text-slate-200'
                                : 'bg-white/95 backdrop-blur-md border-slate-300 text-slate-800'
                        }`}
                    >
                        {/* Directional Arrow Buttons */}
                        <div className="flex items-center gap-1">
                            <button
                                onClick={() => handlePanStep(60, 0)}
                                className={`p-1.5 rounded-full active:scale-90 transition-all ${
                                    isDark
                                        ? 'hover:bg-white/10 text-slate-300 hover:text-white'
                                        : 'hover:bg-slate-100 text-slate-600 hover:text-slate-900'
                                }`}
                                title="Pan Left (Arrow Left)"
                            >
                                <ArrowLeft size={16} />
                            </button>

                            <div className="flex flex-col gap-0.5">
                                <button
                                    onClick={() => handlePanStep(0, 60)}
                                    className={`p-1.5 rounded-full active:scale-90 transition-all ${
                                        isDark
                                            ? 'hover:bg-white/10 text-slate-300 hover:text-white'
                                            : 'hover:bg-slate-100 text-slate-600 hover:text-slate-900'
                                    }`}
                                    title="Pan Up (Arrow Up)"
                                >
                                    <ArrowUp size={16} />
                                </button>
                                <button
                                    onClick={() => handlePanStep(0, -60)}
                                    className={`p-1.5 rounded-full active:scale-90 transition-all ${
                                        isDark
                                            ? 'hover:bg-white/10 text-slate-300 hover:text-white'
                                            : 'hover:bg-slate-100 text-slate-600 hover:text-slate-900'
                                    }`}
                                    title="Pan Down (Arrow Down)"
                                >
                                    <ArrowDown size={16} />
                                </button>
                            </div>

                            <button
                                onClick={() => handlePanStep(-60, 0)}
                                className={`p-1.5 rounded-full active:scale-90 transition-all ${
                                    isDark
                                        ? 'hover:bg-white/10 text-slate-300 hover:text-white'
                                        : 'hover:bg-slate-100 text-slate-600 hover:text-slate-900'
                                }`}
                                title="Pan Right (Arrow Right)"
                            >
                                <ArrowRight size={16} />
                            </button>
                        </div>

                        <div
                            className={`w-[1px] h-6 ${
                                isDark ? 'bg-white/15' : 'bg-slate-300'
                            }`}
                        />

                        {/* Quick Keyboard Reference */}
                        <div
                            className={`text-[11px] font-mono flex items-center gap-2 ${
                                isDark ? 'text-slate-300' : 'text-slate-700'
                            }`}
                        >
                            <span className="hidden sm:inline">
                                Use <strong className={isDark ? 'text-white' : 'text-slate-950 font-bold'}>Arrow Keys</strong> or <strong className={isDark ? 'text-white' : 'text-slate-950 font-bold'}>Drag</strong> to pan
                            </span>
                            <span className="hidden sm:inline">•</span>
                            <span>
                                <strong className={isDark ? 'text-white' : 'text-slate-950 font-bold'}>+/-</strong> Zoom
                            </span>
                            <span>•</span>
                            <span>
                                <strong className={isDark ? 'text-white' : 'text-slate-950 font-bold'}>0</strong> Reset
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default MermaidDiagram;
