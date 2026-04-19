// PickleCrew — Screen Implementations
// Requires Components.jsx loaded first (window exports)

// ── HomeScreen
function HomeScreen({ onNav }) {
  const eloData = [1200,1210,1195,1225,1238,1230,1247,1260,1247];
  return (
    <div style={{flex:1, overflowY:'auto', background:PC.neutral50}}>
      {/* Hero band */}
      <div style={{background:PC.navy600, padding:'16px 16px 24px'}}>
        <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:16}}>
          <Avatar initials="AJ" size={44}/>
          <div style={{flex:1}}>
            <div style={{fontFamily:pcTokens.fontBody, fontSize:12, color:PC.navy200, fontWeight:500}}>Welcome back,</div>
            <div style={{fontFamily:pcTokens.fontDisplay, fontSize:20, fontWeight:700, color:PC.white, textTransform:'uppercase', letterSpacing:'0.04em'}}>Alex Johnson</div>
          </div>
          <button style={{width:36,height:36,borderRadius:'50%',border:'none',background:'rgba(255,255,255,0.12)',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',position:'relative'}} onClick={()=>{}}>
            <BellIcon size={18} color={PC.white}/>
            <div style={{position:'absolute',top:6,right:6,width:7,height:7,borderRadius:'50%',background:PC.fire,border:`1.5px solid ${PC.navy600}`}}/>
          </button>
        </div>
        {/* ELO card */}
        <div style={{background:'rgba(255,255,255,0.10)',borderRadius:pcTokens.radiusXl,padding:'14px 16px',display:'flex',alignItems:'center',gap:12}}>
          <div style={{flex:1}}>
            <div style={{fontFamily:pcTokens.fontBody,fontSize:10,fontWeight:600,letterSpacing:'0.1em',textTransform:'uppercase',color:PC.navy200,marginBottom:4}}>ELO Rating</div>
            <div style={{display:'flex',alignItems:'baseline',gap:6}}>
              <span style={{fontFamily:pcTokens.fontDisplay,fontSize:44,fontWeight:900,color:PC.white,lineHeight:1}}>1247</span>
              <span style={{fontFamily:pcTokens.fontBody,fontSize:13,fontWeight:600,color:PC.blue300}}>↑ +15</span>
            </div>
            <div style={{display:'flex',gap:8,marginTop:6}}>
              <Chip color="rgba(255,255,255,0.15)" textColor={PC.white}>14W / 4L</Chip>
              <Chip color="rgba(32,144,208,0.3)" textColor={PC.blue300}>67% Win Rate</Chip>
            </div>
          </div>
          <Sparkline data={eloData} color={PC.blue300} width={88} height={36}/>
        </div>
      </div>

      <div style={{padding:'16px 16px 0'}}>
        {/* Looking for Game */}
        <Card style={{marginBottom:14, background:PC.navy950, border:`1px solid ${PC.navy800}`}}>
          <div style={{padding:'12px 14px', display:'flex', alignItems:'center', gap:10}}>
            <div style={{width:10,height:10,borderRadius:'50%',background:PC.success,boxShadow:`0 0 0 3px rgba(34,160,94,0.3)`,flexShrink:0}}/>
            <div style={{flex:1}}>
              <span style={{fontFamily:pcTokens.fontBody,fontSize:13,fontWeight:600,color:PC.white}}>3 players looking for a game</span>
              <div style={{display:'flex',marginTop:4,gap:-6}}>
                {['AJ','MR','ST'].map((init,i) => (
                  <div key={i} style={{marginLeft:i>0?-8:0,zIndex:3-i,position:'relative'}}>
                    <Avatar initials={init} size={22} color={[PC.navy600,PC.navy500,PC.navy400][i]}/>
                  </div>
                ))}
              </div>
            </div>
            <button style={{background:PC.blue500,color:PC.white,border:'none',borderRadius:9999,padding:'6px 14px',fontSize:12,fontWeight:600,fontFamily:pcTokens.fontBody,cursor:'pointer'}}>I'm In</button>
          </div>
        </Card>

        {/* Recent games */}
        <SectionHeader title="Recent Games" action={()=>onNav('groups')} actionLabel="See all"/>
        {[
          {t1:['AJ','MR'],t2:['ST','DK'],s1:11,s2:7,win:true,ago:'2h ago',format:'Doubles'},
          {t1:['AJ'],t2:['BR'],s1:8,s2:11,win:false,ago:'Yesterday',format:'Singles'},
        ].map((g,i) => (
          <Card key={i} style={{marginBottom:10}} onClick={()=>{}}>
            <div style={{padding:'12px 14px'}}>
              <div style={{display:'flex',justifyContent:'space-between',marginBottom:8}}>
                <span style={{fontFamily:pcTokens.fontBody,fontSize:10,fontWeight:600,letterSpacing:'0.06em',textTransform:'uppercase',color:PC.neutral400}}>{g.format} · {g.ago}</span>
                <Chip color={g.win?PC.success50:PC.danger50} textColor={g.win?PC.success:PC.danger}>{g.win?'WIN':'LOSS'}</Chip>
              </div>
              <div style={{display:'flex',alignItems:'center',gap:8}}>
                <div style={{flex:1,display:'flex',gap:4}}>
                  {g.t1.map((p,j)=><Avatar key={j} initials={p} size={28}/>)}
                </div>
                <div style={{display:'flex',alignItems:'center',gap:6}}>
                  <span style={{fontFamily:pcTokens.fontDisplay,fontSize:32,fontWeight:900,color:g.win?PC.navy600:PC.navy300,lineHeight:1}}>{g.s1}</span>
                  <span style={{fontFamily:pcTokens.fontBody,fontSize:14,fontWeight:700,color:PC.neutral200}}>–</span>
                  <span style={{fontFamily:pcTokens.fontDisplay,fontSize:32,fontWeight:900,color:g.win?PC.navy300:PC.navy600,lineHeight:1}}>{g.s2}</span>
                </div>
                <div style={{flex:1,display:'flex',justifyContent:'flex-end',gap:4}}>
                  {g.t2.map((p,j)=><Avatar key={j} initials={p} size={28}/>)}
                </div>
              </div>
            </div>
          </Card>
        ))}

        {/* Upcoming event */}
        <SectionHeader title="Next Up" action={()=>onNav('events')}/>
        <Card style={{marginBottom:20}}>
          <div style={{background:PC.navy600,padding:'10px 14px',display:'flex',alignItems:'center',gap:10}}>
            <div style={{background:'rgba(255,255,255,0.15)',borderRadius:8,padding:'6px 10px',textAlign:'center',minWidth:40}}>
              <div style={{fontFamily:pcTokens.fontDisplay,fontSize:20,fontWeight:900,color:PC.white,lineHeight:1}}>26</div>
              <div style={{fontFamily:pcTokens.fontBody,fontSize:9,fontWeight:600,color:PC.navy200,letterSpacing:'0.08em',textTransform:'uppercase'}}>APR</div>
            </div>
            <div style={{flex:1}}>
              <div style={{fontFamily:pcTokens.fontBody,fontSize:13,fontWeight:600,color:PC.white}}>Saturday Smashers Open</div>
              <div style={{fontFamily:pcTokens.fontBody,fontSize:11,color:PC.navy200,marginTop:2}}>10:00 AM · Riverside Courts · 8 going</div>
            </div>
            <button style={{background:PC.blue500,color:PC.white,border:'none',borderRadius:9999,padding:'6px 12px',fontSize:11,fontWeight:600,fontFamily:pcTokens.fontBody,cursor:'pointer'}}>RSVP</button>
          </div>
        </Card>
      </div>
    </div>
  );
}

