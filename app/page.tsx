import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,

} from "@/components/ui/card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <Card className="w-1/2">
        <CardHeader>
          <CardTitle className="text-center text-2xl text text-red-600">Hello!</CardTitle>
          <CardDescription className="text-center py-4">I'm Reshan, and welcome to my portfolio. I'm a Marketer and a full-stack developer, and I love to solve puzzles.</CardDescription>
        </CardHeader>
      </Card>

    </main>
  )
}
