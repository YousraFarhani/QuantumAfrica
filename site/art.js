/* ============================================================
   QUANTUM AFRICA — GENERATED ARTWORK
   Every figure is drawn in code from the organisation's own
   subject matter: circuits, light cones, Bloch spheres,
   interference, spectra, entanglement lattices, networks.
   Nothing here is a stock image. Each one sits in a slot that
   a real photograph can replace without touching the layout.
   ============================================================ */
let __artId = 0;

function artDefs(id){
  return `
  <defs>
    <linearGradient id="g${id}" x1="0" y1="0" x2="800" y2="450" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#EFD9AA"/><stop offset="52%" stop-color="#C9A55B"/><stop offset="100%" stop-color="#8A6B2E"/>
    </linearGradient>
    <linearGradient id="v${id}" x1="0" y1="450" x2="800" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#8A6B2E"/><stop offset="100%" stop-color="#EFD9AA"/>
    </linearGradient>
    <radialGradient id="hz${id}" cx="30%" cy="18%" r="85%">
      <stop offset="0%" stop-color="#101826" stop-opacity=".95"/>
      <stop offset="55%" stop-color="#080C14" stop-opacity=".95"/>
      <stop offset="100%" stop-color="#04060B"/>
    </radialGradient>
    <pattern id="gr${id}" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0v40" fill="none" stroke="#A99A7C" stroke-opacity=".085" stroke-width="1"/>
    </pattern>
    <filter id="bl${id}" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="9"/>
    </filter>
  </defs>
  <rect width="800" height="450" fill="url(#hz${id})"/>
  <rect width="800" height="450" fill="url(#gr${id})"/>`;
}

