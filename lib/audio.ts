let ctx: AudioContext | null = null
let masterGain: GainNode | null = null

function getAudio() {
  if (!ctx) {
    ctx = new AudioContext()
    masterGain = ctx.createGain()
    masterGain.connect(ctx.destination)
  }
  return { ctx, masterGain: masterGain! }
}

export function setMasterVolume(volume: number) {
  const { masterGain } = getAudio()
  masterGain.gain.value = volume / 100
}

export function playSound(buffer: AudioBuffer) {
  const { ctx, masterGain } = getAudio()
  const source = ctx.createBufferSource()
  source.buffer = buffer
  source.connect(masterGain)
  source.start()
}

export async function playSoundFile(url: string) {
  const { ctx, masterGain } = getAudio()
  const response = await fetch(url)
  const arrayBuffer = await response.arrayBuffer()
  const audioBuffer = await ctx.decodeAudioData(arrayBuffer)
  const source = ctx.createBufferSource()
  source.buffer = audioBuffer
  source.connect(masterGain)
  source.start()
}
