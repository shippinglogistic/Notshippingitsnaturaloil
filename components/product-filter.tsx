"use client"
import { Button } from "@/components/ui/button"
import { SymptomIcon, symptomLabels } from "@/components/symptom-icons"

interface ProductFilterProps {
  selectedSymptoms: string[]
  onFilterChange: (symptoms: string[]) => void
}

const symptoms = ["pain", "nausea", "appetite", "sleep", "anxiety"] as const

export function ProductFilter({ selectedSymptoms, onFilterChange }: ProductFilterProps) {
  const toggleSymptom = (symptom: string) => {
    if (selectedSymptoms.includes(symptom)) {
      onFilterChange(selectedSymptoms.filter((s) => s !== symptom))
    } else {
      onFilterChange([...selectedSymptoms, symptom])
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      <span className="text-sm font-medium text-muted-foreground mr-2 self-center">Filter by:</span>
      {symptoms.map((symptom) => (
        <Button
          key={symptom}
          variant={selectedSymptoms.includes(symptom) ? "default" : "outline"}
          size="sm"
          onClick={() => toggleSymptom(symptom)}
          className="gap-2"
        >
          <SymptomIcon symptom={symptom} className="h-4 w-4" />
          {symptomLabels[symptom]}
        </Button>
      ))}
      {selectedSymptoms.length > 0 && (
        <Button variant="ghost" size="sm" onClick={() => onFilterChange([])} className="text-muted-foreground">
          Clear all
        </Button>
      )}
    </div>
  )
}