// ── GroupsScreen
function GroupsScreen({ onSelect }) {
  const groups = [
    {name:'Saturday Smashers', members:12, wins:14, rank:1, streak:3},
    {name:'Tuesday Evening Crew', members:8, wins:9, rank:2, streak:1},
    {name:'Riverside Regulars', members:16, wins:21, rank:1, streak:5},
  ];
  return (
    <div style={{flex:1, overflowY:'auto', background:PC.neutral50, padding:16}}>
      <SectionHeader title="My Groups"/>
      {groups.map((g,i) => (
        <Card key={i} style={{marginBottom:10}} onClick={()=>onSelect(g)}>
          <div style={{padding:'14px 16px', display:'flex', alignItems:'center', gap:12}}>
            <div style={{
              width:44, height:44, borderRadius:pcTokens.radiusMd, flexShrink:0,
              background:`linear-gradient(135deg, ${PC.navy700}, ${PC.navy500})`,
              display:'flex', alignItems:'center', justifyContent:'center',
              fontFamily:pcTokens.fontDisplay, fontSize:18, fontWeight:900,
              color:PC.white, textTransform:'uppercase',
            }}>{g.name[0]}</div>
            <div style={{flex:1}}>
              <div style={{fontFamily:pcTokens.fontBody,fontSize:14,fontWeight:600,color:PC.navy600}}>{g.name}</div>
              <div style={{fontFamily:pcTokens.fontBody,fontSize:11,color:PC.neutral400,marginTop:2}}>{g.members} members · {g.wins} games</div>
              {g.streak > 1 && (
                <div style={{display:'flex',alignItems:'center',gap:3,marginTop:4}}>
                  <FlameIcon size={12} color={PC.fire}/>
                  <span style={{fontSize:10,fontWeight:600,color:PC.fire,fontFamily:pcTokens.fontBody}}>{g.streak}-week streak</span>
                </div>
              )}
            </div>
            <ChevronRightIcon/>
          </div>
        </Card>
      ))}
      <button style={{
        width:'100%', height:48, borderRadius:pcTokens.radiusLg,
        border:`1.5px dashed ${PC.neutral200}`, background:'transparent',
        color:PC.neutral400, fontFamily:pcTokens.fontBody, fontSize:13, fontWeight:600,
        cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:6,
      }}>
        <PlusIcon size={16} color={PC.neutral400}/> Create or Join Group
      </button>
    </div>
  );
}

