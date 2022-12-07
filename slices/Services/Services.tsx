import { SliceComponentProps } from "@prismicio/react";

import { ServiceCard } from "@/components/ServiceCard";
import { ServiceDocument, ServicesSlice } from "@/types.generated";

const Services = ({ slice }: SliceComponentProps<ServicesSlice>) => (
  <div className="mt-10 laptop:mt-30">
    <h1 className="text-2xl text-bold">{slice.primary.title}.</h1>

    <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
      {slice.items?.map(({ services: service }) => {
        const serviceData = service as typeof service & {
          uid: string;
          data: Pick<ServiceDocument["data"], "title" | "description">;
        };

        return (
          <ServiceCard
            key={serviceData.data.title}
            title={serviceData.data.title as string}
            description={serviceData.data.description as string}
          />
        );
      })}
    </div>
  </div>
);

export default Services;
