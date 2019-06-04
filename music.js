AC= new AudioContext()

// not= _=> _===U || _===null ?T:U
// is_c= _=> not(not(_))
// is_f= _=> typeof _ === 'function'
// is_A= Array.isArray
// is_S= _=> is_c(_)&& is_f(_[Symbol.iterator])
// A= x=> is_A(x)? x : is_S(x)? [...x] : [x]

ERR= _=>{ throw _ instanceof Error? _ : Error(_) }
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

// default​Value
// 	e initial volume of the attribute as defined by the specific AudioNode creating the AudioParam.
// max​Value
// min​Value
//  nominal (effective) range. 
// value
// 	Represents the parameter's current volume as a floating point value; initially set to the value of AudioParam.defaultValue. Though it can be set, any modifications happening while there are automation events scheduled — that is events scheduled using the methods of the AudioParam — are ignored, without raising any exception.

// AudioParam.setValueAtTime(x,t_s)
// Schedules an instant change to the value of the AudioParam at a precise time, as measured against AudioContext.currentTime



__sine= (s)=>( s= AC.createOscillator() ,s.type= 'sine' ,s )
__gain= ()=> AC.createGain()
__sine_up= (s,u)=>( s=__sine() ,u= __gain() ,s.connect(u) ,{ rate:s.frequency ,gain:u.gain   ,head:s ,out:u } )

equalize= [[0,869],[41,869],[55,791],[66,729],[77,684],[98,623],[111,574],[129,544],[148,541],[176,542],[187,576],[216,584],[249,600],[261,605],[286,606],[305,608],[336,592],[354,581],[372,557],[380,530],[392,494],[403,475],[410,456],[423,436],[429,420],[440,405],[445,382],[459,366],[471,350],[487,345],[508,325],[532,314],[548,306],[571,302],[592,290],[611,271],[622,263],[642,236],[660,193],[673,138],[686,119],[700,103],[710,86],[721,84],[730,73],[741,65],[763,69],[776,69],[786,63],[804,59],[821,54],[840,58],[845,61],[863,51],[877,45],[895,37],[917,33],[935,28],[951,26],[965,27],[981,23],[1,23]].map(_=>_.map(_=>_/1000))
softsound_interpolate= numeric.spline(equalize.map(_=>_[0]),equalize.map(_=>_[1]))

speak= ([x,y],s)=>{
	s=s||{ stop:function(){ this.os.head.stop() } }
	// s=s||{ os:[] ,stop:function(){ this.os.map(_=> _.head.stop() ) } }
	var rt= 40* 2**(x*7)
	y= (1-y) *softsound_interpolate.at(x)

	// var harmonics= 10
	// var h = Math.max(0, Math.min(harmonics, y))
	// let harmonicWarpWidth = 1.5
	// let harmonicWarpMagnitude = 20
	// for (let i = 0; i < harmonics; i++) {
		// x= x * (i+1)
		// y= 100 /x *(1 + harmonicWarpMagnitude*(harmonicWarpWidth**(-Math.pow(i-(h * (harmonics-1)),2))))
	var oo= s.os||[]
	if( !s.os ){ s.os= oo= __sine_up() ;oo.head.start() ;oo.out.connect(AC.destination) }
	oo.gain.value = y
	oo.rate.value = rt
	// }
	return s }

window.onload= a4441 ;function a4441() {
// document.open();document.close()

var style= x=>{ var t= document.createElement('style') ;t.innerHTML= x+'' ;document.head.appendChild(t) }
style` body { padding: 0; margin: 0; overflow: hidden; height: 100%; touch-action: none; } `
canvas= document.createElement('canvas') ;document.body.appendChild(canvas)

function InitializeCanvas() {
	var newwidth = window.screen.width * window.devicePixelRatio
	var newheight = window.screen.height * window.devicePixelRatio

	canvas.width = newwidth
	canvas.height = newheight
	canvas.style.width = window.screen.width + "px"
	canvas.style.height = window.screen.height + "px"
}
InitializeCanvas()
window.addEventListener("resize", function(e) { InitializeCanvas() })

;["mousedown", "mousemove", "mouseup"].map(e=> canvas.addEventListener(e, MouseHandler) )
;["touchstart", "touchmove", "touchend"].map(e=> canvas.addEventListener(e, TouchHandler) )

// SEVERE BUG where stuff is calculated relative to screen not window size

var mousePressed = false
function MouseHandler(e) {
	if (e.type == "mousedown" && e.button === 0)
		mousePressed = true
	if (mousePressed && e.button === 0) {
		
		sound(e, 'mouse', e.type)
		
	var p= [ e.pageX * window.devicePixelRatio
	       , e.pageY * window.devicePixelRatio ]
		drawTouch(p,216,40)
		e.preventDefault()
	}
	if (e.type == "mouseup")
		mousePressed = false
}

// function TouchHandler(e){ e.preventDefault() ;for(var t of for__touchlist(e)){ sound(t, e.identifier, e.type) ;drawTouch(t) } }

a7771= {}
function sound(e, i, t) {
	var w= [ e.pageX / document.body.clientWidth
         , e.pageY / document.body.clientHeight ]
	if( t=='mouseup' ){ a7771[i] && a7771[i].stop() ;delete a7771[i] }
	else a7771[i]= speak(w,a7771[i])
	}

a8855= {}
function TouchHandler(e){ e.preventDefault() ;for(var t of for__touchlist(e)){
	var p= [ t.pageX * window.devicePixelRatio
	       , t.pageY * window.devicePixelRatio ]
	    w= [ t.pageX / window.screen.width
	       , t.pageY / window.screen.height ]
	    // w= [ t.pageX / document.body.clientWidth
	    //    , t.pageY / document.body.clientHeight ]
	    i= t.identifier
	if( e.type==='touchstart' ) a8855[i]= speak(w,a8855[i])
	else if( e.type==='touchend' ){ a8855[i].stop() ;delete a8855[i] }
	else speak(w,a8855[i])
	drawTouch(p, (t.identifier * 40) % 256 ,t.force? Math.round(t.force *125 +10) : 20 ) } }

_draw= f=>(..._)=>{ var X = canvas.getContext("2d") ;X.save() ;f(X)(..._) ;X.restore() }

drawTouch= _draw(X=>(xy,h,l)=>{
	X.translate(...xy)
	X.beginPath()
	X.arc(0, 0, 40, 0, 2.0 * Math.PI, false)
	X.closePath()
	X.fillStyle= `hsla(${h},100%,${l}%,0.1)`
	X.fill()
	})

}
// DELTA window.devicePixelRatio =poll
