import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function ExerciseCard({ icon, title, description, classStyle }: { icon: any, title: string, description: string, classStyle?: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className={`flex items-center ${classStyle}`} >
          {icon}
          <span className="ml-2 text-balance text-xl xl:text-2xl">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-pretty text-base xl:text-xl text-slate-700">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}