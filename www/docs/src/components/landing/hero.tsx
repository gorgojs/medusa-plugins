import { ArrowRight } from "@medusajs/icons";
import Image from "next/image";
import Section from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <Section className="px-6 py-8 flex items-center border-transparent">
      <div className="flex flex-col lg:flex-row min-h-[420px] items-center mx-auto w-full lg:py-8 xl:py-16 sm:px-18 gap-8">
        <div className="flex-1">
          <h1 className="text-4xl font-medium mb-3">
            Gorgo helps you build faster
          </h1>
          <p className="text-lg max-w-lg mb-8 text-ui-fg-subtle">
            Unlike other platforms, the Medusa Framework allows you to easily
            customize and extend the behavior of your commerce platform to
            always fit your business needs
          </p>
          <Button variant="primary">
            Learn About the Framework <ArrowRight />
          </Button>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/illustration.svg"
            alt="Hero Image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </Section>
  );
}
