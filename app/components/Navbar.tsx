// 'use client'
// import { useState, useEffect, useCallback, useRef, RefObject } from 'react'
// import { Home, User, Code, Briefcase, Mail, Menu, X, Sun, Moon } from 'lucide-react'

// // ================= TypeScript 类型定义 =================
// interface Particle {
//   x: number;
//   y: number;
//   vx: number;
//   vy: number;
//   radius: number;
//   update(mouse: Mouse, width: number, height: number): void;
//   draw(ctx: CanvasRenderingContext2D, color: string): void;
// }

// interface Mouse {
//   x: number;
//   y: number;
//   radius: number;
// }

// // ================= 常量 =================
// const MOBILE_BREAKPOINT = 650
// const SCROLL_THROTTLE_MS = 100
// const NAV_ITEMS = [
//   { label: 'Home', href: '#hero', icon: Home },
//   { label: 'About', href: '#about', icon: User },
//   { label: 'Skills', href: '#skills', icon: Code },
//   { label: 'Projects', href: '#work', icon: Briefcase },
//   { label: 'Contact', href: '#contact', icon: Mail },
// ] as const

// // ================= 主题配置 =================
// const THEME_COLORS = {
//   dark: {
//     bgBase: 'rgb(9 12 19)',
//     bgOpacity: 'rgba(9, 12, 19, 0.95)',
//     text: '#f3f4f6',
//     textInactive: '#9ca3af',
//     border: '#374151',
//     activeBg: 'rgba(243, 244, 246, 0.1)',
//     activeText: '#f3f4f6',
//     hoverBg: 'rgba(55, 65, 81, 0.7)',
//     hoverText: '#e5e7eb',
//     particleColor: '#ffffff',
//     lineColor: 'rgba(255, 255, 255, 1)',
//   },
//   light: {
//     bgBase: '#ECECEC',
//     bgOpacity: 'rgba(255, 255, 255, 0.95)',
//     text: '#171717',
//     textInactive: '#6b7280',
//     border: '#d1d5db',
//     activeBg: 'rgba(7, 12, 24, 1)',
//     activeText: '#ffffff',
//     hoverBg: 'rgba(243, 244, 246, 0.9)',
//     hoverText: '#111827',
//     particleColor: '#6f6f6f4e',
//     lineColor: 'rgba(67, 67, 67, 0.5)',
//   },
// }

// // ================= 样式函数 =================
// const getNavStyles = (colors: typeof THEME_COLORS.dark) => ({
//   desktopNav: {
//     position: 'fixed' as const,
//     bottom: '24px',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     zIndex: 50,
//     display: 'flex',
//     gap: '8px',
//     padding: '12px 16px',
//     borderRadius: '9999px',
//     border: `1px solid ${colors.border}`,
//     backgroundColor: colors.bgOpacity,
//     backdropFilter: 'blur(10px)',
//   },
//   navItem: (isActive: boolean) => ({
//     display: 'flex',
//     alignItems: 'center',
//     gap: '6px',
//     padding: '10px 18px',
//     borderRadius: '9999px',
//     backgroundColor: isActive ? colors.activeBg : 'transparent',
//     color: isActive ? colors.activeText : colors.textInactive,
//     textDecoration: 'none',
//     fontWeight: isActive ? '600' : '500',
//     transition: 'all .2s ease',
//     cursor: 'pointer',
//   }),
//   mobileButton: (isOpen: boolean, isDark: boolean) => ({
//     position: 'fixed' as const,
//     bottom: '24px',
//     right: '24px',
//     zIndex: 60,
//     padding: '14px',
//     borderRadius: '9999px',
//     border: `1px solid ${colors.border}`,
//     backgroundColor: isOpen ? isDark ? '#f3f4f6' : '#0a0a0a' : colors.bgOpacity,
//     color: isOpen ? isDark ? '#111827' : '#f3f4f6' : colors.textInactive,
//     backdropFilter: 'blur(10px)',
//   }),
//   mobileMenu: {
//     position: 'fixed' as const,
//     bottom: '80px',
//     right: '24px',
//     zIndex: 55,
//     display: 'flex',
//     flexDirection: 'column' as const,
//     gap: '8px',
//     padding: '12px',
//     borderRadius: '12px',
//     border: `1px solid ${colors.border}`,
//     backgroundColor: colors.bgOpacity,
//   },
//   menuItem: (isActive: boolean) => ({
//     padding: '12px 16px',
//     borderRadius: '8px',
//     backgroundColor: isActive ? colors.activeBg : 'transparent',
//     color: isActive ? colors.activeText : colors.textInactive,
//     textDecoration: 'none',
//   }),
//   themeButton: {
//     position: 'fixed' as const,
//     top: '16px',
//     right: '16px',
//     zIndex: 70,
//     padding: '14px',
//     borderRadius: '9999px',
//     border: `1px solid ${colors.border}`,
//     backgroundColor: colors.bgOpacity,
//     color: colors.textInactive,
//     backdropFilter: 'blur(10px)',
//     cursor: 'pointer',
//   },
//   canvas: {
//     position: 'fixed' as const,
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     zIndex: -1,
//   }
// })

