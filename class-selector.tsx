"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, BookOpen } from "lucide-react"

interface ClassSelectorProps {
  onClassSelect: (classLevel: string) => void
  currentClass?: string
}

const classLevels = [
  {
    value: "1",
    label: "Class 1",
    description: "Basic Learning (Age 6-7)",
    subjects: ["Basic Math", "Reading", "Drawing"],
  },
  { value: "2", label: "Class 2", description: "Foundation Skills (Age 7-8)", subjects: ["Math", "English", "EVS"] },
  {
    value: "3",
    label: "Class 3",
    description: "Elementary Level (Age 8-9)",
    subjects: ["Math", "English", "Science", "Social Studies"],
  },
  {
    value: "4",
    label: "Class 4",
    description: "Primary Education (Age 9-10)",
    subjects: ["Math", "English", "Science", "Social Studies"],
  },
  {
    value: "5",
    label: "Class 5",
    description: "Upper Primary (Age 10-11)",
    subjects: ["Math", "English", "Science", "Social Studies", "Hindi"],
  },
  {
    value: "6",
    label: "Class 6",
    description: "Middle School (Age 11-12)",
    subjects: ["Math", "English", "Science", "Social Studies", "Hindi"],
  },
  {
    value: "7",
    label: "Class 7",
    description: "Junior Secondary (Age 12-13)",
    subjects: ["Math", "English", "Science", "Social Studies", "Hindi"],
  },
  {
    value: "8",
    label: "Class 8",
    description: "Secondary Level (Age 13-14)",
    subjects: ["Math", "English", "Science", "Social Studies", "Hindi"],
  },
  {
    value: "9",
    label: "Class 9",
    description: "High School (Age 14-15)",
    subjects: ["Math", "English", "Science", "Social Studies", "Hindi"],
  },
  {
    value: "10",
    label: "Class 10",
    description: "Senior Secondary (Age 15-16)",
    subjects: ["Math", "English", "Science", "Social Studies", "Hindi"],
  },
  {
    value: "11",
    label: "Class 11",
    description: "Higher Secondary (Age 16-17)",
    subjects: ["Physics", "Chemistry", "Math", "Biology", "English"],
  },
  {
    value: "12",
    label: "Class 12",
    description: "Pre-University (Age 17-18)",
    subjects: ["Physics", "Chemistry", "Math", "Biology", "English"],
  },
]

export function ClassSelector({ onClassSelect, currentClass }: ClassSelectorProps) {
  const [selectedClass, setSelectedClass] = useState(currentClass || "")
  const [showDetails, setShowDetails] = useState(false)

  const handleClassChange = (classLevel: string) => {
    setSelectedClass(classLevel)
    onClassSelect(classLevel)
    localStorage.setItem("preferred-class", classLevel)
  }

  useEffect(() => {
    const savedClass = localStorage.getItem("preferred-class")
    if (savedClass && !currentClass) {
      setSelectedClass(savedClass)
      onClassSelect(savedClass)
    }
  }, [currentClass, onClassSelect])

  const selectedClassData = classLevels.find((cls) => cls.value === selectedClass)

  return (
    <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-primary" />
          Select Your Class Level
        </CardTitle>
        <CardDescription>
          Choose your current class to get personalized quizzes aligned with your curriculum
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Select value={selectedClass} onValueChange={handleClassChange}>
          <SelectTrigger className="text-base">
            <SelectValue placeholder="Choose your class/grade" />
          </SelectTrigger>
          <SelectContent>
            {classLevels.map((cls) => (
              <SelectItem key={cls.value} value={cls.value}>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{cls.label}</span>
                  <span className="text-sm text-muted-foreground">({cls.description.split("(")[1]}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {selectedClassData && (
          <div className="mt-4 p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium flex items-center gap-2">
                <Users className="h-4 w-4" />
                {selectedClassData.label}
              </h4>
              <Button variant="ghost" size="sm" onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? "Hide" : "Show"} Details
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{selectedClassData.description}</p>

            {showDetails && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="h-4 w-4 text-secondary" />
                  <span className="text-sm font-medium">Common Subjects:</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {selectedClassData.subjects.map((subject) => (
                    <Badge key={subject} variant="outline" className="text-xs">
                      {subject}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
