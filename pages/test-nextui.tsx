import Head from 'next/head'
import { Button, Card, CardBody, CardHeader, Input, Switch } from '@heroui/react'
import { Navbar } from '@/components/Navbar'

export default function TestHeroUI() {
  return (
    <>
      <Head>
        <title>HeroUI Test - Oko.fun</title>
        <meta name="description" content="Testing HeroUI components" />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-[#0E0E0E] pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">
            HeroUI Components Test
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Button Tests */}
            <Card className="w-full">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">Buttons</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <div className="space-y-4">
                  <Button color="primary">Primary Button</Button>
                  <Button color="secondary">Secondary Button</Button>
                  <Button color="success">Success Button</Button>
                  <Button color="warning">Warning Button</Button>
                  <Button color="danger">Danger Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                </div>
              </CardBody>
            </Card>

            {/* Input Tests */}
            <Card className="w-full">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">Inputs</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <div className="space-y-4">
                  <Input
                    type="email"
                    label="Email"
                    placeholder="Enter your email"
                  />
                  <Input
                    type="password"
                    label="Password"
                    placeholder="Enter your password"
                  />
                  <Input
                    type="text"
                    label="Text Input"
                    placeholder="Enter text"
                    variant="bordered"
                  />
                </div>
              </CardBody>
            </Card>

            {/* Switch Tests */}
            <Card className="w-full">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">Switches</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <div className="space-y-4">
                  <Switch defaultSelected color="primary">
                    Primary Switch
                  </Switch>
                  <Switch defaultSelected color="secondary">
                    Secondary Switch
                  </Switch>
                  <Switch color="success">
                    Success Switch
                  </Switch>
                  <Switch color="warning">
                    Warning Switch
                  </Switch>
                </div>
              </CardBody>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400">
              如果您能看到上述组件正常显示和交互，HeroUI 已成功集成到项目中。
            </p>
          </div>
        </div>
      </main>
    </>
  )
}