// // ================= 工具函数 =================
// const throttle = <T extends (...args: any[]) => void>(fn: T, delay: number): T => {
//   let last = 0
//   return ((...args: any[]) => {
//     const now = Date.now()
//     if (now - last >= delay) {
//       last = now
//       fn(...args)
//     }
//   }) as T
// }

// // ================= 粒子类定义 =================
// class ParticleClass implements Particle {
//   x: number;
//   y: number;
//   vx: number;
//   vy: number;
//   radius: number;

//   constructor(width: number, height: number) {
//     this.x = Math.random() * width;
//     this.y = Math.random() * height;
//     this.vx = (Math.random() - 0.5) * 0.8;
//     this.vy = (Math.random() - 0.5) * 0.8;
//     this.radius = 2;
//   }

//   update(mouse: Mouse, width: number, height: number) {
//     this.x += this.vx;
//     this.y += this.vy;

//     if (this.x < 0) this.x = width;
//     if (this.x > width) this.x = 0;
//     if (this.y < 0) this.y = height;
//     if (this.y > height) this.y = 0;

//     const dx = this.x - mouse.x;
//     const dy = this.y - mouse.y;
//     const dist = Math.sqrt(dx * dx + dy * dy);
//     if (dist < mouse.radius) {
//       const force = (mouse.radius - dist) / mouse.radius;
//       const forceDirectionX = dx / dist;
//       const forceDirectionY = dy / dist;
//       this.x += forceDirectionX * force * 3;
//       this.y += forceDirectionY * force * 3;
//     }
//   }

//   draw(ctx: CanvasRenderingContext2D, color: string) {
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//     ctx.fillStyle = color;
//     ctx.fill();
//   }
// }

// // ================= 粒子 Canvas Hook =================
// const useParticleCanvas = (canvasRef: RefObject<HTMLCanvasElement>, isDark: boolean) => {
//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return
//     const ctx = canvas.getContext('2d')
//     if (!ctx) return

//     let width: number, height: number;
//     const particles: ParticleClass[] = [];

//     const PARTICLE_DENSITY_AREA = 20000;
//     const MIN_PARTICLE_COUNT = 100;
//     const MAX_LINE_RATIO = 1 / 6;
//     const PARTICLE_COLOR = isDark ? THEME_COLORS.dark.particleColor : THEME_COLORS.light.particleColor;
//     const LINE_COLOR = isDark ? THEME_COLORS.dark.lineColor : THEME_COLORS.light.lineColor;

//     const mouse: Mouse = { x: -1000, y: -1000, radius: 100 };
//     let animationFrameId: number;
//     let currentMaxDistance: number;

//     const resizeCanvas = () => {
//       width = canvas.width = window.innerWidth;
//       height = canvas.height = window.innerHeight;