/* ---------- individual figures ---------- */
const ART = {

  /* quantum circuit with gates and a measurement */
  circuit(id){
    const ys = [120, 190, 260, 330];
    let o = '';
    ys.forEach((y,i)=>{
      o += `<line x1="90" y1="${y}" x2="740" y2="${y}" stroke="#A99A7C" stroke-opacity=".26" stroke-width="1.4"/>`;
      o += `<text x="52" y="${y+5}" fill="#8FB4DE" fill-opacity=".75" font-family="Gotham, Poppins, sans-serif" font-size="15">q${i}</text>`;
    });
    const gate = (x,y,l,grad)=>`
      <rect x="${x-24}" y="${y-22}" width="48" height="44" rx="9" fill="#121722" stroke="url(#${grad}${id})" stroke-width="1.6"/>
      <text x="${x}" y="${y+7}" text-anchor="middle" fill="#F5EEDF" font-family="Gotham, Poppins, sans-serif" font-size="17">${l}</text>`;
    o += gate(160,120,'H','g') + gate(160,190,'H','g') + gate(160,330,'X','v');
    // CNOT 1
    o += `<line x1="300" y1="120" x2="300" y2="190" stroke="url(#g${id})" stroke-width="2"/>
          <circle cx="300" cy="120" r="8" fill="url(#g${id})"/>
          <circle cx="300" cy="190" r="17" fill="#121722" stroke="url(#g${id})" stroke-width="2"/>
          <path d="M283 190h34M300 173v34" stroke="url(#g${id})" stroke-width="2"/>`;
    o += gate(400,260,'T','v');
    // CNOT 2
    o += `<line x1="500" y1="190" x2="500" y2="330" stroke="url(#v${id})" stroke-width="2"/>
          <circle cx="500" cy="190" r="8" fill="url(#v${id})"/>
          <circle cx="500" cy="330" r="17" fill="#121722" stroke="url(#v${id})" stroke-width="2"/>
          <path d="M483 330h34M500 313v34" stroke="url(#v${id})" stroke-width="2"/>`;
    o += gate(600,260,'Z','g');
    // measurements
    ys.forEach(y=>{
      o += `<rect x="676" y="${y-22}" width="52" height="44" rx="9" fill="#121722" stroke="#A99A7C" stroke-opacity=".5" stroke-width="1.4"/>
            <path d="M689 ${y+9}a13 13 0 0 1 26 0" fill="none" stroke="#DCC79A" stroke-width="1.6"/>
            <line x1="702" y1="${y+9}" x2="713" y2="${y-6}" stroke="#DCC79A" stroke-width="1.6"/>`;
    });
    return o;
  },

  /* causal light cone over a circuit lattice */
  lightcone(id){
    let o = `<path d="M150 225 L700 70 L700 380 Z" fill="url(#g${id})" fill-opacity=".13" stroke="url(#g${id})" stroke-opacity=".55" stroke-width="1.6"/>`;
    for(let c=0;c<11;c++){
      for(let r=0;r<6;r++){
        const x = 120 + c*58, y = 90 + r*54;
        const inside = x >= 150 && Math.abs(y-225) <= (x-150)*0.28;
        o += `<circle cx="${x}" cy="${y}" r="${inside?6.5:4}" fill="${inside?`url(#g${id})`:'#5E5540'}" fill-opacity="${inside?1:.42}"/>`;
        if(c<10 && inside && Math.abs((y-225)) <= (x+58-150)*0.28)
          o += `<line x1="${x}" y1="${y}" x2="${x+58}" y2="${y}" stroke="url(#g${id})" stroke-opacity=".4" stroke-width="1.2"/>`;
      }
    }
    o += `<circle cx="150" cy="225" r="13" fill="none" stroke="url(#g${id})" stroke-width="2"/>
          <circle cx="150" cy="225" r="6" fill="#EFD9AA"/>`;
    return o;
  },

  /* Bloch sphere with a state vector */
  bloch(id){
    const cx=400, cy=228, r=142;
    return `
    <circle cx="${cx}" cy="${cy}" r="${r+34}" fill="url(#g${id})" fill-opacity=".14" filter="url(#bl${id})"/>
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="#0C111A" fill-opacity=".75" stroke="url(#g${id})" stroke-width="1.8"/>
    <ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="42" fill="none" stroke="#8FB4DE" stroke-opacity=".38" stroke-width="1.2"/>
    <ellipse cx="${cx}" cy="${cy}" rx="52" ry="${r}" fill="none" stroke="#8FB4DE" stroke-opacity=".28" stroke-width="1.2"/>
    <line x1="${cx}" y1="${cy-r-22}" x2="${cx}" y2="${cy+r+22}" stroke="#8FB4DE" stroke-opacity=".4" stroke-width="1.2"/>
    <line x1="${cx-r-26}" y1="${cy}" x2="${cx+r+26}" y2="${cy}" stroke="#8FB4DE" stroke-opacity=".22" stroke-width="1.2"/>
    <line x1="${cx}" y1="${cy}" x2="${cx+96}" y2="${cy-98}" stroke="url(#v${id})" stroke-width="3.4" stroke-linecap="round"/>
    <circle cx="${cx+96}" cy="${cy-98}" r="9" fill="#8A6B2E"/>
    <circle cx="${cx}" cy="${cy}" r="4.5" fill="#F5EEDF"/>
    <path d="M${cx} ${cy} L${cx+40} ${cy-41} A57 57 0 0 0 ${cx} ${cy-57} Z" fill="url(#g${id})" fill-opacity=".22"/>
    <text x="${cx-8}" y="${cy-r-30}" fill="#EFE3C9" font-family="Gotham, Poppins, sans-serif" font-size="17">|0⟩</text>
    <text x="${cx-8}" y="${cy+r+42}" fill="#EFE3C9" font-family="Gotham, Poppins, sans-serif" font-size="17">|1⟩</text>
    <text x="${cx+112}" y="${cy-104}" fill="#EFD9AA" font-family="Gotham, Poppins, sans-serif" font-size="15">|ψ⟩</text>`;
  },

  /* two-source interference field */
  wave(id){
    let o = '';
    const s = [[250,225],[550,225]];
    s.forEach(([sx,sy],k)=>{
      for(let i=1;i<=16;i++){
        o += `<circle cx="${sx}" cy="${sy}" r="${i*25}" fill="none" stroke="${k?'#8A6B2E':'#1E9A57'}" stroke-opacity="${(0.42 - i*0.021).toFixed(3)}" stroke-width="1.5"/>`;
      }
      o += `<circle cx="${sx}" cy="${sy}" r="8" fill="${k?'#8A6B2E':'#1E9A57'}"/>`;
    });
    return o;
  },

  /* interference fringes — intensity bands */
  fringes(id){
    let o = '';
    for(let x=0;x<800;x+=8){
      const t = (x-400)/56;
      const env = Math.exp(-Math.pow((x-400)/300,2));
      const v = Math.pow(Math.cos(t),2)*env;
      o += `<rect x="${x}" y="60" width="8" height="330" fill="url(#g${id})" fill-opacity="${(v*0.85).toFixed(3)}"/>`;
    }
    o += `<line x1="60" y1="405" x2="740" y2="405" stroke="#8FB4DE" stroke-opacity=".4" stroke-width="1.2"/>`;
    let d = '';
    for(let x=60;x<=740;x+=4){
      const t=(x-400)/56, env=Math.exp(-Math.pow((x-400)/300,2));
      const y = 405 - Math.pow(Math.cos(t),2)*env*115;
      d += (x===60?'M':'L')+x+' '+y.toFixed(1)+' ';
    }
    o += `<path d="${d}" fill="none" stroke="url(#g${id})" stroke-width="2.4"/>`;
    return o;
  },

  /* entanglement lattice */
  lattice(id){
    let o = '';
    const cols=8, rows=5;
    for(let c=0;c<cols;c++)for(let r=0;r<rows;r++){
      const x=115+c*81, y=95+r*65;
      if(c<cols-1) o+=`<line x1="${x}" y1="${y}" x2="${x+81}" y2="${y}" stroke="#A99A7C" stroke-opacity=".2" stroke-width="1.2"/>`;
      if(r<rows-1) o+=`<line x1="${x}" y1="${y}" x2="${x}" y2="${y+65}" stroke="#A99A7C" stroke-opacity=".2" stroke-width="1.2"/>`;
    }
    const ent=[[1,1,2,2],[3,0,4,1],[5,2,6,3],[2,3,3,4],[6,1,7,2]];
    ent.forEach(([a,b,c,d])=>{
      const x1=115+a*81,y1=95+b*65,x2=115+c*81,y2=95+d*65;
      o+=`<path d="M${x1} ${y1} Q${(x1+x2)/2} ${(y1+y2)/2-46} ${x2} ${y2}" fill="none" stroke="url(#g${id})" stroke-width="2.2" stroke-opacity=".9"/>`;
    });
    for(let c=0;c<cols;c++)for(let r=0;r<rows;r++){
      const x=115+c*81, y=95+r*65;
      const hot = ent.some(([a,b,cc,d])=>(a===c&&b===r)||(cc===c&&d===r));
      o+=`<circle cx="${x}" cy="${y}" r="${hot?9:5.5}" fill="${hot?`url(#g${id})`:'#4C4636'}"/>`;
      if(hot) o+=`<circle cx="${x}" cy="${y}" r="17" fill="none" stroke="url(#g${id})" stroke-opacity=".4" stroke-width="1.3"/>`;
    }
    return o;
  },

  /* collaboration network */
  network(id){
    const n=[[130,120],[250,80],[380,140],[520,90],[660,150],[110,300],[240,250],[390,300],[530,240],[670,320],[300,390],[460,400],[600,390],[180,190]];
    const e=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,2],[6,7],[7,8],[8,4],[8,9],[7,10],[10,11],[11,12],[12,9],[13,0],[13,6],[2,7],[3,8],[1,13]];
    let o='';
    e.forEach(([a,b])=>{
      o+=`<line x1="${n[a][0]}" y1="${n[a][1]}" x2="${n[b][0]}" y2="${n[b][1]}" stroke="url(#g${id})" stroke-opacity=".35" stroke-width="1.4"/>`;
    });
    const hubs=[2,6,8];
    n.forEach((p,i)=>{
      const h=hubs.includes(i);
      o+=`<circle cx="${p[0]}" cy="${p[1]}" r="${h?13:7}" fill="${h?`url(#g${id})`:'#6E6249'}"/>`;
      if(h) o+=`<circle cx="${p[0]}" cy="${p[1]}" r="24" fill="none" stroke="url(#g${id})" stroke-opacity=".45" stroke-width="1.4"/>`;
    });
    return o;
  },

  /* absorption spectra — for the pigments project */
  spectra(id){
    const curves=[[300,58,.95,'#EFD9AA'],[400,70,.72,'#C9A55B'],[500,64,.85,'#1E9A57'],[600,80,.55,'#8A6B2E']];
    let o=`<line x1="80" y1="380" x2="740" y2="380" stroke="#8FB4DE" stroke-opacity=".4" stroke-width="1.2"/>
           <line x1="80" y1="70" x2="80" y2="380" stroke="#8FB4DE" stroke-opacity=".4" stroke-width="1.2"/>`;
    for(let i=0;i<=6;i++){
      const x=80+i*110;
      o+=`<line x1="${x}" y1="376" x2="${x}" y2="384" stroke="#8FB4DE" stroke-opacity=".5" stroke-width="1.2"/>`;
    }
    curves.forEach(([mu,sg,amp,col])=>{
      let d='', dfill='M80 380 ';
      for(let x=80;x<=740;x+=4){
        const nm=380+(x-80)*0.55;
        const y=380-Math.exp(-Math.pow((nm-mu)/sg,2))*amp*268;
        d+=(x===80?'M':'L')+x+' '+y.toFixed(1)+' ';
        dfill+='L'+x+' '+y.toFixed(1)+' ';
      }
      dfill+='L740 380 Z';
      o+=`<path d="${dfill}" fill="${col}" fill-opacity=".13"/><path d="${d}" fill="none" stroke="${col}" stroke-width="2.6"/>`;
    });
    o+=`<text x="740" y="405" text-anchor="end" fill="#8FB4DE" fill-opacity=".8" font-family="Gotham, Poppins, sans-serif" font-size="14">wavelength / nm</text>
        <text x="80" y="56" fill="#8FB4DE" fill-opacity=".8" font-family="Gotham, Poppins, sans-serif" font-size="14">absorbance</text>`;
    return o;
  },

  /* kernel / feature-map heatmap — for the QML project */
  kernel(id){
    let o='';
    const N=14, s=22, x0=250, y0=66;
    for(let i=0;i<N;i++)for(let j=0;j<N;j++){
      const v=Math.abs(Math.cos((i-j)*0.55))*Math.exp(-Math.abs(i-j)/6);
      o+=`<rect x="${x0+j*s}" y="${y0+i*s}" width="${s-2}" height="${s-2}" rx="3" fill="url(#g${id})" fill-opacity="${(0.08+v*0.86).toFixed(3)}"/>`;
    }
    o+=`<text x="${x0}" y="${y0-16}" fill="#8FB4DE" fill-opacity=".8" font-family="Gotham, Poppins, sans-serif" font-size="14">kernel matrix K(xᵢ,xⱼ)</text>`;
    return o;
  },

  /* key rate vs distance — for the QKD project */
  qkd(id){
    let o=`<line x1="90" y1="370" x2="740" y2="370" stroke="#8FB4DE" stroke-opacity=".4" stroke-width="1.2"/>
           <line x1="90" y1="60" x2="90" y2="370" stroke="#8FB4DE" stroke-opacity=".4" stroke-width="1.2"/>`;
    const rate=(x,L0)=>370-Math.exp(-((x-90)*0.42)/L0)*292;
    [[135,'#EFD9AA'],[88,'#C9A55B'],[56,'#8A6B2E']].forEach(([L0,col])=>{
      let d='';
      for(let x=90;x<=744;x+=5) d+=(d===''?'M':'L')+x+' '+rate(x,L0).toFixed(1)+' ';
      o+=`<path d="${d}" fill="none" stroke="${col}" stroke-width="2.6"/>`;
    });
    for(let i=0;i<24;i++){
      const x=104+i*27, y=rate(x,135)+Math.sin(i*2.7)*8;
      o+=`<circle cx="${x}" cy="${y.toFixed(1)}" r="3.6" fill="#EFE3C9" fill-opacity=".62"/>`;
    }
    o+=`<text x="740" y="396" text-anchor="end" fill="#8FB4DE" fill-opacity=".8" font-family="Gotham, Poppins, sans-serif" font-size="14">channel distance / km</text>
        <text x="90" y="46" fill="#8FB4DE" fill-opacity=".8" font-family="Gotham, Poppins, sans-serif" font-size="14">secret key rate</text>`;
    return o;
  },

  /* wide hero field — orbitals over a horizon */
  field(id){
    let o='';
    for(let i=0;i<7;i++){
      o+=`<ellipse cx="400" cy="240" rx="${120+i*72}" ry="${230+i*10}" fill="none" stroke="url(#g${id})" stroke-opacity="${(0.36-i*0.04).toFixed(2)}" stroke-width="1.3" transform="rotate(-24 400 240)"/>`;
    }
    const pts=[[562,96],[248,352],[664,286],[190,150],[430,62],[352,392]];
    pts.forEach((p,i)=>{
      o+=`<circle cx="${p[0]}" cy="${p[1]}" r="${i%2?3.2:4.6}" fill="url(#${i%2?'v':'g'}${id})"/>
          <circle cx="${p[0]}" cy="${p[1]}" r="${i%2?9:12}" fill="none" stroke="url(#g${id})" stroke-opacity=".45" stroke-width="1"/>`;
    });
    return o;
  },
};

function art(kind, cls){
  const id = ++__artId;
  const body = (ART[kind] || ART.field)(id);
  return `<svg class="art ${cls||''}" viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Generated quantum figure">
    ${artDefs(id)}
    ${body}
  </svg>`;
}

/* ---------- media slot: artwork now, photograph later ---------- */
function media(kind, photoNote, spec, cls){
  return `<div class="slot ${cls||''}">
    ${art(kind)}
    <span class="slot-note">
      <span class="ph-k">PHOTO SLOT</span>
      <span class="ph-t">${esc(photoNote)}</span>
      ${spec ? `<span class="ph-s">${esc(spec)}</span>` : ''}
    </span>
  </div>`;
}

/* ---------- Quantum AI Tutor interface mockup ---------- */
function tutorMock(){
  return `<div class="mock" role="img" aria-label="Mockup of the Quantum AI Tutor interface">
    <div class="mock-bar"><span class="d r"></span><span class="d y"></span><span class="d g"></span>
      <span class="mock-url">tutor.quantum-africa.org</span></div>
    <div class="mock-body">
      <aside class="mock-side">
        <div class="mock-side-h">Learning pathways</div>
        <div class="mock-nav on"><span class="mock-dot"></span>Foundations</div>
        <div class="mock-nav"><span class="mock-dot"></span>Qubits &amp; superposition</div>
        <div class="mock-nav"><span class="mock-dot"></span>Gates &amp; circuits</div>
        <div class="mock-nav"><span class="mock-dot"></span>Entanglement</div>
        <div class="mock-nav"><span class="mock-dot"></span>Algorithms</div>
        <div class="mock-nav"><span class="mock-dot"></span>Error correction</div>
        <div class="mock-prog"><span style="width:38%"></span></div>
        <div class="mock-prog-l">38% complete</div>
      </aside>
      <div class="mock-chat">
        <div class="mock-msg you">Why does measuring a qubit destroy superposition?</div>
        <div class="mock-msg bot">
          <span class="mock-badge">Quantum AI Tutor</span>
          Think of the qubit's state as a point on a sphere — it can sit anywhere on the surface. Measurement asks a yes/no question, and the only answers available are the two poles.
          <div class="mock-fig">${art('bloch')}</div>
          The probability of each answer comes from how close the point sits to that pole. Once answered, the state <em>is</em> that pole — the rest of the information is gone.
        </div>
        <div class="mock-msg you">Show me that with a circuit.</div>
        <div class="mock-input"><span>Ask anything about quantum computing…</span><span class="mock-send">↑</span></div>
      </div>
    </div>
  </div>`;
}


/* ---------- the ring: the logo's Q, used as a structural device ---------- */
function ringMark(cls){
  const id = ++__artId;
  return `<div class="ring ${cls||''}" aria-hidden="true"><svg viewBox="0 0 600 600" fill="none">
    <defs>
      <linearGradient id="rg${id}" x1="70" y1="70" x2="530" y2="530" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#8A6B2E"/><stop offset="55%" stop-color="#C9A55B"/><stop offset="100%" stop-color="#EFD9AA"/>
      </linearGradient>
    </defs>
    <g class="spin"><circle cx="300" cy="300" r="268" stroke="url(#rg${id})" stroke-width="7" stroke-linecap="round"
            stroke-dasharray="1370 314" transform="rotate(34 300 300)"/>
    <circle cx="300" cy="300" r="228" stroke="#EFD9AA" stroke-opacity=".15" stroke-width="1"/>
    <circle cx="300" cy="300" r="188" stroke="#EFD9AA" stroke-opacity=".09" stroke-width="1"/></g>
    <path d="M132 452C246 396 306 292 344 122" stroke="url(#rg${id})" stroke-width="3" stroke-linecap="round" opacity=".75"/>
    <path d="M256 508c92 14 156-16 214-74" stroke="#EFD9AA" stroke-width="9" stroke-linecap="round" opacity=".5"/>
    <circle cx="454" cy="146" r="7" fill="#EFD9AA"/>
    <circle cx="146" cy="386" r="5" fill="#C9A55B"/>
  </svg></div>`;
}


/* ---------- African geometric pattern ----------
   A tessellating lozenge-and-chevron lattice, drawn in code.
   Used as a background texture only, never behind the logo. */
function patternPanel(cls, tone){
  const id = ++__artId;
  const line = tone === 'light' ? '#001F3F' : '#C9A55B';
  const fill = tone === 'light' ? '#007736' : '#C9A55B';
  return `<div class="pattern ${cls||''}" aria-hidden="true"><svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern id="pt${id}" width="72" height="72" patternUnits="userSpaceOnUse">
        <path d="M36 1 71 36 36 71 1 36Z" fill="none" stroke="${line}" stroke-width="1.1"/>
        <path d="M36 15 57 36 36 57 15 36Z" fill="${fill}" fill-opacity=".16"/>
        <path d="M36 25 47 36 36 47 25 36Z" fill="none" stroke="${line}" stroke-width="1"/>
        <path d="M1 36 18 19M71 36 54 19M1 36 18 53M71 36 54 53" stroke="${line}" stroke-width=".7" stroke-opacity=".55"/>
        <circle cx="36" cy="36" r="2.4" fill="${line}"/>
        <circle cx="1" cy="36" r="1.6" fill="${line}"/><circle cx="71" cy="36" r="1.6" fill="${line}"/>
        <circle cx="36" cy="1" r="1.6" fill="${line}"/><circle cx="36" cy="71" r="1.6" fill="${line}"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#pt${id})"/>
  </svg></div>`;
}

/* ---------- continent and country geometry, drawn from the
   same Natural Earth boundaries used by the chapter map ---------- */
function africaWatermark(cls){
  if(typeof AFRICA === 'undefined') return '';
  const v = AFRICA.view;
  let d = '';
  for(const ds of Object.values(AFRICA.paths)) d += ds.join(' ');
  return `<div class="watermark ${cls||''}" aria-hidden="true">
    <svg viewBox="${v[0]} ${v[1]} ${v[2]} ${v[3]}" preserveAspectRatio="xMidYMid meet">
      <g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round">
        ${Object.values(AFRICA.paths).map(ds=>ds.map(x=>`<path d="${x}"/>`).join('')).join('')}
      </g>
    </svg></div>`;
}
function countryWatermark(code, cls){
  if(typeof AFRICA === 'undefined' || !code || !AFRICA.paths[code]) return '';
  return `<div class="watermark ${cls||''}" aria-hidden="true">
    <svg viewBox="${AFRICA.bboxView(code)}" preserveAspectRatio="xMidYMid meet">
      <g fill="currentColor" fill-opacity=".22" stroke="currentColor" stroke-width="1.4">
        ${AFRICA.paths[code].map(x=>`<path d="${x}"/>`).join('')}
      </g>
    </svg></div>`;
}
