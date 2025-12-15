"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"
import { useState } from "react"

const SubForm = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = () => {
    console.log("Email:", email)
  }

  return (
    <Card className="w-full md:w-98 p-4">
      <CardHeader>
        <CardTitle className="text-center font-bold">
          Weekly Newsletter
        </CardTitle>
        <CardDescription className="text-center">
          Get blog articles and offers by email
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex items-center border px-4 py-1 bg-input">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-none shadow-none flex-1 bg-transparent p-0 outline-none text-sm"
          />
          <Mail className="text-secondray-500 w-[17.5px] h-[13.75px]" />
        </div>
      </CardContent>

      <CardFooter>
        <Button
          variant="brand"
          size="md"
          className="w-full"
          onClick={handleSubmit}
        >
          Subscribe
        </Button>
      </CardFooter>
    </Card>
  )
}

export default SubForm
