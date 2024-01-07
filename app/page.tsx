import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,

} from "@/components/ui/card"

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],

})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <Card className="w-1/2">
        <CardHeader>
          <CardTitle className={cn("text-center text-2xl text text-red-600", font.className)}>Hello!</CardTitle>
          <CardDescription className="text-center py-4">I'm Reshan, and welcome to my portfolio. I'm a Marketer and a full-stack developer, and I love to solve puzzles.</CardDescription>
        </CardHeader>
      </Card>

    </main>
  )
}
