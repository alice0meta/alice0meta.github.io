// not= _=> _===U || _===null ?T:U
// is_c= _=> not(not(_))
// is_f= _=> typeof _ === 'function'
// is_A= Array.isArray
// is_S= _=> is_c(_)&& is_f(_[Symbol.iterator])
// A= x=> is_A(x)? x : is_S(x)? [...x] : [x]
next_= _=>_ .next().value
last= x=>{ var t ;for(t of x) ;return t }
fold= function*(f,x,a){ x=x[Symbol.iterator]() ;arguments.length===2 &&( a= next_(x) ) ;for(var t of x) yield a= f(a,t) }
foldx= (..._)=> last(fold(..._))
max= (x,f= (a,b)=>a>b )=> foldx((a,x)=> f(x,a)? x : a ,x)

ERR= _=>{ throw _ instanceof Error? _ : Error(_) }
// AS= (..._)=> Object.assign (..._)
zip= function(x){ var r=[] ;var I=max(x.map(_=>_.length)) ;for(var i=0;i<I;i++) r.push( x.map(_=>_[i]) ) ;return r }

AC= new AudioContext()
for__set= function*(o,f){ for(var i=0;i< o.length ;i++) yield o[i]= f(i) }
for__audio_buf_layers= function*(o){ for(var i=0;i< o.numberOfChannels ;i++) yield o.getChannelData(i) }
for__touchlist= function*(e){ var t=e.changedTouches ;for(var i=0 ;i<t.length ;i++) yield t[i] }
__audio_layers_open= ()=> AC.createChannelSplitter(2)
__audio_layers_close= ()=> AC.createChannelMerger(2)
// __connect_audio_layers= a.connect(b,a_layer,b_layer)
__speak_rate_s= AC.sampleRate
__audio_buf= (l_d,l)=> AC.createBuffer(l_d,l,AC.sampleRate)
__reify_audio_buf= b=>{ var _= AC.createBufferSource() ;_.buffer= b ;return _ }
__b_roughnoise= (l)=>{ var bs= __audio_buf(2,l) ;for(var b of for__audio_buf_layers(bs)) for__set(b,i=> Math.random() * 2 - 1 ) ;return bs }
speak_roughnoise= ()=>{ var t= __b_roughnoise(__speak_rate_s*2) ;var out= __reify_audio_buf(t) ;out.connect(AC.destination) ;out.start() }


__oscillator= ()=> AC.createOscillator()
__osc= ()=> AC.createOscillator()
__sine= ()=> AC.createOscillator()

__osc_set_wave_table= (o,reals,imags)=> o.setPeriodicWave(AC.createPeriodicWave(reals,imags,{disableNormalization:true}))
// https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createPeriodicWave

__constantsource= ()=> AC.createConstantSource()
__convolver= (x)=>{ var _= AC.createConvolver() ;_.buffer= x ;_.normalize= true ;return _ }
__dynamicscompressor= ()=> AC.createDynamicsCompressor()
__gain= ()=> AC.createGain()
// https://developer.mozilla.org/en-US/docs/Web/API/IIRFilterNode
// https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode
// https://developer.mozilla.org/en-US/docs/Web/API/WaveShaperNode

// https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createPeriodicWave

__delay= (l_s)=> AC.createDelay(l_s)
// &this& uses AudioParam
// what is that?

// value
// 	Represents the parameter's current volume as a floating point value; initially set to the value of AudioParam.defaultValue. Though it can be set, any modifications happening while there are automation events scheduled — that is events scheduled using the methods of the AudioParam — are ignored, without raising any exception.
// AudioParam.setValueAtTime(x,t_s)
// Schedules an instant change to the value of the AudioParam at a precise time, as measured against AudioContext.currentTime. The new value is given by the value parameter.
// AudioParam.linearRampToValueAtTime()
// Schedules a gradual linear change in the value of the AudioParam. The change starts at the time specified for the previous event, follows a linear ramp to the new value given in the value parameter, and reaches the new value at the time given in the endTime parameter.
// AudioParam.exponentialRampToValueAtTime()
// Schedules a gradual exponential change in the value of the AudioParam. The change starts at the time specified for the previous event, follows an exponential ramp to the new value given in the value parameter, and reaches the new value at the time given in the endTime parameter.
// AudioParam.setTargetAtTime()
// Schedules the start of a change to the value of the AudioParam. The change starts at the time specified in startTime and exponentially moves towards the value given by the target parameter. The exponential decay rate is defined by the timeConstant parameter, which is a time measured in seconds.
// AudioParam.setValueCurveAtTime()
// Schedules the values of the AudioParam to follow a set of values, defined by an array of floating-point numbers scaled to fit into the given interval, starting at a given start time and spanning a given duration of time.
// AudioParam.cancelScheduledValues()
// Cancels all scheduled future changes to the AudioParam.
// AudioParam.cancelAndHoldAtTime()
// Cancels all scheduled future changes to the AudioParam but holds its value at a given time until further changes are made using other methods.

