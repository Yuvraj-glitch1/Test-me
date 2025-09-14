"use client"
import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react"

interface LanguageToggleProps {
  currentLanguage: string
  onLanguageChange: (language: string) => void
}

export function LanguageToggle({ currentLanguage, onLanguageChange }: LanguageToggleProps) {
  const handleLanguageChange = (language: string) => {
    localStorage.setItem("preferred-language", language)
    onLanguageChange(language)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
          <Languages className="h-4 w-4" />
          {currentLanguage === "en" ? "English" : "हिंदी"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleLanguageChange("en")}>English</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("hi")}>हिंदी (Hindi)</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function useLanguage() {
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferred-language")
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  const changeLanguage = (newLanguage: string) => {
    localStorage.setItem("preferred-language", newLanguage)
    setLanguage(newLanguage)
  }

  return { language, changeLanguage }
}
