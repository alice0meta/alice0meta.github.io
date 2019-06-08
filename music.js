// is_f= _=> typeof _ === 'function'
// is_A= Array.isArray
// is_S= _=> _&& is_f(_[Symbol.iterator])
// A= x=> is_A(x)? x : is_S(x)? [...x] : [x]
// A= _=> [..._]
ERR= _=>{ throw _ instanceof Error? _ : Error(_) }
next_= _=>_ .next().value
last= x=>{ var t ;for(t of x) ;return t }
fold= function*(f,x,a){ x=x[Symbol.iterator]() ;arguments.length===2 &&( a= next_(x) ) ;for(var t of x) yield a= f(a,t) }
foldx= (..._)=> last(fold(..._))
max= (x,f= (a,b)=>a>b )=> foldx((a,x)=> f(x,a)? x : a ,x)

zip= x=>{ var r=[] ;var I=max(x.map(_=>_.length)) ;for(var i=0;i<I;i++) r.push( x.map(_=>_[i]) ) ;return r }
oto= (..._)=> Object.assign (..._) // disgraceful name

_7lift= h=> f=>b=> (..._)=> h(f(..._))(b)
// _7call= _7=> a=>b=> _7(()=>a)(b)
// _7call(_7lift(g))
// psu= g=>f=> (..._)=> g(f(..._))
// psufu= g=>f=> a=>b=> g(f(a)(b))
p2= f=> a=>b=> f(a,b)

otof= _7lift(p2(oto))

// DELTA devicePixelRatio =poll

// __delay ALLOWS LOOPS

// to play a buffer: https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode
// to read/fft a buffer: https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode
// inverse fft is uh __wave
// to write a buffer: https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext
// to micro read/play/write a buffer: https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer/getChannelData    copyFromChannel    copyToChannel

// https://developer.mozilla.org/en-US/docs/Web/API/IIRFilterNode
// https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode
// https://developer.mozilla.org/en-US/docs/Web/API/WaveShaperNode

AC= new AudioContext()

OUT= AC.destination
var t= AC.createDynamicsCompressor({ attack:.003 ,knee:30 ,ratio:12 ,release:.25 ,threshold:-24 }) // lazy hack
t.connect(OUT) ;OUT= t

for__set= function*(o,f){ for(var i=0;i< o.length ;i++) yield o[i]= f(i) }
for__audio_buf_layers= function*(o){ for(var i=0;i< o.numberOfChannels ;i++) yield o.getChannelData(i) }
for__touchlist= function*(e){ var t=e.changedTouches ;for(var i=0 ;i<t.length ;i++) yield t[i] }
__audio_layers_open= ()=> AC.createChannelSplitter(2)
__audio_layers_close= ()=> AC.createChannelMerger(2)
// __connect_audio_layers= (?)=> a.connect(b,a_layer,b_layer)
__fps= AC.sampleRate
__audio_buf= (l_d,l)=> AC.createBuffer(l_d,l,AC.sampleRate)
__reify_audio_buf= b=>{ var _= AC.createBufferSource() ;_.buffer= b ;return { faite:_.playbackRate ,_ } }
__b_roughnoise= (l)=>{ var bs= __audio_buf(2,l) ;for(var b of for__audio_buf_layers(bs)) for__set(b,i=> Math.random() * 2 - 1 ) ;return bs }
// speak_roughnoise= ()=>{ var t= __b_roughnoise(__fps*2) ;var out= __reify_audio_buf(t)._ ;out.connect(OUT) ;out.start() }
__sine= ()=>{ var _= AC.createOscillator() ;return { hz:_.frequency ,_ } } // sine square sawtooth triangle
__wave= cossin=>{ var _= __sine() ;_._.setPeriodicWave(AC.createPeriodicWave(...cossin,{disableNormalization:false})) ;_.wave= cossin ;return _ }
__convolver= (x)=>{ var _= AC.createConvolver() ;_.buffer= x ;_.normalize= true ;return _ }
__const= ()=>{ var _= AC.createConstantSource() ;return { x:_.offset ,_ } }
__delay= ()=>{ var _= AC.createDelay() ;return { l:_.delayTime ,_ } }
__gain= ()=>{ var _= AC.createGain() ;return { gain:_.gain ,_ } }
// i have no idea if this is a reasonable api format

mix2= (__a,__b)=>(  a,b)=>( a= __a() ,b= __b() ,a._.connect(b._) ,oto({},a,b,{ _:null ,head:a._ ,out:b._ }) )

__sine_up= otof( mix2(__sine,__gain) )
({ stop(){ this.gain.cancelScheduledValues(0).setTargetAtTime(0,0,.002) } })


speak= ([x,y],s)=>{
	// x= 1-x
	var rt= 40* 2**(x*7)
	y= (1-y/10) *softsound_interpolate.at(x)

	// var harmonics= 10
	// var h= Math.max(0, Math.min(harmonics, y))
	// let harmonicWarpWidth= 1.5
	// let harmonicWarpMagnitude= 20
	// for (let i= 0; i < harmonics; i++) {
		// x= x * (i+1)
		// y= 100 /x *(1 + harmonicWarpMagnitude*(harmonicWarpWidth**(-Math.pow(i-(h * (harmonics-1)),2))))
	if( !s ){ s= __sine_up() ;s.head.start() ;s.out.connect(OUT) }
	s.gain.value= y
	s.hz.value= rt
	// }
	return s }


