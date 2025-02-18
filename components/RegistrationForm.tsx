"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const workshops = [
  "AI and Machine Learning",
  "Blockchain Development",
  "IoT and Smart Devices",
  "Cybersecurity Essentials",
]

const contests = ["Hackathon", "Paper Presentation", "Tech Quiz", "Project Expo"]

interface FormData {
  name: string
  email: string
  phone: string
  workshops: string[]
  contests: string[]
}

export function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    workshops: [],
    contests: [],
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (category: "workshops" | "contests", item: string) => {
    setFormData((prev) => {
      if (category === "workshops") {
        // Allow only one workshop
        return { ...prev, [category]: [item] }
      } else {
        // Allow up to two contests
        const updatedContests = prev.contests.includes(item)
          ? prev.contests.filter((i) => i !== item)
          : [...prev.contests, item].slice(0, 2)
        return { ...prev, contests: updatedContests }
      }
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.workshops.length === 0) {
      toast.error("Please select one workshop")
      return
    }
    if (formData.contests.length === 0) {
      toast.error("Please select at least one contest")
      return
    }
    setIsSubmitted(true)
  }

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-100 transition-all duration-300 transform hover:scale-105"
          >
            Register Now
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-2">Register for ESPARX 2025</DialogTitle>
            <DialogDescription className="text-center text-gray-300">
              Enter your details and select one workshop and up to two contests.
            </DialogDescription>
          </DialogHeader>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium">
                  Phone
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Workshops (Select One)</Label>
                <div className="grid grid-cols-2 gap-2">
                  {workshops.map((workshop) => (
                    <div key={workshop} className="flex items-center space-x-2">
                      <Checkbox
                        id={`workshop-${workshop}`}
                        checked={formData.workshops.includes(workshop)}
                        onCheckedChange={() => handleCheckboxChange("workshops", workshop)}
                        className="border-gray-600"
                      />
                      <Label htmlFor={`workshop-${workshop}`} className="text-sm">
                        {workshop}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Contests (Select Up to Two)</Label>
                <div className="grid grid-cols-2 gap-2">
                  {contests.map((contest) => (
                    <div key={contest} className="flex items-center space-x-2">
                      <Checkbox
                        id={`contest-${contest}`}
                        checked={formData.contests.includes(contest)}
                        onCheckedChange={() => handleCheckboxChange("contests", contest)}
                        className="border-gray-600"
                      />
                      <Label htmlFor={`contest-${contest}`} className="text-sm">
                        {contest}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300"
              >
                Submit Registration
              </Button>
            </form>
          ) : (
            <div className="space-y-4 bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-center text-blue-400">Registration Successful!</h3>
              <div className="space-y-2">
                <p>
                  <strong className="text-blue-300">Name:</strong> {formData.name}
                </p>
                <p>
                  <strong className="text-blue-300">Email:</strong> {formData.email}
                </p>
                <p>
                  <strong className="text-blue-300">Phone:</strong> {formData.phone}
                </p>
                <p>
                  <strong className="text-blue-300">Workshop:</strong> {formData.workshops[0]}
                </p>
                <p>
                  <strong className="text-blue-300">Contests:</strong> {formData.contests.join(", ")}
                </p>
              </div>
              <Button
                onClick={() => setIsSubmitted(false)}
                className="w-full bg-green-600 hover:bg-green-700 text-white transition-colors duration-300"
              >
                Register Again
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
      <ToastContainer position="bottom-right" theme="dark" />
    </>
  )
}