// ── GroupDetailScreen
function GroupDetailScreen({ group, onBack }) {
  const [tab, setTab] = React.useState('leaderboard');
  const leaders = [
    {init:'AJ',name:'Alex J.',wins:14,losses:4,elo:1247,rank:1},
    {init:'MR',name:'Mike R.',wins:11,losses:5,elo:1198,rank:2},
    {init:'ST',name:'Sam T.',wins:9,losses:7,elo:1155,rank:3},
    {init:'DK',name:'Dana K.',wins:7,losses:9,elo:1112,rank:4},
    {init:'BR',name:'Brett R.',wins:5,losses:11,elo:1089,rank:5},
  ];
  return (
    <div style={{flex:1, overflowY:'auto', background:PC.neutral50}}>
      <div style={{background:PC.navy600, padding:'16px 16px 20px'}}>
        <button onClick={onBack} style={{background:'none',border:'none',cursor:'pointer',color:PC.navy200,padding:0,display:'flex',alignItems:'center',gap:4,marginBottom:10}}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
          <span style={{fontFamily:pcTokens.fontBody,fontSize:12,fontWeight:600}}>Groups</span>
        </button>
        <div style={{fontFamily:pcTokens.fontDisplay,fontSize:26,fontWeight:900,textTransform:'uppercase',letterSpacing:'0.04em',color:PC.white}}>{group?.name||'Saturday Smashers'}</div>
        <div style={{display:'flex',gap:8,marginTop:8}}>
          <Chip color="rgba(255,255,255,0.15)" textColor={PC.white}>12 Members</Chip>
          <Chip color="rgba(32,144,208,0.3)" textColor={PC.blue300}><FlameIcon size={10} color={PC.blue300}/>&nbsp;3-Week Streak</Chip>
        </div>
      </div>

      {/* Tabs */}
      <div style={{display:'flex',background:PC.white,borderBottom:`1px solid ${PC.neutral100}`}}>
        {['leaderboard','games','events'].map(t=>(
          <button key={t} onClick={()=>setTab(t)} style={{
            flex:1, height:44, border:'none', background:'none', cursor:'pointer',
            fontFamily:pcTokens.fontBody, fontSize:12, fontWeight:600,
            textTransform:'uppercase', letterSpacing:'0.06em',
            color: tab===t ? PC.blue500 : PC.neutral400,
            borderBottom: tab===t ? `2px solid ${PC.blue500}` : '2px solid transparent',
          }}>{t}</button>
        ))}
      </div>

      <div style={{padding:16}}>
        {tab==='leaderboard' && leaders.map((p,i) => (
          <div key={i} style={{
            display:'flex', alignItems:'center', gap:10,
            padding:'10px 14px', background:PC.white,
            borderRadius: i===0?`${pcTokens.radiusLg}px ${pcTokens.radiusLg}px 0 0`:i===leaders.length-1?`0 0 ${pcTokens.radiusLg}px ${pcTokens.radiusLg}px`:'0',
            borderBottom: i<leaders.length-1 ? `1px solid ${PC.neutral50}` : 'none',
            boxShadow: i===0 ? pcTokens.shadowMd : 'none',
          }}>
            <div style={{
              width:22, height:22, borderRadius:'50%', flexShrink:0,
              background: p.rank===1?PC.gold:p.rank===2?PC.neutral200:p.rank===3?'#cd7f32':'transparent',
              display:'flex', alignItems:'center', justifyContent:'center',
              fontFamily:pcTokens.fontDisplay, fontSize:12, fontWeight:900,
              color: p.rank<=3?'#fff':PC.neutral400,
              border: p.rank>3?`1.5px solid ${PC.neutral200}`:'none',
            }}>{p.rank}</div>
            <Avatar initials={p.init} size={34}/>
            <div style={{flex:1}}>
              <div style={{fontFamily:pcTokens.fontBody,fontSize:13,fontWeight:600,color:PC.navy600}}>{p.name}</div>
              <WinLossBar wins={p.wins} losses={p.losses}/>
            </div>
            <div style={{textAlign:'right'}}>
              <div style={{fontFamily:pcTokens.fontDisplay,fontSize:20,fontWeight:900,color:PC.navy600,lineHeight:1}}>{p.elo}</div>
              <div style={{fontFamily:pcTokens.fontBody,fontSize:9,fontWeight:600,letterSpacing:'0.08em',textTransform:'uppercase',color:PC.neutral400}}>ELO</div>
            </div>
          </div>
        ))}

        {tab==='games' && [
          {t1:['AJ','MR'],t2:['ST','DK'],s1:11,s2:7,ago:'2h ago'},
          {t1:['AJ'],t2:['BR'],s1:8,s2:11,ago:'Yesterday'},
          {t1:['MR','ST'],t2:['DK','BR'],s1:11,s2:9,ago:'Apr 17'},
        ].map((g,i)=>(
          <Card key={i} style={{marginBottom:8}}>
            <div style={{padding:'12px 14px'}}>
              <div style={{fontFamily:pcTokens.fontBody,fontSize:10,fontWeight:500,color:PC.neutral400,marginBottom:6}}>{g.ago}</div>
              <div style={{display:'flex',alignItems:'center',gap:8}}>
                <div style={{flex:1,display:'flex',gap:4}}>{g.t1.map((p,j)=><Avatar key={j} initials={p} size={28}/>)}</div>
                <div style={{display:'flex',alignItems:'center',gap:6}}>
                  <span style={{fontFamily:pcTokens.fontDisplay,fontSize:30,fontWeight:900,color:PC.navy600,lineHeight:1}}>{g.s1}</span>
                  <span style={{color:PC.neutral200,fontWeight:700}}>–</span>
                  <span style={{fontFamily:pcTokens.fontDisplay,fontSize:30,fontWeight:900,color:PC.navy300,lineHeight:1}}>{g.s2}</span>
                </div>
                <div style={{flex:1,display:'flex',justifyContent:'flex-end',gap:4}}>{g.t2.map((p,j)=><Avatar key={j} initials={p} size={28}/>)}</div>
              </div>
            </div>
          </Card>
        ))}

        {tab==='events' && (
          <Card>
            <div style={{padding:'14px 16px'}}>
              <div style={{fontFamily:pcTokens.fontDisplay,fontSize:16,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.04em',color:PC.navy600,marginBottom:2}}>Saturday Smashers Open</div>
              <div style={{fontFamily:pcTokens.fontBody,fontSize:12,color:PC.neutral400}}>Sat, Apr 26 · 10:00 AM</div>
              <div style={{fontFamily:pcTokens.fontBody,fontSize:12,color:PC.neutral400,marginTop:2}}>Riverside Courts · 8 going</div>
              <div style={{display:'flex',gap:8,marginTop:12}}>
                <button style={{flex:1,height:38,borderRadius:9999,background:PC.success,color:'#fff',border:'none',fontFamily:pcTokens.fontBody,fontSize:12,fontWeight:600,cursor:'pointer'}}>✓ Going</button>
                <button style={{flex:1,height:38,borderRadius:9999,background:PC.neutral50,color:PC.neutral500,border:`1px solid ${PC.neutral200}`,fontFamily:pcTokens.fontBody,fontSize:12,fontWeight:600,cursor:'pointer'}}>Can't Go</button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}

// ── LogGameScreen
function LogGameScreen({ onBack, onSubmit }) {
  const [step, setStep] = React.useState(0); // 0=format, 1=players, 2=score, 3=done
  const [format, setFormat] = React.useState('doubles');
  const [score1, setScore1] = React.useState(0);
  const [score2, setScore2] = React.useState(0);

  const stepTitles = ['Game Format','Select Players','Enter Score','Done!'];
  const players = [
    {init:'AJ',name:'Alex J.'},
    {init:'MR',name:'Mike R.'},
    {init:'ST',name:'Sam T.'},
    {init:'DK',name:'Dana K.'},
    {init:'BR',name:'Brett R.'},
  ];
  const [selT1, setSelT1] = React.useState([0]);
  const [selT2, setSelT2] = React.useState([2]);

  return (
    <div style={{flex:1,display:'flex',flexDirection:'column',background:PC.neutral50}}>
      {/* Progress */}
      <div style={{background:PC.navy600,padding:'12px 16px 16px'}}>
        <div style={{display:'flex',gap:4,marginBottom:12}}>
          {[0,1,2,3].map(i=>(
            <div key={i} style={{flex:1,height:3,borderRadius:9999,background:i<=step?PC.blue400:'rgba(255,255,255,0.2)',transition:'background 0.3s'}}/>
          ))}
        </div>
        <div style={{fontFamily:pcTokens.fontDisplay,fontSize:22,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.04em',color:PC.white}}>{stepTitles[step]}</div>
      </div>

      <div style={{flex:1,overflowY:'auto',padding:16}}>
        {step===0 && (
          <div style={{display:'flex',flexDirection:'column',gap:10}}>
            {['singles','doubles'].map(f=>(
              <button key={f} onClick={()=>setFormat(f)} style={{
                height:72,borderRadius:pcTokens.radiusLg,border:`2px solid ${format===f?PC.blue500:PC.neutral200}`,
                background:format===f?PC.blue50:'#fff',cursor:'pointer',
                display:'flex',alignItems:'center',padding:'0 20px',gap:14,
                boxShadow:format===f?`0 0 0 1px ${PC.blue500}`:pcTokens.shadowMd,
              }}>
                <div style={{
                  width:40,height:40,borderRadius:'50%',
                  background:format===f?PC.blue500:PC.neutral100,
                  display:'flex',alignItems:'center',justifyContent:'center',
                }}>
                  {f==='singles'?<UserIcon size={20} color={format===f?'#fff':PC.neutral400}/>:<UsersIcon size={20} color={format===f?'#fff':PC.neutral400}/>}
                </div>
                <div style={{textAlign:'left'}}>
                  <div style={{fontFamily:pcTokens.fontBody,fontSize:15,fontWeight:600,color:format===f?PC.blue500:PC.navy600,textTransform:'capitalize'}}>{f}</div>
                  <div style={{fontFamily:pcTokens.fontBody,fontSize:11,color:PC.neutral400,marginTop:1}}>{f==='singles'?'1 vs 1':'2 vs 2'}</div>
                </div>
                {format===f && <CheckIcon size={18} color={PC.blue500} style={{marginLeft:'auto'}}/>}
              </button>
            ))}
            <div style={{marginTop:8}}>
              <div style={{fontFamily:pcTokens.fontBody,fontSize:11,fontWeight:600,letterSpacing:'0.08em',textTransform:'uppercase',color:PC.neutral400,marginBottom:8}}>Group</div>
              <div style={{height:44,borderRadius:pcTokens.radiusMd,border:`1.5px solid ${PC.neutral200}`,background:'#fff',display:'flex',alignItems:'center',padding:'0 14px',justifyContent:'space-between'}}>
                <span style={{fontFamily:pcTokens.fontBody,fontSize:14,color:PC.navy600}}>Saturday Smashers</span>
                <ChevronRightIcon/>
              </div>
            </div>
          </div>
        )}

        {step===1 && (
          <div>
            {['Team A','Team B'].map((team,ti)=>{
              const sel = ti===0?selT1:selT2;
              const setSel = ti===0?setSelT1:setSelT2;
              return (
                <div key={ti} style={{marginBottom:16}}>
                  <div style={{fontFamily:pcTokens.fontBody,fontSize:11,fontWeight:600,letterSpacing:'0.08em',textTransform:'uppercase',color:PC.neutral400,marginBottom:8}}>{team}</div>
                  {players.map((p,pi)=>(
                    <div key={pi} onClick={()=>{
                      if(sel.includes(pi)) setSel(sel.filter(x=>x!==pi));
                      else if((format==='singles'&&sel.length<1)||(format==='doubles'&&sel.length<2)) setSel([...sel,pi]);
                    }} style={{
                      display:'flex',alignItems:'center',gap:10,padding:'10px 14px',marginBottom:6,
                      background:'#fff',borderRadius:pcTokens.radiusMd,
                      border:`1.5px solid ${sel.includes(pi)?PC.blue500:PC.neutral100}`,
                      cursor:'pointer',
                    }}>
                      <Avatar initials={p.init} size={32}/>
                      <span style={{fontFamily:pcTokens.fontBody,fontSize:13,fontWeight:500,color:PC.navy600,flex:1}}>{p.name}</span>
                      {sel.includes(pi) && <CheckIcon/>}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        )}

        {step===2 && (
          <div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:24,marginBottom:24,marginTop:8}}>
              {[{label:'Team A',score:score1,set:setScore1},{label:'Team B',score:score2,set:setScore2}].map((t,i)=>(
                <React.Fragment key={i}>
                  {i===1 && <span style={{fontFamily:pcTokens.fontDisplay,fontSize:28,fontWeight:700,color:PC.neutral200}}>–</span>}
                  <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:8}}>
                    <div style={{fontFamily:pcTokens.fontBody,fontSize:10,fontWeight:600,letterSpacing:'0.1em',textTransform:'uppercase',color:PC.neutral400}}>{t.label}</div>
                    <div style={{display:'flex',alignItems:'center',border:`1.5px solid ${PC.neutral200}`,borderRadius:pcTokens.radiusMd,overflow:'hidden',background:'#fff'}}>
                      <button onClick={()=>t.set(Math.max(0,t.score-1))} style={{width:44,height:60,border:'none',background:PC.neutral50,fontSize:22,fontWeight:600,color:PC.navy600,cursor:'pointer'}}>−</button>
                      <div style={{width:64,height:60,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:pcTokens.fontDisplay,fontSize:40,fontWeight:900,color:PC.navy600}}>{t.score}</div>
                      <button onClick={()=>t.set(t.score+1)} style={{width:44,height:60,border:'none',background:PC.neutral50,fontSize:22,fontWeight:600,color:PC.navy600,cursor:'pointer'}}>+</button>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
            <div style={{background:PC.navy50,borderRadius:pcTokens.radiusMd,padding:'10px 14px'}}>
              <div style={{fontFamily:pcTokens.fontBody,fontSize:11,color:PC.neutral400}}>Play to 11, win by 2. Validate score before submitting.</div>
            </div>
          </div>
        )}

        {step===3 && (
          <div style={{display:'flex',flexDirection:'column',alignItems:'center',padding:'24px 0',gap:16}}>
            <div style={{width:72,height:72,borderRadius:'50%',background:PC.success50,display:'flex',alignItems:'center',justifyContent:'center'}}>
              <CheckIcon size={32} color={PC.success}/>
            </div>
            <div style={{fontFamily:pcTokens.fontDisplay,fontSize:28,fontWeight:900,textTransform:'uppercase',letterSpacing:'0.04em',color:PC.navy600,textAlign:'center'}}>Game Logged!</div>
            <div style={{fontFamily:pcTokens.fontBody,fontSize:14,color:PC.neutral400,textAlign:'center'}}>Stats updated · ELO recalculated</div>
            <Card style={{width:'100%',marginTop:8}}>
              <div style={{padding:'16px',textAlign:'center'}}>
                <div style={{fontFamily:pcTokens.fontBody,fontSize:11,fontWeight:600,letterSpacing:'0.08em',textTransform:'uppercase',color:PC.neutral400,marginBottom:8}}>Final Score</div>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:12}}>
                  <span style={{fontFamily:pcTokens.fontDisplay,fontSize:52,fontWeight:900,color:PC.navy600,lineHeight:1}}>{score1}</span>
                  <span style={{fontFamily:pcTokens.fontBody,fontSize:22,fontWeight:700,color:PC.neutral200}}>–</span>
                  <span style={{fontFamily:pcTokens.fontDisplay,fontSize:52,fontWeight:900,color:PC.navy300,lineHeight:1}}>{score2}</span>
                </div>
                <div style={{marginTop:12,display:'flex',gap:8,justifyContent:'center'}}>
                  <Chip color={PC.gold+'33'} textColor={PC.gold} size="md">🏅 New Badge Available!</Chip>
                </div>
              </div>
            </Card>
            <button onClick={onBack} style={{width:'100%',height:48,borderRadius:9999,background:PC.navy600,color:'#fff',border:'none',fontFamily:pcTokens.fontBody,fontSize:14,fontWeight:600,cursor:'pointer'}}>Back to Home</button>
          </div>
        )}
      </div>

      {step < 3 && (
        <div style={{padding:'12px 16px 20px',background:'#fff',borderTop:`1px solid ${PC.neutral100}`}}>
          <button onClick={()=>setStep(s=>s+1)} style={{
            width:'100%',height:50,borderRadius:9999,background:PC.blue500,
            color:'#fff',border:'none',fontFamily:pcTokens.fontBody,fontSize:15,fontWeight:700,cursor:'pointer',
          }}>{step===2?'Submit Game':'Continue →'}</button>
        </div>
      )}
    </div>
  );
}

// ── ProfileScreen
function ProfileScreen() {
  const eloData = [1200,1210,1195,1225,1238,1230,1247,1260,1247];
  const badges = ['🏆','🔥','🎯','🛡️','💪'];
  return (
    <div style={{flex:1,overflowY:'auto',background:PC.neutral50}}>
      {/* Header */}
      <div style={{background:PC.navy600,padding:'20px 16px 28px',textAlign:'center'}}>
        <Avatar initials="AJ" size={72} style={{margin:'0 auto 10px'}}/>
        <div style={{fontFamily:pcTokens.fontDisplay,fontSize:24,fontWeight:900,textTransform:'uppercase',letterSpacing:'0.04em',color:PC.white}}>Alex Johnson</div>
        <div style={{fontFamily:pcTokens.fontBody,fontSize:12,color:PC.navy200,marginTop:2}}>Power Hitter · Skill 3.5</div>
        <div style={{display:'flex',justifyContent:'center',gap:8,marginTop:10}}>
          <Chip color="rgba(255,255,255,0.15)" textColor={PC.white}>142 followers</Chip>
          <Chip color="rgba(255,255,255,0.15)" textColor={PC.white}>38 following</Chip>
        </div>
      </div>

      <div style={{padding:16,display:'flex',flexDirection:'column',gap:14}}>
        {/* Stats row */}
        <Card>
          <div style={{padding:'14px 16px'}}>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:0,textAlign:'center'}}>
              {[{label:'ELO',val:'1247',sub:'↑ +47'},
                {label:'Win Rate',val:'67%',sub:'18 games'},
                {label:'Streak',val:'5',sub:'🔥 wins'}].map((s,i)=>(
                <div key={i} style={{padding:'4px 0',borderRight:i<2?`1px solid ${PC.neutral100}`:'none'}}>
                  <div style={{fontFamily:pcTokens.fontDisplay,fontSize:28,fontWeight:900,color:PC.navy600,lineHeight:1}}>{s.val}</div>
                  <div style={{fontFamily:pcTokens.fontBody,fontSize:9,fontWeight:600,letterSpacing:'0.1em',textTransform:'uppercase',color:PC.neutral400,marginTop:2}}>{s.label}</div>
                  <div style={{fontFamily:pcTokens.fontBody,fontSize:10,color:PC.blue500,marginTop:1}}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* ELO trend */}
        <Card>
          <div style={{padding:'14px 16px'}}>
            <SectionHeader title="ELO Trend"/>
            <div style={{display:'flex',justifyContent:'center',paddingTop:4}}>
              <Sparkline data={eloData} color={PC.blue500} width={280} height={52}/>
            </div>
          </div>
        </Card>

        {/* Badges */}
        <Card>
          <div style={{padding:'14px 16px'}}>
            <SectionHeader title="Badges" action={()=>{}} actionLabel="View all"/>
            <div style={{display:'flex',gap:10}}>
              {badges.map((b,i)=>(
                <div key={i} style={{
                  width:50,height:50,borderRadius:'50%',
                  background:`linear-gradient(135deg, ${[PC.gold,PC.fire,PC.blue500,PC.navy600,PC.success][i]}, ${[PC.fire,PC.navy600,PC.navy800,PC.navy950,PC.navy500][i]})`,
                  display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,
                  boxShadow:`0 2px 8px rgba(0,0,0,0.15)`,
                }}>{b}</div>
              ))}
              <div style={{width:50,height:50,borderRadius:'50%',background:PC.neutral100,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:pcTokens.fontBody,fontSize:11,fontWeight:700,color:PC.neutral400}}>+3</div>
            </div>
          </div>
        </Card>

        {/* Play style tags */}
        <Card>
          <div style={{padding:'14px 16px'}}>
            <SectionHeader title="Play Style"/>
            <div style={{display:'flex',gap:6,flexWrap:'wrap'}}>
              <Chip color={PC.danger50} textColor={'#c04010'} size="md">Power Hitter</Chip>
              <Chip color={PC.blue50} textColor={PC.blue500} size="md">Social First</Chip>
              <Chip color={PC.navy50} textColor={PC.navy600} size="md">Competitive Edge</Chip>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

// ── ActivityScreen
function ActivityScreen() {
  const items = [
    {type:'game',init:'AJ',name:'Alex J.',text:'won 11–7 vs Sam T. in Saturday Smashers',time:'2h ago',reactions:['🔥','👏']},
    {type:'badge',init:'MR',name:'Mike R.',text:'earned the Iron Dinker badge 🛡️',time:'5h ago',reactions:['👏','💪']},
    {type:'rsvp',init:'DK',name:'Dana K.',text:'is going to Saturday Smashers Open',time:'Yesterday',reactions:[]},
    {type:'game',init:'BR',name:'Brett R.',text:'won 11–8 vs Alex J. in singles',time:'Yesterday',reactions:['😂']},
    {type:'game',init:'ST',name:'Sam T.',text:'won 11–9 vs Dana K. in Tuesday Evening Crew',time:'Apr 17',reactions:['🎯','👏']},
  ];
  return (
    <div style={{flex:1,overflowY:'auto',background:PC.neutral50}}>
      <div style={{display:'flex',background:'#fff',borderBottom:`1px solid ${PC.neutral100}`}}>
        {['My Groups','Following','All'].map((t,i)=>(
          <button key={i} style={{
            flex:1,height:42,border:'none',background:'none',cursor:'pointer',
            fontFamily:pcTokens.fontBody,fontSize:12,fontWeight:600,
            color:i===0?PC.blue500:PC.neutral400,
            borderBottom:i===0?`2px solid ${PC.blue500}`:'2px solid transparent',
          }}>{t}</button>
        ))}
      </div>
      <div style={{padding:'8px 0'}}>
        <div style={{fontFamily:pcTokens.fontBody,fontSize:10,fontWeight:600,letterSpacing:'0.1em',textTransform:'uppercase',color:PC.neutral400,padding:'8px 16px'}}>Today</div>
        {items.map((item,i) => (
          <div key={i} style={{background:PC.white,marginBottom:1,padding:'12px 16px'}}>
            <div style={{display:'flex',gap:10,alignItems:'flex-start'}}>
              <Avatar initials={item.init} size={36}/>
              <div style={{flex:1}}>
                <div style={{fontFamily:pcTokens.fontBody,fontSize:13,color:PC.navy600,lineHeight:1.4}}>
                  <strong style={{fontWeight:600}}>{item.name}</strong> {item.text}
                </div>
                <div style={{fontFamily:pcTokens.fontBody,fontSize:10,color:PC.neutral400,marginTop:3}}>{item.time}</div>
                {item.reactions.length>0 && (
                  <div style={{display:'flex',gap:6,marginTop:8}}>
                    {item.reactions.map((r,j)=>(
                      <button key={j} style={{
                        height:26,padding:'0 10px',borderRadius:9999,
                        border:`1px solid ${PC.neutral100}`,background:'#fff',
                        fontSize:12,cursor:'pointer',display:'flex',alignItems:'center',gap:4,
                        fontFamily:pcTokens.fontBody,fontWeight:500,color:PC.neutral500,
                      }}>{r} 1</button>
                    ))}
                    <button style={{height:26,padding:'0 10px',borderRadius:9999,border:`1px dashed ${PC.neutral200}`,background:'none',fontSize:12,cursor:'pointer',color:PC.neutral300}}>+</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, {
  HomeScreen, GroupsScreen, GroupDetailScreen,
  LogGameScreen, ProfileScreen, ActivityScreen,
});
