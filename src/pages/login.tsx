import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  return (
    <div className="min-h-screen w-screen flex justify-center items-center px-2">
      <Card className="sm:min-w-xl max-w-2xl" >
        <CardHeader className="w-full flex flex-col justify-center items-center">
          <CardTitle className="flex flex-col justify-center items-center">
            <img src="/logo.png" alt="" className="w-16 h-16 rounded-md" />
            <span className="text-3xl pt-2">FACILITA PAY</span>
          </CardTitle>
          <CardDescription className="text-lg -mt-2">Bem vindo de volta!</CardDescription>  
        </CardHeader>
        <CardContent className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label>Email</label>
            <Input type="text" placeholder="Digite seu email" />
          </div>
          <div className="flex flex-col gap-1">
            <label>Senha</label>
            <Input type="password" placeholder="Digite sua senha"/>
          </div>
          <div className="pt-4 space-y-2">
            <Button className="bg-[#72FF80] hover:bg-[#72FF80]/75  text-[#111111] font-bold w-full py-4 border">LOGIN</Button>
            <Button className="bg-[#111111] hover:bg-[#111111]/75  text-[#72FF80] font-bold w-full py-4 border">CRIAR UMA CONTA</Button>
            
            <div className="flex justify-center items-center pt-2 gap-2">
              <p className="font-semibold">Esqueceu sua senha?</p>
              <a href="/forgot-password" className="underline font-light text-right sm:text-left">Recuperar senha</a>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <span className="mx-auto pb-2">ou</span>
          <Button className="w-full flex justify-center items-center gap-2.5 bg-background hover:bg-background/75  border">
            <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" className="h-6" />
            <span className="text-md text-primary uppercase">Continuar com o google</span>
          </Button>
        </CardFooter>
      </Card>
    </div>  
  )
}