//       const dynamicParticleCount = Math.max(
//         MIN_PARTICLE_COUNT,
//         Math.floor((width * height) / PARTICLE_DENSITY_AREA)
//       );

//       currentMaxDistance = Math.min(60, width * MAX_LINE_RATIO);

//       particles.length = 0;
//       for (let i = 0; i < dynamicParticleCount; i++) {
//         particles.push(new ParticleClass(width, height));
//       }
//     };

//     window.addEventListener('resize', resizeCanvas);
//     resizeCanvas();

//     const handleMouseMove = (e: MouseEvent) => {
//       mouse.x = e.x;
//       mouse.y = e.y;
//     }

//     const handleMouseLeave = () => {
//       mouse.x = -1000;
//       mouse.y = -1000;
//     }

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('mouseleave', handleMouseLeave);

//     const drawLines = () => {
//       if (!ctx) return;
//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i + 1; j < particles.length; j++) {
//           const p1 = particles[i];
//           const p2 = particles[j];
//           const dx = p1.x - p2.x;
//           const dy = p1.y - p2.y;
//           const dist = Math.sqrt(dx * dx + dy * dy);

//           if (dist < currentMaxDistance) {
//             const opacity = 1 - (dist / currentMaxDistance);
//             const baseRgba = LINE_COLOR.substring(0, LINE_COLOR.lastIndexOf(',') + 1);
//             ctx.strokeStyle = `${baseRgba} ${opacity * 0.3})`;
//             ctx.lineWidth = 1.5;
//             ctx.beginPath();
//             ctx.moveTo(p1.x, p1.y);
//             ctx.lineTo(p2.x, p2.y);
//             ctx.stroke();
//           }
//         }
//       }
//     };

//     const animate = () => {
//       if (!ctx) return;
//       ctx.clearRect(0, 0, width, height);
//       particles.forEach(p => {
//         p.update(mouse, width, height);
//         p.draw(ctx, PARTICLE_COLOR);
//       });
//       drawLines();
//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       window.removeEventListener('resize', resizeCanvas);
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('mouseleave', handleMouseLeave);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, [isDark]);
// }

// // ================= Canvas 组件 =================
// const ParticleCanvas = ({ isDark }: { isDark: boolean }) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   useParticleCanvas(canvasRef as RefObject<HTMLCanvasElement>, isDark);

//   return <canvas ref={canvasRef} style={getNavStyles(THEME_COLORS.dark).canvas} />;
// };

// // ================= Loading 组件 =================
// const LoadingScreen = () => {
//   return (
//     <div style={{
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       width: '100%',
//       height: '100%',
//       backgroundColor: 'rgb(9 12 19)',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       zIndex: 9999,
//       transition: 'opacity 0.3s ease-out',
//     }}>
//       <div style={{
//         width: '48px',
//         height: '48px',
//         border: '4px solid rgba(243, 244, 246, 0.1)',
//         borderTopColor: '#f3f4f6',
//         borderRadius: '50%',
//         animation: 'spin 0.8s linear infinite',
//       }} />
//       <style>{`
//         @keyframes spin {
//           to { transform: rotate(360deg); }
//         }
//       `}</style>
//     </div>
//   );
// };


