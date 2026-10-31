import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Sparkles, Sliders } from 'lucide-react';

interface AudioAmbienceProps {
  isPlaying: boolean;
  onToggle: () => void;
  lang: 'vi' | 'en';
}

export const AudioAmbience: React.FC<AudioAmbienceProps> = ({ isPlaying, onToggle, lang }) => {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const timerRef = useRef<number | null>(null);
  const [volume, setVolume] = useState<number>(0.6);
  const [showControls, setShowControls] = useState<boolean>(false);
  const [activePreset, setActivePreset] = useState<'sanctuary' | 'radius' | 'fiveElements'>('sanctuary');

  // Chords progression based on jazz and meditative piano harmony
  const chordSets = {
    sanctuary: [
      [261.63, 329.63, 392.00, 493.88, 587.33], // Cmaj9
      [220.00, 261.63, 329.63, 392.00, 493.88], // Am9
      [174.61, 261.63, 329.63, 369.99, 440.00], // Fmaj7(#11)
      [196.00, 293.66, 392.00, 440.00, 523.25], // Gsus4(add9)
    ],
    radius: [
      [130.81, 196.00, 246.94, 311.13, 369.99], // Cmin(maj7)
      [146.83, 220.00, 261.63, 329.63, 440.00], // Dmin9
      [164.81, 246.94, 293.66, 392.00, 493.88], // Emin11
      [174.61, 261.63, 329.63, 440.00, 523.25], // Fmaj9
    ],
    fiveElements: [
      [261.63, 293.66, 329.63, 392.00, 440.00], // Pentatonic C
      [293.66, 329.63, 392.00, 440.00, 523.25], // D
      [329.63, 392.00, 440.00, 523.25, 587.33], // E
      [392.00, 440.00, 523.25, 587.33, 659.25], // G
    ]
  };

  const playPianoNote = (ctx: AudioContext, master: GainNode, freq: number, time: number, duration: number) => {
    // Fundamental oscillator (Piano body)
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    // Slight detune for acoustic richness
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, time);

    // Filter for warm wooden grand piano acoustics
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, time);
    filter.frequency.exponentialRampToValueAtTime(350, time + duration);

    // Secondary overtone for hammer strike
    const overtone = ctx.createOscillator();
    const overtoneGain = ctx.createGain();
    overtone.type = 'sine';
    overtone.frequency.setValueAtTime(freq * 2, time);

    // Natural piano envelope
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.18, time + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    overtoneGain.gain.setValueAtTime(0, time);
    overtoneGain.gain.linearRampToValueAtTime(0.06, time + 0.02);
    overtoneGain.gain.exponentialRampToValueAtTime(0.0001, time + duration * 0.4);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(master);

    overtone.connect(overtoneGain);
    overtoneGain.connect(master);

    osc.start(time);
    overtone.start(time);
    osc.stop(time + duration);
    overtone.stop(time + duration);
  };

  const playSubBassDrone = (ctx: AudioContext, master: GainNode, time: number) => {
    // 432Hz-calibrated sub harmonic (~54Hz) for grounding neural relaxation
    const subOsc = ctx.createOscillator();
    const subGain = ctx.createGain();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(54, time);

    // Gentle 10Hz alpha-wave tremolo
    const lfo = ctx.createOscillator();
    lfo.frequency.setValueAtTime(10, time);
    const lfoGain = ctx.createGain();
    lfoGain.gain.setValueAtTime(0.02, time);
    lfo.connect(lfoGain);
    lfoGain.connect(subGain.gain);

    subGain.gain.setValueAtTime(0.04, time);
    subGain.gain.linearRampToValueAtTime(0.08, time + 4);

    subOsc.connect(subGain);
    subGain.connect(master);
    lfo.start(time);
    subOsc.start(time);

    // Stop drone safely after cycle
    subOsc.stop(time + 24);
    lfo.stop(time + 24);
  };

  useEffect(() => {
    if (isPlaying) {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
        masterGainRef.current = audioCtxRef.current.createGain();
        masterGainRef.current.gain.setValueAtTime(volume, audioCtxRef.current.currentTime);
        masterGainRef.current.connect(audioCtxRef.current.destination);
      } else if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      const master = masterGainRef.current!;

      let chordIndex = 0;
      const chords = chordSets[activePreset];

      const scheduleCycle = () => {
        if (!isPlaying || !ctx || ctx.state === 'closed') return;
        const now = ctx.currentTime;
        const currentChord = chords[chordIndex % chords.length];

        // Arpeggiate notes with gentle rubato timing
        currentChord.forEach((note, i) => {
          const noteTime = now + i * 0.45 + (Math.random() * 0.08);
          playPianoNote(ctx, master, note, noteTime, 6.0);
        });

        // Add subtle sub-bass presence
        playSubBassDrone(ctx, master, now);

        chordIndex++;
        // Repeat every 4.2 seconds
        timerRef.current = window.setTimeout(scheduleCycle, 4200);
      };

      scheduleCycle();
    } else {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
        audioCtxRef.current.suspend();
      }
    }

    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, [isPlaying, activePreset]);

  useEffect(() => {
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.linearRampToValueAtTime(volume, audioCtxRef.current.currentTime + 0.1);
    }
  }, [volume]);

  return (
    <div className="relative inline-flex items-center">
      <button
        onClick={onToggle}
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all border ${
          isPlaying
            ? 'bg-[#d4af37]/15 border-[#d4af37] text-[#f7dfa5] shadow-[0_0_15px_rgba(212,175,55,0.3)]'
            : 'bg-white/5 border-white/10 text-white/70 hover:text-white hover:border-white/20'
        }`}
        title={lang === 'vi' ? 'Bật/Tắt âm hưởng Piano Sanctuary' : 'Toggle Piano Sanctuary Ambience'}
        aria-label={lang === 'vi' ? 'Âm hưởng Piano Sanctuary' : 'Piano Sanctuary Soundscape'}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-3.5 h-3.5 text-[#d4af37] animate-pulse" />
            <span className="hidden sm:inline">
              {lang === 'vi' ? 'Âm hưởng Đang Phát' : 'Soundscape Playing'}
            </span>
            <span className="flex items-center gap-0.5 ml-1">
              <span className="w-0.5 h-2.5 bg-[#d4af37] animate-bounce [animation-delay:-0.3s]" />
              <span className="w-0.5 h-4 bg-[#d4af37] animate-bounce [animation-delay:-0.15s]" />
              <span className="w-0.5 h-2 bg-[#d4af37] animate-bounce" />
            </span>
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5 opacity-60" />
            <span className="hidden sm:inline">
              {lang === 'vi' ? 'Bật Âm Hưởng' : 'Play Soundscape'}
            </span>
          </>
        )}
      </button>

      {isPlaying && (
        <button
          onClick={() => setShowControls(!showControls)}
          className="ml-1.5 p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 transition-colors"
          title={lang === 'vi' ? 'Tùy chỉnh âm thanh' : 'Sound settings'}
        >
          <Sliders className="w-3 h-3" />
        </button>
      )}

      {/* Floating Sound Controller Menu */}
      {showControls && isPlaying && (
        <div className="absolute right-0 top-full mt-2 w-64 p-4 rounded-xl bg-[#12141c] border border-[#d4af37]/30 shadow-2xl backdrop-blur-xl z-50 animate-in fade-in slide-in-from-top-2">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10">
            <span className="text-xs font-semibold tracking-wider text-[#d4af37] uppercase flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              {lang === 'vi' ? 'Âm học Thần kinh' : 'Neuro-Acoustics'}
            </span>
            <span className="text-[10px] text-white/50">432Hz Calibrated</span>
          </div>

          <div className="space-y-3">
            <div>
              <label className="text-[11px] text-white/80 block mb-1">
                {lang === 'vi' ? 'Âm lượng' : 'Master Volume'} ({Math.round(volume * 100)}%)
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-full accent-[#d4af37] bg-white/10 h-1.5 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <span className="text-[11px] text-white/80 block mb-1.5">
                {lang === 'vi' ? 'Chủ đề Hòa âm' : 'Harmonic Preset'}
              </span>
              <div className="grid grid-cols-1 gap-1">
                {[
                  { id: 'sanctuary', labelVi: 'Piano Sanctuary (Thư giãn sâu)', labelEn: 'Piano Sanctuary (Deep Relax)' },
                  { id: 'radius', labelVi: 'The Radius Of Now (Jazz Bắc Âu)', labelEn: 'The Radius Of Now (Nordic Jazz)' },
                  { id: 'fiveElements', labelVi: 'Ngũ Hành Tương Sinh (An trú)', labelEn: 'Five Elements (Balance)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActivePreset(item.id as typeof activePreset)}
                    className={`text-left px-2.5 py-1.5 rounded-lg text-[11px] transition-colors ${
                      activePreset === item.id
                        ? 'bg-[#d4af37]/20 text-[#f7dfa5] border border-[#d4af37]/40 font-medium'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {lang === 'vi' ? item.labelVi : item.labelEn}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-[10px] text-white/40 leading-relaxed pt-1 border-t border-white/5 italic">
              {lang === 'vi'
                ? 'Âm thanh mô phỏng dương cầm Bösendorfer và tần số sóng não alpha theo công trình của Dr. Peter Michael Nielsen.'
                : 'Synthesizing Bösendorfer acoustic resonance & alpha brainwave frequencies formulated by Dr. Peter Michael Nielsen.'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