__sine= (s)=>( s= AC.createOscillator() ,s.type= 'sine' ,s )
__gain= ()=> AC.createGain()
__sine_up= (s,u)=>( s=__sine() ,u= __gain() ,s.connect(u) ,{ rate:s.frequency ,gain:u.gain   ,head:s ,out:u
	// ,set(x,rt){ rt!==undefined&&( this.rate.value= rt ) ;this.gain.value= x } ,a5553:true
	,set(x,rt){ rt!==undefined&&( this.rate.value= rt ) ;this.a5553?( delete this.a5553 ,this.gain.value= x ): this.gain.setTargetAtTime(x,0,.002) } ,a5553:true
	// BUG set gets trampled over and canceled sometimes maybe :c
	,do(){ this.head.start() ;this.out.connect(AC.destination) ;return this }
	,stop(){ this.set(0) }
	} )

equalize= [[0,869],[41,869],[55,791],[66,729],[77,684],[98,623],[148,541],[216,584],[249,600],[261,605],[286,606],[305,608],[336,592],[354,581],[372,557],[380,530],[392,494],[403,475],[410,456],[423,436],[429,420],[440,405],[445,382],[459,366],[471,350],[487,345],[508,325],[532,314],[548,306],[571,302],[592,290],[611,271],[622,263],[642,236],[660,193],[673,138],[686,119],[700,103],[710,86],[721,84],[730,73],[741,65],[763,69],[776,69],[786,63],[804,59],[821,54],[840,58],[950,50],[1000,50]].map(_=>_.map(_=>_/1000))
softsound_interpolate= numeric.spline(equalize.map(_=>_[0]),equalize.map(_=>_[1]))

speak= ([x,y],s)=>{
	var rt= 40* 2**(x*7)
	y= (1-y/10) * softsound_interpolate.at(x)
	// y= softsound_interpolate.at(x)	
	// var harmonics= 10
	// var h= Math.max(0, Math.min(harmonics, y))
	// let harmonicWarpWidth= 1.5
	// let harmonicWarpMagnitude= 20
	// for (let i= 0; i < harmonics; i++) {
		// x= x * (i+1)
		// y= 100 /x *(1 + harmonicWarpMagnitude*(harmonicWarpWidth**(-Math.pow(i-(h * (harmonics-1)),2))))
	s=s|| __sine_up().do()
	s.set(y,rt)
	// }
	return s }

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
		dt22mgazu(27/32,40,0.1)(w)
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

a8855= {}
function TouchHandler(e){ e.preventDefault() ;for(var t of for__touchlist(e)){
	var p= [ t.pageX * devicePixelRatio
	       , t.pageY * devicePixelRatio ]
	    w= [ t.pageX / screen.width
	       , t.pageY / screen.height ]
	    // w= [ t.pageX / document.body.clientWidth
	    //    , t.pageY / document.body.clientHeight ]
	    i= t.identifier
	if( e.type==='touchstart' ) a8855[i]= speak(w,a8855[i])
	else if( e.type==='touchend' ) a8855[i]&& a8855[i].stop()
	else a8855[i]= speak(w,a8855[i])
	// t.force? Math.round(t.force *125 +10)
	dt22mgazu((t.identifier * 1/7) % 1 ,30,40,0.02 )(w) } }

_draw= f=>(..._)=>{ var X= canvas.getContext("2d") ;X.save() ;f(X)(..._) ;X.restore() }
a9998= _draw(X=>(xy,h,l,d,a)=>{
	X.translate(...xy)
	X.beginPath()
	X.arc(0,0,d,0,2*Math.PI,false)
	X.closePath()
	X.fillStyle= `hsla(${h*256},100%,${l}%,${a})`
	X.fill()
	})
dt22mgazu= (..._)=>x=> a9998([x[0]*screen.width*devicePixelRatio,x[1]*screen.height*devicePixelRatio],..._)
var x= numeric.linspace(0,1,2000) ;var equ22= zip([ x,softsound_interpolate.at(x) ])
setTimeout(()=>{ equalize.map(dt22mgazu(1/5,20,40,0.3)) },0)
equ22.map(dt22mgazu(7/8,40,17,0.1))

}
// DELTA devicePixelRatio =poll