// export default function Navbar() {
//   const [isInitialized, setIsInitialized] = useState(false)
//   const [isDark, setIsDark] = useState(false)
//   const [activeItem, setActiveItem] = useState('hero')
//   const [isMobile, setIsMobile] = useState(false)
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   useEffect(() => {
//     const saved = localStorage.getItem('theme')
//     let initialIsDark: boolean
//     if (saved === 'dark') initialIsDark = true
//     else if (saved === 'light') initialIsDark = false
//     else initialIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches

//     setIsDark(initialIsDark)
//     const initialColors = initialIsDark ? THEME_COLORS.dark : THEME_COLORS.light
//     document.body.style.backgroundColor = initialColors.bgBase
//     document.body.style.color = initialColors.text

//     const resize = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)
//     resize()
//     window.addEventListener('resize', resize)

//     // 短暂延迟后移除 loading 屏幕
//     const timer = setTimeout(() => setIsInitialized(true), 100)

//     return () => {
//       window.removeEventListener('resize', resize)
//       clearTimeout(timer)
//     }
//   }, [])

//   useEffect(() => {
//     if (!isInitialized) return
//     document.body.style.backgroundColor = isDark ? THEME_COLORS.dark.bgBase : THEME_COLORS.light.bgBase
//     document.body.style.color = isDark ? THEME_COLORS.dark.text : THEME_COLORS.light.text
//   }, [isDark, isInitialized])

//   const toggleTheme = useCallback(() => {
//     setIsDark(prev => {
//       const next = !prev
//       localStorage.setItem('theme', next ? 'dark' : 'light')
//       return next
//     })
//   }, [])

//   const colors = isDark ? THEME_COLORS.dark : THEME_COLORS.light
//   const styles = getNavStyles(colors)

//   // 滚动监听
//   useEffect(() => {
//     if (!isInitialized) return
    
//     const onScroll = throttle(() => {
//       for (const item of NAV_ITEMS) {
//         const id = item.href.slice(1)
//         const el = document.getElementById(id)
//         if (!el) continue
//         const rect = el.getBoundingClientRect()
//         if (rect.top <= 120 && rect.bottom >= 120) {
//           setActiveItem(id)
//           break
//         }
//       }
//     }, SCROLL_THROTTLE_MS)

//     window.addEventListener('scroll', onScroll, { passive: true })
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [isInitialized])

//   const handleNavClick = (href: string) => {
//     document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
//     setIsMenuOpen(false)
//   }

//   // 显示 loading 屏幕
//   if (!isInitialized) {
//     return <LoadingScreen />
//   }

//   return (
//     <>
//       {/* 1. 粒子背景 Canvas */}
//       {/* <ParticleCanvas isDark={isDark} /> */}
//           {isDark && <ParticleCanvas isDark={isDark} />}


//       {/* 2. 导航栏和主题切换按钮 */}
//       {!isMobile && (
//         <nav style={styles.desktopNav}>
//           {NAV_ITEMS.map(({ label, href, icon: Icon }) => {
//             const active = activeItem === href.slice(1)
//             return (
//               <a
//                 key={href}
//                 onClick={() => handleNavClick(href)}
//                 style={styles.navItem(active)}>
//                 <Icon size={18} />
//                 {label}
//               </a>
//             )
//           })}
//         </nav>
//       )}

//       {isMobile && (
//         <button
//           onClick={() => setIsMenuOpen(v => !v)}
//           style={styles.mobileButton(isMenuOpen, isDark)}
//         >
//           {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
//         </button>
//       )}

//       {isMobile && isMenuOpen && (
//         <div style={styles.mobileMenu}>
//           {NAV_ITEMS.map(({ label, href }) => (
//             <a
//               key={href}
//               onClick={() => handleNavClick(href)}
//               style={styles.menuItem(activeItem === href.slice(1))}>
//               {label}
//             </a>
//           ))}
//         </div>
//       )}

//       <button onClick={toggleTheme} style={styles.themeButton}>
//         {isDark ? <Sun size={20} /> : <Moon size={20} />}
//       </button>
//     </>
//   )
// }

'use client'
import { useState, useEffect, useCallback, useRef, RefObject } from 'react'
import { useRouter, usePathname } from 'next/navigation' // 添加 usePathname
import { Home, User, Code, Briefcase, Mail, Menu, X, Sun, Moon } from 'lucide-react'

// ================= TypeScript 类型定义 =================
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  update(mouse: Mouse, width: number, height: number): void;
  draw(ctx: CanvasRenderingContext2D, color: string): void;
}

interface Mouse {
  x: number;
  y: number;
  radius: number;
}

