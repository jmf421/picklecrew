// PickleCrew — Shared UI Components
// Export all to window for use in Screens.jsx

const PC = {
  navy950: '#0d1b29',
  navy900: '#102135',
  navy800: '#162d47',
  navy700: '#1c3858',
  navy600: '#204160',
  navy500: '#2b5580',
  navy400: '#3d6f9e',
  navy300: '#6191b8',
  navy200: '#93b5cf',
  navy100: '#c4d8e8',
  navy50:  '#e8f1f8',
  blue500: '#2090d0',
  blue400: '#3aa8e0',
  blue300: '#6cc0ec',
  blue100: '#ceeaf9',
  blue50:  '#e8f5fd',
  neutral50:  '#f4f4f8',
  neutral100: '#e4e4ec',
  neutral200: '#c8c8d4',
  neutral300: '#a4a4b4',
  neutral400: '#7e7e8e',
  neutral500: '#5e5e6e',
  success:  '#22a05e',
  success50:'#d1f5e3',
  danger:   '#e03a3a',
  danger50: '#fde8e8',
  fire:     '#f55a20',
  gold:     '#f0c040',
  white:    '#ffffff',
};

// ── Tokens
const pcTokens = {
  fontDisplay: "'Barlow Condensed', sans-serif",
  fontBody:    "'Inter', sans-serif",
  fontAlt:     "'Barlow', sans-serif",
  radiusSm: 4, radiusMd: 8, radiusLg: 12, radiusXl: 16, radius2xl: 24, radiusFull: 9999,
  shadowMd: '0 4px 12px rgba(32,65,96,.12), 0 2px 4px rgba(32,65,96,.08)',
  shadowLg: '0 8px 24px rgba(32,65,96,.16)',
};

// ── AppBar
function AppBar({ title, onBack, rightAction, dark = false }) {
  const bg = dark ? PC.navy950 : PC.navy600;
  return (
    <div style={{
      height: 56, background: bg, display: 'flex', alignItems: 'center',
      padding: '0 8px', gap: 4, flexShrink: 0, position: 'relative',
      borderBottom: dark ? `1px solid ${PC.navy800}` : 'none',
    }}>
      {onBack && (
        <button onClick={onBack} style={{
          width: 40, height: 40, borderRadius: '50%', border: 'none',
          background: 'transparent', color: PC.white, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
      )}
      {!onBack && <div style={{width: 40, flexShrink: 0}}/>}
      <div style={{
        flex: 1, textAlign: 'center',
        fontFamily: pcTokens.fontDisplay, fontSize: 18, fontWeight: 700,
        letterSpacing: '0.04em', textTransform: 'uppercase', color: PC.white,
      }}>{title}</div>
      <div style={{width: 40, flexShrink: 0, display:'flex', justifyContent:'flex-end'}}>
        {rightAction}
      </div>
    </div>
  );
}

// ── BottomNav
function BottomNav({ active, onNav }) {
  const tabs = [
    { id: 'home',    label: 'Home',    icon: HomeIcon },
    { id: 'groups',  label: 'Groups',  icon: UsersIcon },
    { id: 'log',     label: 'Log',     icon: null, fab: true },
    { id: 'events',  label: 'Events',  icon: CalIcon },
    { id: 'profile', label: 'Profile', icon: UserIcon },
  ];
  return (
    <div style={{
      height: 70, background: PC.white, borderTop: `1px solid ${PC.neutral100}`,
      display: 'flex', flexShrink: 0,
      boxShadow: '0 -2px 12px rgba(32,65,96,.08)',
    }}>
      {tabs.map(t => (
        <button key={t.id} onClick={() => onNav(t.id)} style={{
          flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', gap: 3, border: 'none', background: 'transparent',
          cursor: 'pointer', position: 'relative', paddingBottom: 8,
          color: active === t.id ? PC.blue500 : PC.neutral300,
        }}>
          {active === t.id && !t.fab && (
            <div style={{
              position: 'absolute', top: 0, left: '30%', right: '30%',
              height: 2, background: PC.blue500, borderRadius: '0 0 2px 2px',
            }}/>
          )}
          {t.fab ? (
            <div style={{
              width: 50, height: 50, borderRadius: '50%', background: PC.blue500,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(32,144,208,0.5)',
              marginTop: -18, color: PC.white, flexShrink: 0,
            }}>
              <PlusIcon size={24} color={PC.white}/>
            </div>
          ) : (
            <t.icon size={22} color={active === t.id ? PC.blue500 : PC.neutral300}/>
          )}
          <span style={{
            fontSize: 10, fontWeight: 600, fontFamily: pcTokens.fontBody,
            color: t.fab ? PC.blue500 : undefined,
          }}>{t.label}</span>
        </button>
      ))}
    </div>
  );
}

// ── Avatar
function Avatar({ initials, size = 36, color = PC.navy600, textColor = PC.white, img }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', flexShrink: 0,
      background: img ? 'transparent' : `linear-gradient(135deg, ${color}, ${PC.blue500})`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: size * 0.35, fontWeight: 700, color: textColor,
      fontFamily: pcTokens.fontDisplay, overflow: 'hidden',
    }}>
      {img ? <img src={img} style={{width:'100%',height:'100%',objectFit:'cover'}}/> : initials}
    </div>
  );
}

