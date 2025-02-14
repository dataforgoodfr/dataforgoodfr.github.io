import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="w-full py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-4 flex-col px-4 lg:px-12">
            <div className="flex gap-4 flex-col">
              <h1 className="text-4xl md:text-6xl max-w-lg tracking-tighter text-left font-bold uppercase">
                Rediriger la technologie au service de l'intérêt général
              </h1>
            </div>
            <div className="flex flex-row gap-4">
              {/* <Button size="lg" className="gap-4" variant="outline">
                Jump on a call <PhoneCall className="w-4 h-4" />
              </Button> */}
              <Button size="lg" className="gap-4">
                Nous rejoindre
              </Button>
            </div>
          </div>
          <div className="bg-muted rounded-md aspect-square"></div>
        </div>
      </div>
    </div>
  );
}