// ================= 常量 =================
const MOBILE_BREAKPOINT = 650
const SCROLL_THROTTLE_MS = 100
const NAV_ITEMS = [
  { label: 'Home', href: '#hero', icon: Home },
  { label: 'About', href: '#about', icon: User },
  { label: 'Skills', href: '#skills', icon: Code },
  { label: 'Projects', href: '#work', icon: Briefcase },
  { label: 'Contact', href: '#contact', icon: Mail },
] as const

// ================= 主题配置 =================
const THEME_COLORS = {
  dark: {
    bgBase: 'rgb(9 12 19)',
    bgOpacity: 'rgba(9, 12, 19, 0.95)',
    text: '#f3f4f6',
    textInactive: '#9ca3af',
    border: '#374151',
    activeBg: 'rgba(243, 244, 246, 0.1)',
    activeText: '#f3f4f6',
    hoverBg: 'rgba(55, 65, 81, 0.7)',
    hoverText: '#e5e7eb',
    particleColor: '#ffffff',
    lineColor: 'rgba(255, 255, 255, 1)',
  },
  light: {
    bgBase: '#ECECEC',
    bgOpacity: 'rgba(255, 255, 255, 0.95)',
    text: '#171717',
    textInactive: '#6b7280',
    border: '#d1d5db',
    activeBg: 'rgba(7, 12, 24, 1)',
    activeText: '#ffffff',
    hoverBg: 'rgba(243, 244, 246, 0.9)',
    hoverText: '#111827',
    particleColor: '#6f6f6f4e',
    lineColor: 'rgba(67, 67, 67, 0.5)',
  },
}

// ================= 样式函数 =================
const getNavStyles = (colors: typeof THEME_COLORS.dark) => ({
  desktopNav: {
    position: 'fixed' as const,
    bottom: '24px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 50,
    display: 'flex',
    gap: '8px',
    padding: '12px 16px',
    borderRadius: '9999px',
    border: `1px solid ${colors.border}`,
    backgroundColor: colors.bgOpacity,
    backdropFilter: 'blur(10px)',
  },
  navItem: (isActive: boolean) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '10px 18px',
    borderRadius: '9999px',
    backgroundColor: isActive ? colors.activeBg : 'transparent',
    color: isActive ? colors.activeText : colors.textInactive,
    textDecoration: 'none',
    fontWeight: isActive ? '600' : '500',
    transition: 'all .2s ease',
    cursor: 'pointer',
  }),
  mobileButton: (isOpen: boolean, isDark: boolean) => ({
    position: 'fixed' as const,
    bottom: '24px',
    right: '24px',
    zIndex: 60,
    padding: '14px',
    borderRadius: '9999px',
    border: `1px solid ${colors.border}`,
    backgroundColor: isOpen ? isDark ? '#f3f4f6' : '#0a0a0a' : colors.bgOpacity,
    color: isOpen ? isDark ? '#111827' : '#f3f4f6' : colors.textInactive,
    backdropFilter: 'blur(10px)',
  }),
  mobileMenu: {
    position: 'fixed' as const,
    bottom: '80px',
    right: '24px',
    zIndex: 55,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px',
    padding: '12px',
    borderRadius: '12px',
    border: `1px solid ${colors.border}`,
    backgroundColor: colors.bgOpacity,
  },
  menuItem: (isActive: boolean) => ({
    padding: '12px 16px',
    borderRadius: '8px',
    backgroundColor: isActive ? colors.activeBg : 'transparent',
    color: isActive ? colors.activeText : colors.textInactive,
    textDecoration: 'none',
  }),
  themeButton: {
    position: 'fixed' as const,
    top: '16px',
    right: '16px',
    zIndex: 70,
    padding: '14px',
    borderRadius: '9999px',
    border: `1px solid ${colors.border}`,
    backgroundColor: colors.bgOpacity,
    color: colors.textInactive,
    backdropFilter: 'blur(10px)',
    cursor: 'pointer',
  },
  themeButtonMobile: {
    position: 'fixed' as const,
    top: '16px',
    right: '16px',
    zIndex: 70,
    padding: '10px',
    borderRadius: '9999px',
    border: `1px solid ${colors.border}`,
    backgroundColor: colors.bgOpacity,
    color: colors.textInactive,
    backdropFilter: 'blur(10px)',
    cursor: 'pointer',
  },
  canvas: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  }
})

