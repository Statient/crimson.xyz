"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface PricingCardProps {
  title: string
  price: string
  features: string[]
  buttonText: string
  popular?: boolean
}

export default function PricingCard({ title, price, features, buttonText, popular = false }: PricingCardProps) {
  return (
    <Card
      className={`relative overflow-hidden backdrop-blur-md border-gray-800 transition-all duration-300 ${
        popular ? "bg-gray-900/80" : "bg-gray-900/40"
      } hover:border-gray-700`}
    >
      {popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-gray-800 text-xs font-medium px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>
          <span className="text-3xl font-bold">{price}</span>
          {price !== "$0" && <span className="text-gray-400 ml-1">one-time payment</span>}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Check className="mr-2 h-5 w-5 shrink-0 text-gray-400" />
              <span className="text-gray-300">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className={`w-full ${
            popular ? "bg-gray-800 hover:bg-gray-700 border border-gray-700" : "bg-gray-800 hover:bg-gray-700"
          }`}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  )
}
