import { useRef, useState, useEffect } from "react"
import { Volume2, VolumeX } from "lucide-react"

type AudioAmbientalProps = {
  src?: string
  loop?: boolean
  autoPlay?: boolean
  volume?: number
}

export const AudioAmbiental = ({
  src,
  loop = true,
  autoPlay = true,
  volume = 0.3,
}: AudioAmbientalProps) => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [activo, setActivo] = useState(autoPlay)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume 
    }
  }, [volume]) 

  const toggleAudio = () => {
    if (audioRef.current) {
      if (activo) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setActivo(!activo)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleAudio}
        className="p-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700"
        aria-label="Sonido ambiental"
      >
        {activo ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
      </button>

      <audio ref={audioRef} loop={loop} autoPlay={autoPlay}>
        <source src={src} type="audio/mp3" />
        Tu navegador no soporta audio HTML5.
      </audio>
    </div>
  )
}