// ================= 工具函数 =================
const throttle = <T extends (...args: any[]) => void>(fn: T, delay: number): T => {
  let last = 0
  return ((...args: any[]) => {
    const now = Date.now()
    if (now - last >= delay) {
      last = now
      fn(...args)
    }
  }) as T
}

// ================= 粒子类定义 =================
class ParticleClass implements Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;

  constructor(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 0.8;
    this.vy = (Math.random() - 0.5) * 0.8;
    this.radius = 2;
  }

  update(mouse: Mouse, width: number, height: number) {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;

    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < mouse.radius) {
      const force = (mouse.radius - dist) / mouse.radius;
      const forceDirectionX = dx / dist;
      const forceDirectionY = dy / dist;
      this.x += forceDirectionX * force * 3;
      this.y += forceDirectionY * force * 3;
    }
  }

  draw(ctx: CanvasRenderingContext2D, color: string) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }
}

// ================= 粒子 Canvas Hook =================
const useParticleCanvas = (canvasRef: RefObject<HTMLCanvasElement>, isDark: boolean) => {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width: number, height: number;
    const particles: ParticleClass[] = [];

    const PARTICLE_DENSITY_AREA = 20000;
    const MIN_PARTICLE_COUNT = 100;
    const MAX_LINE_RATIO = 1 / 6;
    const PARTICLE_COLOR = isDark ? THEME_COLORS.dark.particleColor : THEME_COLORS.light.particleColor;
    const LINE_COLOR = isDark ? THEME_COLORS.dark.lineColor : THEME_COLORS.light.lineColor;

    const mouse: Mouse = { x: -1000, y: -1000, radius: 100 };
    let animationFrameId: number;
    let currentMaxDistance: number;

    const resizeCanvas = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;

      const dynamicParticleCount = Math.max(
        MIN_PARTICLE_COUNT,
        Math.floor((width * height) / PARTICLE_DENSITY_AREA)
      );

      currentMaxDistance = Math.min(60, width * MAX_LINE_RATIO);

      particles.length = 0;
      for (let i = 0; i < dynamicParticleCount; i++) {
        particles.push(new ParticleClass(width, height));
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.x;
      mouse.y = e.y;
    }

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const drawLines = () => {
      if (!ctx) return;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < currentMaxDistance) {
            const opacity = 1 - (dist / currentMaxDistance);
            const baseRgba = LINE_COLOR.substring(0, LINE_COLOR.lastIndexOf(',') + 1);
            ctx.strokeStyle = `${baseRgba} ${opacity * 0.3})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update(mouse, width, height);
        p.draw(ctx, PARTICLE_COLOR);
      });
      drawLines();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);
}

// ================= Canvas 组件 =================
const ParticleCanvas = ({ isDark }: { isDark: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useParticleCanvas(canvasRef as RefObject<HTMLCanvasElement>, isDark);

  return <canvas ref={canvasRef} style={getNavStyles(THEME_COLORS.dark).canvas} />;
};

// ================= Loading 组件 =================
const LoadingScreen = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgb(9 12 19)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      transition: 'opacity 0.3s ease-out',
    }}>
      <div style={{
        width: '48px',
        height: '48px',
        border: '4px solid rgba(243, 244, 246, 0.1)',
        borderTopColor: '#f3f4f6',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }} />
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};


export default function Navbar() {
  const [isInitialized, setIsInitialized] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [activeItem, setActiveItem] = useState('hero')
  const [isMobile, setIsMobile] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const router = useRouter()
  const pathname = usePathname() // 获取当前路径

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    let initialIsDark: boolean
    if (saved === 'dark') initialIsDark = true
    else if (saved === 'light') initialIsDark = false
    else initialIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    setIsDark(initialIsDark)
    const initialColors = initialIsDark ? THEME_COLORS.dark : THEME_COLORS.light
    document.body.style.backgroundColor = initialColors.bgBase
    document.body.style.color = initialColors.text

    const resize = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)
    resize()
    window.addEventListener('resize', resize)

    const timer = setTimeout(() => setIsInitialized(true), 100)

    return () => {
      window.removeEventListener('resize', resize)
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (!isInitialized) return
    document.body.style.backgroundColor = isDark ? THEME_COLORS.dark.bgBase : THEME_COLORS.light.bgBase
    document.body.style.color = isDark ? THEME_COLORS.dark.text : THEME_COLORS.light.text
  }, [isDark, isInitialized])

  const toggleTheme = useCallback(() => {
    setIsDark(prev => {
      const next = !prev
      localStorage.setItem('theme', next ? 'dark' : 'light')
      return next
    })
  }, [])

  const colors = isDark ? THEME_COLORS.dark : THEME_COLORS.light
  const styles = getNavStyles(colors)

  // 滚动监听（仅在主页启用）
  useEffect(() => {
    if (!isInitialized || pathname !== '/') return
    
    const onScroll = throttle(() => {
      for (const item of NAV_ITEMS) {
        const id = item.href.slice(1)
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveItem(id)
          break
        }
      }
    }, SCROLL_THROTTLE_MS)

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isInitialized, pathname])

  // 🔧 修复：处理导航点击
  // const handleNavClick = (href: string) => {
  //   const targetId = href.slice(1) // 移除 #
    
  //   // 如果不在主页，先跳转到主页再滚动
  //   if (pathname !== '/') {
  //     router.push(`/${href}`)
  //   } else {
  //     // 在主页直接滚动
  //     document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
  //   }
    
  //   setIsMenuOpen(false)
  // }

  const handleNavClick = (href: string) => {
  const targetId = href.slice(1)

  if (pathname !== '/') {
    // ① 先跳转主页，带 hash
    router.push(`/#${targetId}`)
    setIsMenuOpen(false)
    return
  }

  // ② 已经在主页，直接滚
  const target = document.getElementById(targetId)
  if (!target) return

  const yOffset = 40
  const y =
    target.getBoundingClientRect().top + window.pageYOffset + yOffset

  window.scrollTo({ top: y, behavior: 'smooth' })
  setIsMenuOpen(false)
}


  if (!isInitialized) {
    return <LoadingScreen />
  }

  return (
    <>
      {/* 粒子背景 Canvas */}
      {isDark && <ParticleCanvas isDark={isDark} />}

      {/* 桌面导航 */}
      {!isMobile && (
        <nav style={styles.desktopNav}>
          {NAV_ITEMS.map(({ label, href, icon: Icon }) => {
            const active = activeItem === href.slice(1)
            return (
              <a
                key={href}
                onClick={() => handleNavClick(href)}
                style={styles.navItem(active)}>
                <Icon size={18} />
                {label}
              </a>
            )
          })}
        </nav>
      )}

      {/* 移动端菜单按钮 */}
      {isMobile && (
        <button
          onClick={() => setIsMenuOpen(v => !v)}
          style={styles.mobileButton(isMenuOpen, isDark)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      )}

      {/* 移动端菜单 */}
      {isMobile && isMenuOpen && (
        <div style={styles.mobileMenu}>
          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={href}
              onClick={() => handleNavClick(href)}
              style={styles.menuItem(activeItem === href.slice(1))}>
              {label}
            </a>
          ))}
        </div>
      )}

      {/* 主题切换按钮 */}
      <button onClick={toggleTheme} style={styles.themeButtonMobile}>
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </>
  )
}