// ── Chip/Tag
function Chip({ children, color = PC.navy50, textColor = PC.navy600, size = 'sm' }) {
  const pad = size === 'sm' ? '2px 8px' : '4px 12px';
  const fs  = size === 'sm' ? 10 : 12;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      padding: pad, borderRadius: 9999,
      background: color, color: textColor,
      fontSize: fs, fontWeight: 600, fontFamily: pcTokens.fontBody,
      whiteSpace: 'nowrap',
    }}>{children}</span>
  );
}

// ── Card
function Card({ children, style = {}, onClick }) {
  return (
    <div onClick={onClick} style={{
      background: PC.white, borderRadius: pcTokens.radiusLg,
      border: `1px solid ${PC.neutral100}`,
      boxShadow: pcTokens.shadowMd,
      overflow: 'hidden', cursor: onClick ? 'pointer' : 'default',
      ...style,
    }}>{children}</div>
  );
}

// ── Section Header
function SectionHeader({ title, action, actionLabel }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      marginBottom: 10,
    }}>
      <span style={{
        fontFamily: pcTokens.fontDisplay, fontSize: 18, fontWeight: 700,
        textTransform: 'uppercase', letterSpacing: '0.04em', color: PC.navy600,
      }}>{title}</span>
      {action && (
        <button onClick={action} style={{
          border: 'none', background: 'none', cursor: 'pointer',
          fontSize: 12, fontWeight: 600, color: PC.blue500, fontFamily: pcTokens.fontBody,
        }}>{actionLabel || 'See all'}</button>
      )}
    </div>
  );
}

// ── ELO Sparkline (simple SVG)
function Sparkline({ data, color = PC.blue500, width = 80, height = 28 }) {
  const min = Math.min(...data), max = Math.max(...data);
  const range = max - min || 1;
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((v - min) / range) * height;
    return `${x},${y}`;
  }).join(' ');
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ── Win/Loss Bar
function WinLossBar({ wins, losses }) {
  const total = wins + losses || 1;
  const pct = (wins / total) * 100;
  return (
    <div style={{display:'flex', flexDirection:'column', gap:3}}>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <span style={{fontSize:10,fontWeight:600,color:PC.success,fontFamily:pcTokens.fontBody}}>{wins}W</span>
        <span style={{fontSize:10,fontWeight:600,color:PC.danger,fontFamily:pcTokens.fontBody}}>{losses}L</span>
      </div>
      <div style={{height:5, borderRadius:9999, background:PC.danger50, overflow:'hidden'}}>
        <div style={{width:`${pct}%`, height:'100%', background:PC.success, borderRadius:9999}}/>
      </div>
    </div>
  );
}

// ── Simple SVG Icons
function HomeIcon({ size=22, color=PC.navy600 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
}
function UsersIcon({ size=22, color=PC.navy600 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>;
}
function CalIcon({ size=22, color=PC.navy600 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
}
function UserIcon({ size=22, color=PC.navy600 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
}
function PlusIcon({ size=22, color=PC.white }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
}
function BellIcon({ size=20, color=PC.white }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>;
}
function TrophyIcon({ size=20, color=PC.gold }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"/></svg>;
}
function ZapIcon({ size=20, color=PC.blue500 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
}
function FlameIcon({ size=20, color=PC.fire }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 01-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"/></svg>;
}
function ChevronRightIcon({ size=16, color=PC.neutral300 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>;
}
function CheckIcon({ size=16, color=PC.success }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;
}

Object.assign(window, {
  PC, pcTokens,
  AppBar, BottomNav, Avatar, Chip, Card, SectionHeader,
  Sparkline, WinLossBar, WinLossBar,
  HomeIcon, UsersIcon, CalIcon, UserIcon, PlusIcon,
  BellIcon, TrophyIcon, ZapIcon, FlameIcon,
  ChevronRightIcon, CheckIcon,
});
