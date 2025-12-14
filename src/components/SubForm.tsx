import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail } from "lucide-react"

const SubForm = () => {
    return (
        <div>
            <Card className="w-98 p-8">
                <CardHeader>
                    <CardTitle>
                        <h2 className="body-1 font-bold text-secondray-800 text-center">Weekly NewsLetter</h2>
                    </CardTitle>
                    <CardDescription>
                        <p className="text-secondray-500 text-center body-2">Get bolg articles and offers email</p>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center border px-4 py-3 border-secondray-100">
                        <Input placeholder="email" className="border-none shadow-none"></Input>
                        <Mail className=" text-secondray-500 w-[17.5px] h-[13.75px]" />
                    </div>
                </CardContent>

                <CardFooter>
                    <Button
                        variant={"brand"}
                        size={"md"}
                        className="w-full">
                        Subscribe
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default SubForm