import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

export const ServMitr = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const yellow = "#FFD700";
  const black = "#0a0a0a";
  const white = "#ffffff";

  // Load logo as img tag with base64 - will be injected
  const LOGO = "public/logo.png";

  // ---- SCENE TIMING ----
  const s1 = interpolate(frame, [0,8,82,90], [0,1,1,0]);
  const s2 = interpolate(frame, [90,98,172,180], [0,1,1,0]);
  const s3 = interpolate(frame, [180,188,292,300], [0,1,1,0]);
  const s4 = interpolate(frame, [300,308,412,420], [0,1,1,0]);
  const s5 = interpolate(frame, [420,428,502,510], [0,1,1,0]);
  const s6 = interpolate(frame, [510,518,595,600], [0,1,1,0]);

  // ---- SCENE 1 ----
  const houseScale = spring({ frame, fps, config: { damping: 5, stiffness: 40 } });
  const houseRotate = interpolate(frame, [0,15,30,45], [-10,10,-5,0], { extrapolateRight:"clamp" });
  const textY1 = interpolate(frame, [25,45], [120,0], { extrapolateLeft:"clamp", extrapolateRight:"clamp" });
  const bgScale1 = 1 + 0.04 * Math.sin(frame * 0.1);
  const particles1 = Array.from({length:8}, (_,i) => ({
    x: 50 + 35*Math.cos(frame*0.04 + i*0.785),
    y: 50 + 35*Math.sin(frame*0.04 + i*0.785),
    op: interpolate(Math.sin(frame*0.1+i), [-1,1], [0.2,0.9])
  }));

  // ---- SCENE 2 ----
  const logoSc = spring({ frame:frame-90, fps, config:{ damping:7, stiffness:50 } });
  const logoRot = interpolate(frame, [90,120,150], [-15,5,0], { extrapolateLeft:"clamp", extrapolateRight:"clamp" });
  const ring1Sc = interpolate(frame, [95,165], [0.3,2.5], { extrapolateLeft:"clamp", extrapolateRight:"clamp" });
  const ring1Op = interpolate(frame, [95,165], [1,0], { extrapolateLeft:"clamp", extrapolateRight:"clamp" });
  const ring2Sc = interpolate(frame, [105,175], [0.3,2.5], { extrapolateLeft:"clamp", extrapolateRight:"clamp" });
  const ring2Op = interpolate(frame, [105,175], [0.7,0], { extrapolateLeft:"clamp", extrapolateRight:"clamp" });
  const ring3Sc = interpolate(frame, [115,185], [0.3,2.5], { extrapolateLeft:"clamp", extrapolateRight:"clamp" });
  const ring3Op = interpolate(frame, [115,185], [0.5,0], { extrapolateLeft:"clamp", extrapolateRight:"clamp" });
  const tagY2 = interpolate(frame, [135,158], [60,0], { extrapolateLeft:"clamp", extrapolateRight:"clamp" });
  const tagOp2 = interpolate(frame, [135,158], [0,1], { extrapolateLeft:"clamp", extrapolateRight:"clamp" });
  const bgRot2 = frame * 0.3;

  // ---- SCENE 3 ----
  const headX3 = interpolate(frame, [185,210], [-300,0], { extrapolateLeft:"clamp", extrapolateRight:"clamp" });
  const stripW3 = interpolate(frame, [195,225], [0,100], { extrapolateLeft:"clamp", extrapolateRight:"clamp" });
  const tile1 = spring({ frame:frame-192, fps, config:{ damping:7, stiffness:60 } });
  const tile2 = spring({ frame:frame-205, fps, config:{ damping:7, stiffness:60 } });
  const tile3 = spring({ frame:frame-218, fps, config:{ damping:7, stiffness:60 } });
  const bgPan3 = interpolate(frame, [180,300], [0,-50], { extrapolateLeft:"clamp", extrapolateRight:"clamp" });

  // ---- SCENE 4 ----
  const cardY4 = interpolate(frame, [308,332], [800,0], { extrapolateLeft:"clamp", extrapolateRight:"clamp" });
  const cardRot4 = interpolate(frame, [308,338], [12,0], { extrapolateLeft:"clamp", extrapolateRight:"clamp" });
  const checkSc4 = spring({ frame:frame-355, fps, config:{ damping:5, stiffness:90 } });
  const shimX4 = interpolate(frame, [355,400], [-300,600], { extrapolateLeft:"clamp", extrapolateRight:"clamp" });
  const bgPulse4 = 1 + 0.03*Math.sin(frame*0.15);

  // ---- SCENE 5 ----
  const bagY5 = interpolate(frame, [428,455], [300,0], { extrapolateLeft:"clamp", extrapolateRight:"clamp" });
  const bagBounce5 = spring({ frame:frame-455, fps, config:{ damping:4, stiffness:40 } });
  const star1 = spring({ frame:frame-460, fps, config:{ damping:6 } });
  const star2 = spring({ frame:frame-470, fps, config:{ damping:6 } });
  const star3 = spring({ frame:frame-480, fps, config:{ damping:6 } });
  const textY5 = interpolate(frame, [475,495], [50,0], { extrapolateLeft:"clamp", extrapolateRight:"clamp" });
  const streaks5 = Array.from({length:6}, (_,i) => ({
    x: 10+i*18, op: interpolate(Math.sin(frame*0.08+i), [-1,1], [0,0.6]),
    h: 60+i*20
  }));

  // ---- SCENE 6 ----
  const endSc6 = spring({ frame:frame-520, fps, config:{ damping:6, stiffness:45 } });
  const pulse6 = 1 + 0.07*Math.sin((frame-510)*0.2);
  const ctaY6 = interpolate(frame, [548,568], [80,0], { extrapolateLeft:"clamp", extrapolateRight:"clamp" });
  const glowOp6 = interpolate(Math.sin(frame*0.1), [-1,1], [0.4,1]);
  const bgRot6 = frame*0.5;
  const particles6 = Array.from({length:12}, (_,i) => ({
    x: 50+45*Math.cos((frame-510)*0.03+i*0.524),
    y: 50+45*Math.sin((frame-510)*0.03+i*0.524),
    op: interpolate(Math.sin(frame*0.08+i), [-1,1], [0.1,0.7]),
    sc: 0.5+0.5*Math.sin(frame*0.06+i)
  }));

  return (
    <AbsoluteFill style={{ fontFamily:"'Arial Black',sans-serif", overflow:"hidden" }}>

      {/* ===== SCENE 1 — Ghar ke kaam ===== */}
      <AbsoluteFill style={{ opacity:s1, backgroundColor:black, alignItems:"center", justifyContent:"center" }}>
        {/* BG radial pulse */}
        <div style={{ position:"absolute", width:1080, height:1920, background:`radial-gradient(circle at 50% 50%, #1a1500 0%, ${black} 65%)`, transform:`scale(${bgScale1})` }} />
        {/* Floating particles */}
        {particles1.map((p,i) => (
          <div key={i} style={{ position:"absolute", left:`${p.x}%`, top:`${p.y}%`, width:12, height:12, borderRadius:"50%", background:yellow, opacity:p.op, boxShadow:`0 0 15px ${yellow}` }} />
        ))}
        {/* House */}
        <div style={{ fontSize:180, transform:`scale(${houseScale}) rotate(${houseRotate}deg)`, filter:`drop-shadow(0 0 50px ${yellow}) drop-shadow(0 0 100px rgba(255,215,0,0.3))`, zIndex:2 }}>🏠</div>
        {/* Icons */}
        <div style={{ display:"flex", gap:28, margin:"30px 0", zIndex:2 }}>
          {["💡","🚿","🧹"].map((icon,i) => {
            const sc = spring({ frame:frame-i*10, fps, config:{ damping:6, stiffness:70 } });
            return (
              <div key={i} style={{ fontSize:65, background:"rgba(255,215,0,0.08)", borderRadius:28, padding:20, border:`2px solid ${yellow}`, transform:`scale(${sc}) translateY(${interpolate(sc,[0,1],[60,0])}px)`, boxShadow:`0 0 30px rgba(255,215,0,0.25), inset 0 0 20px rgba(255,215,0,0.05)` }}>{icon}</div>
            );
          })}
        </div>
        {/* Text */}
        <div style={{ transform:`translateY(${textY1}px)`, textAlign:"center", zIndex:2 }}>
          <div style={{ fontSize:62, fontWeight:900, color:yellow, letterSpacing:-1, textShadow:`0 0 30px rgba(255,215,0,0.6)` }}>Ghar ke kaam…</div>
          <div style={{ fontSize:34, color:white, marginTop:10, opacity:0.9 }}>phir bhi pending? 😩</div>
        </div>
      </AbsoluteFill>

      {/* ===== SCENE 2 — Meet ServMitr ===== */}
      <AbsoluteFill style={{ opacity:s2, backgroundColor:white, alignItems:"center", justifyContent:"center" }}>
        {/* Rotating gradient bg */}
        <div style={{ position:"absolute", width:1200, height:1200, borderRadius:"50%", background:`conic-gradient(from ${bgRot2}deg, rgba(255,215,0,0.15), transparent, rgba(255,215,0,0.08), transparent)` }} />
        {/* Expanding rings */}
        {[[ring1Sc,ring1Op],[ring2Sc,ring2Op],[ring3Sc,ring3Op]].map(([sc,op],i) => (
          <div key={i} style={{ position:"absolute", width:400, height:400, borderRadius:"50%", border:`${3-i}px solid ${yellow}`, transform:`scale(${sc})`, opacity:op }} />
        ))}
        {/* Logo */}
        <div style={{ transform:`scale(${logoSc}) rotate(${logoRot}deg)`, filter:`drop-shadow(0 25px 50px rgba(0,0,0,0.25)) drop-shadow(0 0 40px rgba(255,215,0,0.2))`, zIndex:2 }}>
          <img src={LOGO} style={{ width:440, height:440, objectFit:"contain" }} />
        </div>
        {/* Tagline */}
        <div style={{ transform:`translateY(${tagY2}px)`, opacity:tagOp2, textAlign:"center", marginTop:15, zIndex:2 }}>
          <div style={{ fontSize:40, fontWeight:900, color:black }}>Meet <span style={{ color:"#c8a800" }}>ServMitr</span></div>
          <div style={{ fontSize:24, color:"#555", marginTop:8, letterSpacing:1 }}>Services Made Simple ✨</div>
        </div>
      </AbsoluteFill>

      {/* ===== SCENE 3 — Services ===== */}
      <AbsoluteFill style={{ opacity:s3, alignItems:"center", justifyContent:"center", padding:50 }}>
        {/* Cinematic pan bg */}
        <div style={{ position:"absolute", width:"100%", height:"100%", background:`linear-gradient(135deg, #0a0a0a 0%, #1a1200 50%, #0a0a0a 100%)`, transform:`translateY(${bgPan3}px)` }} />
        {/* Light streaks */}
        {[0,1,2,3].map(i => (
          <div key={i} style={{ position:"absolute", left:`${15+i*25}%`, top:0, width:2, height:"100%", background:`linear-gradient(to bottom, transparent, rgba(255,215,0,${0.1+i*0.05}), transparent)`, transform:`rotate(${-15+i*5}deg)` }} />
        ))}
        {/* Heading */}
        <div style={{ transform:`translateX(${headX3}px)`, marginBottom:25, alignSelf:"flex-start", zIndex:2 }}>
          <div style={{ fontSize:48, fontWeight:900, color:white, lineHeight:1.1 }}>Home services,</div>
          <div style={{ fontSize:48, fontWeight:900, color:yellow, lineHeight:1.1 }}>sorted. ✓</div>
          <div style={{ width:`${stripW3}%`, height:5, background:yellow, borderRadius:3, marginTop:12, boxShadow:`0 0 15px ${yellow}` }} />
        </div>
        {/* Tiles */}
        <div style={{ display:"flex", gap:20, width:"100%", zIndex:2 }}>
          {[["🔧","Plumbing",tile1,"#1a0d00"],["⚡","Electrical",tile2,"#0d0d1a"],["🧹","Cleaning",tile3,"#001a0d"]].map(([icon,label,sc,bg],i) => (
            <div key={i} style={{ flex:1, background:bg as string, borderRadius:28, padding:28, textAlign:"center", border:`2px solid ${yellow}`, transform:`scale(${sc}) translateY(${interpolate(sc as number,[0,1],[80,0])}px)`, boxShadow:`0 0 30px rgba(255,215,0,0.15), 0 20px 40px rgba(0,0,0,0.5)` }}>
              <div style={{ fontSize:55, filter:`drop-shadow(0 0 15px rgba(255,215,0,0.5))` }}>{icon}</div>
              <div style={{ fontSize:21, fontWeight:800, color:yellow, marginTop:12 }}>{label}</div>
              <div style={{ width:30, height:3, background:yellow, borderRadius:2, margin:"10px auto 0", boxShadow:`0 0 10px ${yellow}` }} />
            </div>
          ))}
        </div>
      </AbsoluteFill>

      {/* ===== SCENE 4 — Book karo ===== */}
      <AbsoluteFill style={{ opacity:s4, alignItems:"center", justifyContent:"center", padding:40 }}>
        <div style={{ position:"absolute", width:"100%", height:"100%", background:`radial-gradient(circle at 50% 50%, #1a1500 0%, #f0f0f0 60%)`, transform:`scale(${bgPulse4})` }} />
        <div style={{ transform:`translateY(${cardY4}px) rotate(${cardRot4}deg)`, background:white, borderRadius:35, padding:38, width:"93%", boxShadow:"0 30px 80px rgba(0,0,0,0.25)", border:`3px solid ${yellow}`, overflow:"hidden", position:"relative", zIndex:2 }}>
          {/* Shimmer sweep */}
          <div style={{ position:"absolute", top:0, left:shimX4, width:100, height:"100%", background:"linear-gradient(90deg, transparent, rgba(255,215,0,0.4), transparent)", transform:"skewX(-20deg)" }} />
          <div style={{ fontSize:32, fontWeight:900, color:black, marginBottom:20 }}>Booking Confirmed! 🎉</div>
          <div style={{ fontSize:23, color:"#333", marginBottom:12, display:"flex", alignItems:"center", gap:10 }}>
            <span style={{ fontSize:28 }}>📅</span> Tomorrow, 10:00 AM
          </div>
          <div style={{ fontSize:23, color:"#333", marginBottom:28, display:"flex", alignItems:"center", gap:10 }}>
            <span style={{ fontSize:28 }}>🔧</span> Plumbing Service
          </div>
          <div style={{ background:yellow, borderRadius:20, padding:"20px 30px", textAlign:"center", fontSize:28, fontWeight:900, color:black, transform:`scale(${checkSc4})`, boxShadow:`0 10px 30px rgba(255,215,0,0.5)` }}>
            ✓ Choose. Book. Done.
          </div>
        </div>
      </AbsoluteFill>

      {/* ===== SCENE 5 — Professional ===== */}
      <AbsoluteFill style={{ opacity:s5, backgroundColor:black, alignItems:"center", justifyContent:"center" }}>
        {/* Light streaks */}
        {streaks5.map((s,i) => (
          <div key={i} style={{ position:"absolute", left:`${s.x}%`, top:"10%", width:3, height:`${s.h}%`, background:`linear-gradient(to bottom, transparent, rgba(255,215,0,${s.op}), transparent)`, transform:"rotate(-15deg)" }} />
        ))}
        <div style={{ textAlign:"center", zIndex:2 }}>
          <div style={{ fontSize:150, transform:`translateY(${bagY5}px) scale(${bagBounce5})`, filter:`drop-shadow(0 0 40px rgba(255,215,0,0.6))` }}>🧰</div>
          <div style={{ display:"flex", gap:12, justifyContent:"center", margin:"18px 0" }}>
            {[[star1,"⭐"],[star2,"⭐"],[star3,"⭐"]].map(([sc,s],i) => (
              <div key={i} style={{ fontSize:45, transform:`scale(${sc})`, filter:`drop-shadow(0 0 10px ${yellow})` }}>{s}</div>
            ))}
          </div>
          <div style={{ transform:`translateY(${textY5}px)` }}>
            <div style={{ fontSize:40, fontWeight:900, color:yellow, textShadow:`0 0 20px rgba(255,215,0,0.5)` }}>Trusted Professionals</div>
            <div style={{ fontSize:27, color:white, marginTop:12, opacity:0.9 }}>Apne din ko rakho easy 🙌</div>
          </div>
        </div>
      </AbsoluteFill>

      {/* ===== SCENE 6 — End Card ===== */}
      <AbsoluteFill style={{ opacity:s6, backgroundColor:black, alignItems:"center", justifyContent:"center" }}>
        {/* Rotating conic bg */}
        <div style={{ position:"absolute", width:1200, height:1200, borderRadius:"50%", background:`conic-gradient(from ${bgRot6}deg, rgba(255,215,0,0.2), transparent, rgba(255,215,0,0.1), transparent, rgba(255,215,0,0.15), transparent)` }} />
        {/* Particles */}
        {particles6.map((p,i) => (
          <div key={i} style={{ position:"absolute", left:`${p.x}%`, top:`${p.y}%`, width:10, height:10, borderRadius:"50%", background:yellow, opacity:p.op, transform:`scale(${p.sc})`, boxShadow:`0 0 20px ${yellow}` }} />
        ))}
        {/* Glow center */}
        <div style={{ position:"absolute", width:600, height:600, borderRadius:"50%", background:`radial-gradient(circle, rgba(255,215,0,${glowOp6*0.3}) 0%, transparent 70%)` }} />
        {/* Content */}
        <div style={{ textAlign:"center", zIndex:2 }}>
          <div style={{ transform:`scale(${endSc6})`, filter:`drop-shadow(0 0 50px rgba(255,215,0,0.7))` }}>
            <img src={LOGO} style={{ width:340, height:340, objectFit:"contain" }} />
          </div>
          <div style={{ fontSize:24, color:yellow, letterSpacing:5, marginTop:8, fontWeight:700, textShadow:`0 0 20px rgba(255,215,0,0.5)` }}>SERVICES MADE SIMPLE</div>
          <div style={{ transform:`translateY(${ctaY6}px) scale(${pulse6})`, marginTop:35, background:yellow, borderRadius:50, padding:"22px 55px", fontSize:28, fontWeight:900, color:black, display:"inline-block", boxShadow:`0 0 50px rgba(255,215,0,0.6), 0 15px 30px rgba(0,0,0,0.3)` }}>
            🎯 GET IT ON GOOGLE PLAY
          </div>
          <div style={{ fontSize:24, color:white, marginTop:20, opacity:0.9, letterSpacing:1 }}>Ghar ka kaam, sorted. ✓</div>
        </div>
      </AbsoluteFill>

    </AbsoluteFill>
  );
};