equalize= [[0,869],[41,869],[55,791],[66,729],[77,684],[98,623],[148,541],[216,584],[249,600],[261,605],[286,606],[305,608],[336,592],[354,581],[372,557],[380,530],[392,494],[445,382],[508,325],[548,306],[571,302],[592,290],[622,263],[642,236],[660,193],[673,138],[686,119],[700,103],[730,73],[741,65],[763,69],[776,69],[786,63],[804,59],[821,54],[840,58],[950,50],[1000,50]].map(_=>_.map(_=>_/1000))
softsound_interpolate= numeric.spline(equalize.map(_=>_[0]),equalize.map(_=>_[1]))


onload= a4441 ;function a4441() {

var style= x=>{ var t= document.createElement('style') ;t.innerHTML= x+'' ;document.head.appendChild(t) }
style` body { padding: 0; margin: 0; overflow: hidden; height: 100%; touch-action: none; } `
canvas= document.createElement('canvas') ;document.body.appendChild(canvas)

function InitializeCanvas() {
	var newwidth= screen.width * devicePixelRatio
	var newheight= screen.height * devicePixelRatio

	canvas.width= newwidth
	canvas.height= newheight
	canvas.style.width= screen.width + "px"
	canvas.style.height= screen.height + "px"
}
InitializeCanvas() ;addEventListener("resize",InitializeCanvas)

;["mousedown", "mousemove", "mouseup"].map(e=> canvas.addEventListener(e,MouseHandler) )
;["touchstart", "touchmove", "touchend"].map(e=> canvas.addEventListener(e,TouchHandler) )

// SEVERE BUG where stuff is calculated relative to screen not window size

var mousePressed= false
function MouseHandler(e) {
	if (e.type == "mousedown" && e.button === 0)
		mousePressed= true
	if (mousePressed && e.button === 0) {
		
		sound(e, 'mouse', e.type)
		
	var p= [ e.pageX * devicePixelRatio
	       , e.pageY * devicePixelRatio ]
	    w= [ e.pageX / screen.width
	       , e.pageY / screen.height ]
		dt22mgazu(27/32,40)(w)
		e.preventDefault()
	}
	if (e.type == "mouseup")
		mousePressed= false
}

a7771= {}
function sound(e, i, t) {
	var w= [ e.pageX / document.body.clientWidth
         , e.pageY / document.body.clientHeight ]
	if( t=='mouseup' ) a7771[i]&& a7771[i].stop() ;else a7771[i]= speak(w,a7771[i])
	}

TOUCHES= []
a8855= {}
function TouchHandler(e){ e.preventDefault() ;for(var t of for__touchlist(e)){
	var p= [ t.pageX * devicePixelRatio
	       , t.pageY * devicePixelRatio ]
	    w= [ t.pageX / screen.width
	       , t.pageY / screen.height ]
	    // w= [ t.pageX / document.body.clientWidth
	    //    , t.pageY / document.body.clientHeight ]
	    i= t.identifier
	TOUCHES.push(w)
	if( e.type==='touchstart' ) a8855[i]= speak(w,a8855[i])
	else if( e.type==='touchend' ) a8855[i]&& a8855[i].stop()
	else a8855[i]= speak(w,a8855[i])
	// t.force? Math.round(t.force *125 +10)
	dt22mgazu((t.identifier * 1/6.3) % 1 ,32,24,.02 )(w) } }

_draw= f=>(..._)=>{ var X= canvas.getContext("2d") ;X.save() ;f(X)(..._) ;X.restore() }
a9998= _draw(X=>(xy,h,l,d=40,a=.1)=>{
	X.translate(...xy)
	X.beginPath()
	X.arc(0,0,d,0,2*Math.PI,false)
	X.closePath()
	X.fillStyle= `hsla(${h*256},100%,${l}%,${a})`
	X.fill()
	})

dt22mgazu= (..._)=>x=> a9998([x[0]*screen.width*devicePixelRatio,x[1]*screen.height*devicePixelRatio],..._)
// var x= numeric.linspace(0,1,2000) ;var equ22= zip([ x,softsound_interpolate.at(x) ])
// setTimeout(()=>{ equalize.map(_=>[_[0],1-_[1]]).map(dt22mgazu(1/5,20,40,0.3)) },0)
// equ22.map(_=>[_[0],1-_[1]]).map(dt22mgazu(7/8,40,17,0.1))

// TODO keep track of where fingers are and continue to darken that area
// TODO make darkening not wash out
// TODO make finger colors categorized better by finger and also by time

}







beats= ()=>{

var freqoffset= 4.3

var synthr = new Tone.PolySynth(4, Tone.FMSynth);
var synthl = new Tone.PolySynth(4, Tone.FMSynth);
var polyphonicL = synthl.connect(new Tone.Panner(-1).toMaster());
var polyphonicR = synthr.connect(new Tone.Panner(1).toMaster());
var env= { attack:0 ,decay:.01 ,sustain:1 ,release:.001 }
var t= { harmonicity: 1 ,oscillator: {type:'sine'} ,envelope: env ,modulationIndex: 0/*faite*/ ,modulation: {type:'sine'} ,modulationEnvelope: env }
synthl.set(t)
synthr.set(t)

do_scale= x=>{
polyphonicL.triggerAttack(Tone.Frequency(Tone.Frequency('g4').toFrequency() - (freqoffset*0.5)).harmonize(x),'+0.0',.2)
polyphonicR.triggerAttack(Tone.Frequency(Tone.Frequency('g4').toFrequency() + (freqoffset*0.5)).harmonize(x),'+0.0',.2)
}

// do_scale([0, 4, 7])
// do_scale([0, 4, 7, 11])
// do_scale([0, 3, 7])
// do_scale([0, 3, 7, 10])
// do_scale([0, 4, 8])
// do_scale([0, 3, 6])
// do_scale([0, 3, 6, 9])
// do_scale([0, 3, 7, 11])
do_scale([0])

}
