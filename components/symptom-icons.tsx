import { Activity, Brain, Moon, Utensils, Heart } from "lucide-react"

interface SymptomIconProps {
  symptom: "pain" | "nausea" | "appetite" | "sleep" | "anxiety"
  className?: string
}

export function SymptomIcon({ symptom, className = "h-4 w-4" }: SymptomIconProps) {
  const icons = {
    pain: Activity,
    nausea: Heart,
    appetite: Utensils,
    sleep: Moon,
    anxiety: Brain,
  }

  const Icon = icons[symptom]
  return <Icon className={className} />
}

export const symptomLabels = {
  pain: "Pain Relief",
  nausea: "Nausea Control",
  appetite: "Appetite",
  sleep: "Sleep",
  anxiety: "Anxiety",
}

export const symptomColors = {
  pain: "bg-red-100 text-red-700",
  nausea: "bg-amber-100 text-amber-700",
  appetite: "bg-orange-100 text-orange-700",
  sleep: "bg-indigo-100 text-indigo-700",
  anxiety: "bg-teal-100 text-teal-700",
}
